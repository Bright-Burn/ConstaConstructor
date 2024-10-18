import type { AppDispatch } from '../setupStore'

import { baseComponentsSlice } from './baseComponentsSlices'
import type { IBaseComponent } from './types'

export const setDraggableBaseComponent = (el: IBaseComponent | null) => (dispatch: AppDispatch) => {
  dispatch(baseComponentsSlice.actions.setDraggableBaseComponent({ baseComponent: el }))
}
