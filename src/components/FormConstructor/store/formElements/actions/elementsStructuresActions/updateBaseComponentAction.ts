import type { IFormElement, IGroupElement, ViewInfo } from '../../../../coreTypes'
import { copyInstances, deepCopyElements } from '../../../../utils'
import { pushHistoryElement } from '../../../history'
import type { AppDispatch, RootState } from '../../../setupStore'
import { selectInstanceAll, selectViewAll } from '../../adapters'
import { formConstructorSlice } from '../../formElementsSlice'
import type { ChangeElementLinkCountPayload } from '../../reducers'
import type { UpdateBaseComponentPayload } from '../payloads'

import { deleteViews } from './combinedViewActions'
import { getViewConnectionsToDelete } from './deleteViewActions'

/**
 * Выполняет каскадную замену компонетов или группы компонентов(базовый элемент) формы ввода на другую группу компонентов(базовый элемент)
 */
export const updateBaseComponentAction =
  (payload: UpdateBaseComponentPayload) => (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState()
    // Список Id элементов для 'обновелния'
    const sameInstanceElementsIds = new Set(state.formConstructor.sameInstanceElementsIds)
    // Список элементов для добавления
    const viewsToAdd: (IFormElement | IGroupElement)[] = []
    // Полезные данные для удаления инстансов и ссылок
    const instanceReferencesToChange: ChangeElementLinkCountPayload[] = []
    // Элементы для удаления
    const selectedViewsToDelete: (IFormElement | IGroupElement)[] = []
    const viewInfosToRestore: ViewInfo[] = []

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
        const { newViews } = deepCopyElements(payload.elements)
        const subviewsToAdd: (IFormElement | IGroupElement)[] = newViews.map(subElem => {
          return {
            ...subElem,
            instanceId: newInstancesIdsDict[subElem.instanceId],
            parentId: !subElem.parentId ? insertionParentId : subElem.parentId,
            order: !subElem.parentId ? orderForParentElem : subElem.order,
          }
        })
        viewsToAdd.push(...subviewsToAdd)
      }

      // Подготавливаем старые данные для удаления
      const { instanceReferencesToDelete, viewsToDelete, viewInfos } = getViewConnectionsToDelete(
        copiedElem.id,
        state,
      )
      // Для всех добавляемых элементов формируем payload на изменение количества ссылок с типом DEC
      instanceReferencesToChange.push(...instanceReferencesToDelete)
      viewInfosToRestore.push(...viewInfos)
      selectedViewsToDelete.push(...viewsToDelete)
    })

    // Для всех добавляемых элементов формируем payload на изменение количества ссылок с типом INC
    viewsToAdd.forEach(element => {
      instanceReferencesToChange.push({ id: element.instanceId, type: 'INC' })
    })

    // Отправляем в стор все накопленные изменения
    // Добавляем новые элементы
    dispatch(formConstructorSlice.actions.addNewView(viewsToAdd))
    // Добавляем новые инстансы
    dispatch(formConstructorSlice.actions.addNewFormInstance(newInstances))
    // Изменяем количество ссылок на инстансы - в случае если количество = 0, то инстанс будет удален
    dispatch(formConstructorSlice.actions.changeElementLinkCount(instanceReferencesToChange))
    // Удаляем старые элементы
    dispatch(deleteViews(selectedViewsToDelete.map(el => el.id)))

    // Очистка
    dispatch(formConstructorSlice.actions.setSameInstanceElementsIds([]))

    // Подготовка данных для отмены операции
    const instanceIdsForRollbackSet = new Set(
      instanceReferencesToChange.filter(ref => ref.type === 'DEC').map(ref => ref.id),
    )
    const instancesForRollBack = selectInstanceAll(state).filter(instance =>
      instanceIdsForRollbackSet.has(instance.id),
    )
    const elementsFotRollBack = selectedViewsToDelete

    // Обратное действие
    dispatch(
      pushHistoryElement(() => {
        // Возвращаем все, что удалили
        dispatch(formConstructorSlice.actions.addNewFormInstance(instancesForRollBack))
        dispatch(formConstructorSlice.actions.addNewView(elementsFotRollBack))
        dispatch(formConstructorSlice.actions.addViewInfos(viewInfosToRestore))

        // Удаляем все, что добавили
        dispatch(deleteViews(viewsToAdd.map(el => el.id)))

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
