import type { AppDispatch } from '../../setupStore'
import { formConstructorSlice } from '../formElementsSlice'
import type { SetNewElementDraggableElem } from '../reducers'

export const setDraggableElement =
  (dragableElements: SetNewElementDraggableElem) => (dispatch: AppDispatch) => {
    dispatch(formConstructorSlice.actions.setDraggableElement(dragableElements))
  }
