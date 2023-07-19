import { AppDispatch } from '../setupStore'
import { ViewrSlice } from './slice'

export const togglePanels = () => (dispatch: AppDispatch) => {
  dispatch(ViewrSlice.actions.togglePanelsByHotkey())
}

export const toggleGrid = () => (dispatch: AppDispatch) => {
  dispatch(ViewrSlice.actions.showGrid())
}

export const toggleComponentsStructurePanel = () => (dispatch: AppDispatch) => {
  dispatch(ViewrSlice.actions.toggleComponentsStructurePanel())
}

export const toggleSettingsPanelState = () => (dispatch: AppDispatch) => {
  dispatch(ViewrSlice.actions.toggleSettingsPanelState())
}
