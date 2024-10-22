import type { AppDispatch } from '../setupStore'

import type { RightPanelType } from './types'
import { ViewerSlice } from './viewerSlice'

const {
  toggleComponentsStructurePanel: toggleComponentsStructurePanelAction,
  setUseVirtualization,
  togglePanelsByHotkey,
  toggleSettingsPanelState: toggleSettingsPanelStateAction,
  showGrid,
  setViewMode,
  setRightPanelType,
} = ViewerSlice.actions

export const togglePanels = (direction: 'left' | 'right') => (dispatch: AppDispatch) => {
  dispatch(togglePanelsByHotkey(direction))
}

export const setRightPanelMode = (type: RightPanelType) => (dispatch: AppDispatch) => {
  dispatch(setRightPanelType(type))
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

export const useVirtualization = (useVirtualization: boolean) => (dispatch: AppDispatch) => {
  alert(`Virtualization ${useVirtualization ? 'On' : 'Off'}`)
  dispatch(setUseVirtualization(useVirtualization))
}
