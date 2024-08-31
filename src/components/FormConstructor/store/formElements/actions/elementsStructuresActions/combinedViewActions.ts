import type { AppDispatch } from '../../../setupStore'
import { formConstructorSlice } from '../../formElementsSlice'

export const deleteViews = (ids: string[]) => (dispatch: AppDispatch) => {
  dispatch(formConstructorSlice.actions.deleteFormElement(ids))
  dispatch(formConstructorSlice.actions.deleteViewInfos(ids))
}
