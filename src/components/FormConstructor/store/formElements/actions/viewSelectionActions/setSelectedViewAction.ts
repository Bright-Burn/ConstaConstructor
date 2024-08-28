import type { AppDispatch, RootState } from '../../../setupStore'
import { selectViewById } from '../../adapters'
import { formConstructorSlice } from '../../formElementsSlice'
import type { SetNewSelectedView } from '../../reducers'

/**
 * Устаналивает статус выбранного элемента
 */
export const setSelectedView =
  (payload: SetNewSelectedView) => (dispatch: AppDispatch, getState: () => RootState) => {
    if (!payload) {
      dispatch(formConstructorSlice.actions.deselectView())
      return
    }

    const element = selectViewById(getState(), payload.elementId)
    if (element) {
      dispatch(formConstructorSlice.actions.setSelectedView({ element }))
    }
  }
