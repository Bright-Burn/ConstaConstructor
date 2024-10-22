import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import type { RightPanelType, ViewerSliceState } from './types'
import { RightPanelsSwitch } from './types'

const initialState: ViewerSliceState = {
  isGridVisible: true,
  isViewMode: false,
  componentsStructurePanelState: true,
  rightPanelState: true,
  useVirtualization: false,
  rightPanelType: RightPanelsSwitch.Settings,
}

export const ViewerSlice = createSlice({
  name: 'Viewer',
  initialState,
  reducers: {
    setUseVirtualization: (state, action: PayloadAction<boolean>) => {
      state.useVirtualization = action.payload
    },
    showGrid: (state, action: PayloadAction<boolean | undefined>) => {
      state.isGridVisible = action.payload !== undefined ? action.payload : !state.isGridVisible
    },
    setViewMode: state => {
      state.isViewMode = true
    },
    setRightPanelType: (state, action: PayloadAction<RightPanelType>) => {
      state.rightPanelType = action.payload
    },
    togglePanelsByHotkey: (state, action: PayloadAction<'left' | 'right'>) => {
      if (action.payload === 'left' && state.componentsStructurePanelState) {
        state.componentsStructurePanelState = false
      } else if (action.payload === 'left') {
        state.componentsStructurePanelState = true
      }
      if (action.payload === 'right' && state.rightPanelState) {
        state.rightPanelState = false
      } else if (action.payload === 'right') {
        state.rightPanelState = true
      }
    },
    toggleSettingsPanelState: state => {
      state.rightPanelState = !state.rightPanelState
    },
    toggleComponentsStructurePanel: state => {
      state.componentsStructurePanelState = !state.componentsStructurePanelState
    },
  },
})
