import type { IFormElement, IGroupElement } from '../../../coreTypes'
import { pushHistoryElement } from '../../history'
import type { AppDispatch, RootState } from '../../setupStore'
import { formConstructorSlice } from '../formElementsSlice'
import { selectAll, selectById } from '../layoutAdapterSelectors'

import type { ChangeElementLinkCountPayload } from './types'

export const deleteFormElement =
  (id: string, withHistory: boolean = true) =>
  (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState()
    const map = new Map<string, (IGroupElement | IFormElement)[]>()
    const elementForDelete = selectById(state, id)

    if (!elementForDelete) return
    const allElements = selectAll(state)

    allElements.forEach(el => {
      if (el.parentId && map.get(el.parentId)) {
        map.set(el.parentId, [...(map.get(el.parentId) ?? []), el])
      } else if (el.parentId) {
        map.set(el.parentId, [el])
      }
    })

    const getElementsForDelete = (parent: IFormElement | IGroupElement) => {
      let elemsForDelete: (IFormElement | IGroupElement)[] = []
      const arrForDelete = map.get(parent.id)

      arrForDelete?.forEach(el => {
        if (map.get(el.id)) {
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
    dispatch(formConstructorSlice.actions.changeElementLinkCount(instancReferencesToDelete))
    const idsForDelete = elementsForDelete.map(el => el.id)
    dispatch(formConstructorSlice.actions.deleteFormElement(idsForDelete))

    withHistory &&
      dispatch(
        pushHistoryElement(() => {
          dispatch(formConstructorSlice.actions.addNewFormElementAdapter(elementsForDelete))
        }),
      )
  }