import { AppDispatch } from '../setupStore'
import { ViewrSlice } from './slice'

export const togglePanels = () => (dispatch: AppDispatch) => {
  dispatch(ViewrSlice.actions.togglePanelsByHotkey())
}

export const toggleGrid = () => (dispatch: AppDispatch) => {
  console.log(1)
  dispatch(ViewrSlice.actions.showGrid())
}
