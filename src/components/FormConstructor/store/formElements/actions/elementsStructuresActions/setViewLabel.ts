import type { AppDispatch } from '../../../setupStore'
import { formConstructorSlice } from '../../formElementsSlice'

export const setViewLabel = (viewId: string, label: string | null) => (dispatch: AppDispatch) => {
  dispatch(formConstructorSlice.actions.updateViewInfo({ id: viewId, changes: { label } }))
}
