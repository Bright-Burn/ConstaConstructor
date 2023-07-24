import { AppDispatch } from '../setupStore'
import { AddBaseComponent } from './payload'
import { baseComponentsSlice } from './baseComponentsSlices'
import { IBaseComponent } from './types'

export const addBaseElement = (el: AddBaseComponent) => (dispatch: AppDispatch) => {
  dispatch(baseComponentsSlice.actions.addNewBaseElement(el))
}

export const setDraggableBaseComponent = (el: IBaseComponent | null) => (dispatch: AppDispatch) => {
  dispatch(baseComponentsSlice.actions.setDraggableBaseComponent({ baseComponent: el }))
}
