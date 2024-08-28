import type { IFormElement, IGroupElement } from '../../../../coreTypes'
import { copyInstances, deepCopyElements } from '../../../../utils'
import { pushHistoryElement } from '../../../history'
import type { AppDispatch, RootState } from '../../../setupStore'
import { selectInstanceAll, selectViewAll } from '../../adapters'
import { formConstructorSlice } from '../../formElementsSlice'
import type { ChangeElementLinkCountPayload } from '../../reducers'
import type { UpdateBaseComponentPayload } from '../payloads'

import { deleteElementFormById } from './deleteFormElements'

/**
 * Выполняет каскадную замену компонетов или группы компонентов(базовый элемент) формы ввода на другую группу компонентов(базовый элемент)
 */
export const updateBaseComponentAction =
  (payload: UpdateBaseComponentPayload) => (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState()
    // Список Id элементов для 'обновелния'
    const sameInstanceElementsIds = new Set(state.formConstructor.sameInstanceElementsIds)
    // Список элементов для добавления
    const elementsToAdd: (IFormElement | IGroupElement)[] = []
    // Полезные данные для удаления инстансов и ссылок
    const instanceReferencesToChange: ChangeElementLinkCountPayload[] = []
    // Элементы для удаления
    const selectedElementsToDelete: (IFormElement | IGroupElement)[] = []
    //Список элементов для 'обновелния'
    const sameInstanceElements = selectViewAll(state).filter(elem =>
      sameInstanceElementsIds.has(elem.id),
    )
    // Копируем инстансы, со связью со старым id
    const { newInstances, newInstancesIdsDict } = copyInstances(payload.instances)

    // Идем по всем найденным элементам
    sameInstanceElements.forEach(copiedElem => {
      if (copiedElem.parentId) {
        // Ожидаем, что должна произойти замена на том самом месте, где стояла найденная копия
        // Поэтому parentId и order сохраняются
        const insertionParentId = copiedElem.parentId
        const orderForParentElem = copiedElem.order

        // Создаем копию всех элементов с обновленными идентификаторами экземпляров
        const subElementsToAdd: (IFormElement | IGroupElement)[] = deepCopyElements(
          payload.elements,
        ).map(subElem => {
          return {
            ...subElem,
            instanceId: newInstancesIdsDict[subElem.instanceId],
            parentId: !subElem.parentId ? insertionParentId : subElem.parentId,
            order: !subElem.parentId ? orderForParentElem : subElem.order,
          }
        })
        elementsToAdd.push(...subElementsToAdd)
      }

      // Подготавливаем старые данные для удаления
      const { instanceReferencesToDelete, elementsForDelete } = deleteElementFormById(
        copiedElem.id,
        state,
      )
      // Для всех добавляемых элементов формируем payload на изменение количества ссылок с типом DEC
      instanceReferencesToChange.push(...instanceReferencesToDelete)

      selectedElementsToDelete.push(...elementsForDelete)
    })

    // Для всех добавляемых элементов формируем payload на изменение количества ссылок с типом INC
    elementsToAdd.forEach(element => {
      instanceReferencesToChange.push({ id: element.instanceId, type: 'INC' })
    })

    // Отправляем в стор все накопленные изменения
    // Добавляем новые элементы
    dispatch(formConstructorSlice.actions.addNewFormElementAdapter(elementsToAdd))
    // Добавляем новые инстансы
    dispatch(formConstructorSlice.actions.addNewFormInstance(newInstances))
    // Изменяем количество ссылок на инстансы - в случае если количество = 0, то инстанс будет удален
    dispatch(formConstructorSlice.actions.changeElementLinkCount(instanceReferencesToChange))
    // Удаляем старые элементы
    dispatch(
      formConstructorSlice.actions.deleteFormElement(selectedElementsToDelete.map(el => el.id)),
    )

    // Очистка
    dispatch(formConstructorSlice.actions.setSameInstanceElementsIds([]))

    // Подготовка данных для отмены операции
    const instanceIdsForRollbackSet = new Set(
      instanceReferencesToChange.filter(ref => ref.type === 'DEC').map(ref => ref.id),
    )
    const instancesForRollBack = selectInstanceAll(state).filter(instance =>
      instanceIdsForRollbackSet.has(instance.id),
    )
    const elementsFotRollBack = selectedElementsToDelete

    // Обратное действие
    dispatch(
      pushHistoryElement(() => {
        // Возвращаем все, что удалили
        dispatch(formConstructorSlice.actions.addNewFormInstance(instancesForRollBack))
        dispatch(formConstructorSlice.actions.addNewFormElementAdapter(elementsFotRollBack))

        // Удаляем все, что добавили
        dispatch(formConstructorSlice.actions.deleteFormElement(elementsToAdd.map(el => el.id)))

        // Обратнае действие с типами - все что имело тип INC станет DEC, все что было DEC станет INC
        const changeLinksCountPayloads: ChangeElementLinkCountPayload[] =
          instanceReferencesToChange.map(ref => {
            return { ...ref, type: ref.type === 'INC' ? 'DEC' : 'INC' }
          })

        // Контроль ссылок
        dispatch(formConstructorSlice.actions.changeElementLinkCount(changeLinksCountPayloads))

        dispatch(formConstructorSlice.actions.setSameInstanceElementsIds([]))
      }),
    )
  }
