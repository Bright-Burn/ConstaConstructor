import { AppDispatch } from '../setupStore'
import { ViewerSlice } from './viewerSlice'

const {
  toggleComponentsStructurePanel: toggleComponentsStructurePanelAction,
  togglePanelsByHotkey,
  toggleSettingsPanelState: toggleSettingsPanelStateAction,
  showGrid,
} = ViewerSlice.actions

export const togglePanels = () => (dispatch: AppDispatch) => {
  dispatch(togglePanelsByHotkey())
}

export const toggleGrid = () => (dispatch: AppDispatch) => {
  dispatch(showGrid())
}

export const toggleComponentsStructurePanel = () => (dispatch: AppDispatch) => {
  dispatch(toggleComponentsStructurePanelAction())
}

export const toggleSettingsPanelState = () => (dispatch: AppDispatch) => {
  dispatch(toggleSettingsPanelStateAction())
}
