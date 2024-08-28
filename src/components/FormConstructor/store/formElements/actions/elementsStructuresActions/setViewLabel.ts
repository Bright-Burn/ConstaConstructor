import type { AppDispatch } from '../../../setupStore'
import { formConstructorSlice } from '../../formElementsSlice'

export const setViewLabel = (viewId: string, label: string) => (dispatch: AppDispatch) => {
  dispatch(formConstructorSlice.actions.replaceViewInfo({ id: viewId, changes: { label } }))
}
