import uuid from 'react-uuid'

import type { AllElementTypes, FormInstance, IFormElement, IGroupElement } from '../../coreTypes'
import { deepCopyElements } from '../../utils'
import type { AppDispatch, RootState } from '../setupStore'

import { formConstructorSlice } from './formElementsSlice'
import { deleteElementFormById, type ChangeElementLinkCountPayload } from './instanceElements'
import { selectAll } from './layoutAdapterSelectors'
import { UpdateBaseComponentPayload } from './payload'
import { pushHistoryElement } from '../history'
import { selectAllInstances } from './formInstanceSelectors'

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
    const sameInstanceElements = selectAll(state).filter(elem =>
      sameInstanceElementsIds.has(elem.id),
    )
    const newInstancesIdsDict: Record<string, string> = {}
    // Создаем новые экземпляры с обновленными идентификаторами
    const instancesToAdd: FormInstance<AllElementTypes>[] = payload.instances.map(instance => {
      const newId = uuid()
      newInstancesIdsDict[instance.id] = newId
      return {
        ...instance,
        id: newId,
      }
    })

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
    dispatch(formConstructorSlice.actions.addNewFormInstance(instancesToAdd))
    // Изменяем количество ссылок на инстансы - в случае если количество = 0, то инстанс будет удален
    dispatch(formConstructorSlice.actions.changeElementLinkCount(instanceReferencesToChange))
    // Удаляем старые элементы
    dispatch(
      formConstructorSlice.actions.deleteFormElement(selectedElementsToDelete.map(el => el.id)),
    )

    // Очистка
    dispatch(formConstructorSlice.actions.setSameInstanceElementsIds([]))

    // Подготовка данных для отмены операции
    const insatnceIdsForRollbackSet = new Set(
      instanceReferencesToChange.filter(ref => ref.type === 'DEC').map(ref => ref.id),
    )
    const instancesForRollBack = selectAllInstances(state).filter(instance =>
      insatnceIdsForRollbackSet.has(instance.id),
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
      }),
    )
  }
