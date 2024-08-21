import type { AppDispatch } from '../setupStore'

import { formConstructorSlice } from './formElementsSlice'

export const setElementToCopyId = (elementId: string) => (dispatch: AppDispatch) => {
  dispatch(formConstructorSlice.actions.setElementToCopyId(elementId))
  dispatch(formConstructorSlice.actions.deselectElement())
}
