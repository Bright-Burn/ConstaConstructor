import type { AppDispatch } from '../setupStore'

import { baseComponentsSlice } from './baseComponentsSlices'
import type { AddBaseComponent } from './payload'
import type { IBaseComponent } from './types'

export const addBaseElement = (el: AddBaseComponent) => (dispatch: AppDispatch) => {
  dispatch(baseComponentsSlice.actions.addNewBaseElement(el))
}

export const setDraggableBaseComponent = (el: IBaseComponent | null) => (dispatch: AppDispatch) => {
  dispatch(baseComponentsSlice.actions.setDraggableBaseComponent({ baseComponent: el }))
}
