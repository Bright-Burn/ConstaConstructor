import uuid from 'react-uuid'

import type { AllElementTypes, FormInstance, IFormElement, IGroupElement } from '../../coreTypes'
import { deepCopyElements } from '../../utils'
import type { AppDispatch, RootState } from '../setupStore'

import { formConstructorSlice } from './formElementsSlice'
import { deleteElementFormById, type ChangeElementLinkCountPayload } from './instanceElements'
import { selectAll } from './layoutAdapterSelectors'
import { UpdateBaseComponentPayload } from './payload'

export const updateBaseComponentAction =
  (payload: UpdateBaseComponentPayload) => (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState()
    // Список Id элементов для 'обновелния'
    const sameInstanceElementsIds = new Set(state.formConstructor.sameInstanceElementsIds)
    // Список элементов для добавления
    const elementsToAdd: (IFormElement | IGroupElement)[] = []
    // Полезные данные для удаления инстансов и ссылок
    const instanceReferencesToDelete: ChangeElementLinkCountPayload[] = []
    // Элементы для удаления
    const elementsIdsToDeleteIds: string[] = []
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
      instanceReferencesToDelete.push(...instanceReferencesToDelete)
      elementsIdsToDeleteIds.push(...elementsForDelete.map(el => el.id))
    })

    // Отправляем в стор все накопленные изменения

    dispatch(formConstructorSlice.actions.addNewFormElementAdapter(elementsToAdd))
    dispatch(formConstructorSlice.actions.addNewFormInstance(instancesToAdd))

    dispatch(formConstructorSlice.actions.changeElementLinkCount(instanceReferencesToDelete))
    dispatch(formConstructorSlice.actions.deleteFormElement(elementsIdsToDeleteIds))

    dispatch(formConstructorSlice.actions.setSameInstanceElementsIds([]))
  }
