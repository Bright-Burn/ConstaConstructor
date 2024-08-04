import type { IFormElement, IGroupElement } from '../../../coreTypes'
import { pushHistoryElement } from '../../history'
import type { AppDispatch, RootState } from '../../setupStore'
import { formConstructorSlice } from '../formElementsSlice'
import { selectAll, selectById } from '../layoutAdapterSelectors'

import type { ChangeElementLinkCountPayload } from './types'

const deleteElementFormById = (id: string, state: RootState) => {
  const parentIdElemeMap = new Map<string, (IGroupElement | IFormElement)[]>()
  const elementForDelete = selectById(state, id)

  if (!elementForDelete) {
    return {
      elementsForDelete: [],
      instancReferencesToDelete: [],
    }
  }
  const allElements = selectAll(state)

  allElements.forEach(el => {
    if (el.parentId && parentIdElemeMap.get(el.parentId)) {
      parentIdElemeMap.set(el.parentId, [...(parentIdElemeMap.get(el.parentId) ?? []), el])
    } else if (el.parentId) {
      parentIdElemeMap.set(el.parentId, [el])
    }
  })

  const getElementsForDelete = (parent: IFormElement | IGroupElement) => {
    let elemsForDelete: (IFormElement | IGroupElement)[] = []
    const arrForDelete = parentIdElemeMap.get(parent.id)

    arrForDelete?.forEach(el => {
      if (parentIdElemeMap.get(el.id)) {
        elemsForDelete = [...elemsForDelete, ...getElementsForDelete(el)]
      }

      elemsForDelete.push(el)
    })

    return elemsForDelete
  }
  const elementsForDelete = [elementForDelete, ...getElementsForDelete(elementForDelete)]
  const instancReferencesToDelete: ChangeElementLinkCountPayload[] = elementsForDelete.map(
    element => {
      return {
        id: element.instanceId,
        type: 'DEC',
      }
    },
  )
  return {
    elementsForDelete,
    instancReferencesToDelete,
  }
}

/**
 * Действие пользователя - удалить элемент
 * @param id Идентифкатор элемента
 */
export const deleteFormElement =
  (id: string) => (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState()
    const { instancReferencesToDelete, elementsForDelete } = deleteElementFormById(id, state)
    dispatch(formConstructorSlice.actions.changeElementLinkCount(instancReferencesToDelete))
    const idsForDelete = elementsForDelete.map(el => el.id)
    dispatch(formConstructorSlice.actions.deleteFormElement(idsForDelete))
    dispatch(
      pushHistoryElement(() => {
        dispatch(formConstructorSlice.actions.addNewFormElementAdapter(elementsForDelete))
      }),
    )
  }

/**
 * Обратное действие на добавление элемента - удалить элемент
 * @param id Идентифкатор элемента
 */
export const deleteFormElementHistory =
  (id: string) => (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState()
    const { instancReferencesToDelete, elementsForDelete } = deleteElementFormById(id, state)
    dispatch(formConstructorSlice.actions.changeElementLinkCount(instancReferencesToDelete))
    const idsForDelete = elementsForDelete.map(el => el.id)
    dispatch(formConstructorSlice.actions.deleteFormElement(idsForDelete))
  }
