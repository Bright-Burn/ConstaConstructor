import type { AppDispatch, RootState } from '../../../setupStore'
import { selectViewById } from '../../adapters'
import { formConstructorSlice } from '../../formElementsSlice'
import type { SetNewSelectedElement } from '../../reducers'

/**
 * Устаналивает статус выбранного элемента
 */
export const setSelectedView =
  (payload: SetNewSelectedElement) => (dispatch: AppDispatch, getState: () => RootState) => {
    if (!payload) {
      dispatch(formConstructorSlice.actions.deselectElement())
      return
    }

    const element = selectViewById(getState(), payload.elementId)
    if (element) {
      dispatch(formConstructorSlice.actions.setSelectedView({ element }))
    }
  }
