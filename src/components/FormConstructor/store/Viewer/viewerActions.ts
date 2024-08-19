import type { AppDispatch } from '../setupStore'

import { ViewerSlice } from './viewerSlice'

const {
  toggleComponentsStructurePanel: toggleComponentsStructurePanelAction,
  togglePanelsByHotkey,
  toggleSettingsPanelState: toggleSettingsPanelStateAction,
  showGrid,
  setViewMode,
} = ViewerSlice.actions

export const togglePanels = (direction: 'left' | 'right') => (dispatch: AppDispatch) => {
  dispatch(togglePanelsByHotkey(direction))
}

export const toggleGrid = () => (dispatch: AppDispatch) => {
  dispatch(showGrid())
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
