import type { AppDispatch, RootState } from '../setupStore'

import { formConstructorSlice } from './formElementsSlice'
import { selectById } from './layoutAdapterSelectors'
import type { SetNewSelectedElement } from './payload'

/**
 * Устаналивает статус выбранного элемента
 */
export const setSelectedElement =
  (payload: SetNewSelectedElement) => (dispatch: AppDispatch, getState: () => RootState) => {
    if (!payload) {
      dispatch(formConstructorSlice.actions.deselectElement())
      return
    }

    const element = selectById(getState(), payload.elementId)
    if (element) {
      dispatch(formConstructorSlice.actions.setSelectedElement({ element }))
    }
  }
