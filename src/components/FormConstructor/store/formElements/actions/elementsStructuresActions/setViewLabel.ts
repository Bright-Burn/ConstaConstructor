import type { AppDispatch, RootState } from '../../../setupStore'
import { selectViewById, selectViewInfoById } from '../../adapters'
import { formConstructorSlice } from '../../formElementsSlice'

export const setViewLabel =
  (viewId: string, label: string | null) => (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState()
    const view = selectViewById(state, viewId)
    if (label != view?.type) {
      const existViewInfo = selectViewInfoById(state, viewId)
      if (existViewInfo) {
        dispatch(formConstructorSlice.actions.updateViewInfo({ id: viewId, changes: { label } }))
      } else {
        dispatch(formConstructorSlice.actions.addViewInfos([{ id: viewId, label }]))
      }
    } else {
      dispatch(formConstructorSlice.actions.deleteViewInfos([viewId]))
    }
  }
