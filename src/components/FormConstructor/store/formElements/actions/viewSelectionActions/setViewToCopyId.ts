import type { AppDispatch } from '../../../setupStore'
import { formConstructorSlice } from '../../formElementsSlice'

export const setViewToCopyId = (elementId: string | null) => (dispatch: AppDispatch) => {
  dispatch(formConstructorSlice.actions.setViewToCopyId(elementId))
  dispatch(formConstructorSlice.actions.deselectView())
}
