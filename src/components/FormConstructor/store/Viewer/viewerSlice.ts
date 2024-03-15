import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isGridVisible: true,
  isViewMode: false,
  componentsStructurePanelState: true,
  settingsPanelState: true,
}

export const ViewerSlice = createSlice({
  name: 'Viewer',
  initialState,
  reducers: {
    showGrid: (state, action: PayloadAction<boolean | undefined>) => {
      state.isGridVisible = action.payload !== undefined ? action.payload : !state.isGridVisible
    },
    setViewMode: state => {
      state.isViewMode = true
    },
    togglePanelsByHotkey: state => {
      if (state.componentsStructurePanelState || state.settingsPanelState) {
        state.componentsStructurePanelState = false
        state.settingsPanelState = false
      } else {
        state.componentsStructurePanelState = true
        state.settingsPanelState = true
      }
    },
    toggleSettingsPanelState: state => {
      state.settingsPanelState = !state.settingsPanelState
    },
    toggleComponentsStructurePanel: state => {
      state.componentsStructurePanelState = !state.componentsStructurePanelState
    },
  },
})
