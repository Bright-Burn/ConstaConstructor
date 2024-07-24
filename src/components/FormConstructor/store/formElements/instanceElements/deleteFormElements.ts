import { IGroupElement, IFormElement } from '../../../coreTypes'
import { pushHistoryElement } from '../../history'
import { AppDispatch, RootState } from '../../setupStore'
import { formConstructorSlice } from '../formElementsSlice'
import { selectById, selectAll } from '../layoutAdapterSelectors'

export const deleteFormElement =
  (id: string) => (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState()
    const map = new Map<string, (IGroupElement | IFormElement)[]>()
    const elementForDelete = selectById(state, id)
    dispatch(
      formConstructorSlice.actions.changeElementLinkCount({
        id: elementForDelete?.instanceId || '',
        type: 'DEC',
      }),
    )
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
    const idsForDelete = elementsForDelete.map(el => el.id)
    dispatch(formConstructorSlice.actions.deleteFormElement(idsForDelete))

    dispatch(
      pushHistoryElement(() => {
        elementsForDelete.forEach(el => {
          dispatch(formConstructorSlice.actions.addNewFormElementAdapter(el))
        })
      }),
    )
  }
