import type { AppDispatch } from '../setupStore'

import { ViewerSlice } from './viewerSlice'

const {
  toggleComponentsStructurePanel: toggleComponentsStructurePanelAction,
  togglePanelsByHotkey,
  toggleSettingsPanelState: toggleSettingsPanelStateAction,
  showGrid,
  switchDevMode,
  setViewMode,
} = ViewerSlice.actions

export const togglePanels = () => (dispatch: AppDispatch) => {
  dispatch(togglePanelsByHotkey())
}

export const toggleGrid = () => (dispatch: AppDispatch) => {
  dispatch(showGrid())
}
export const toggleDevMode = () => (dispatch: AppDispatch) => {
  dispatch(switchDevMode())
}
export const onSetViewMode = () => (dispatch: AppDispatch) => {
  dispatch(setViewMode())
}

export const toggleComponentsStructurePanel = () => (dispatch: AppDispatch) => {
  dispatch(toggleComponentsStructurePanelAction())
}

export const toggleSettingsPanelState = () => (dispatch: AppDispatch) => {
  dispatch(toggleSettingsPanelStateAction())
}
