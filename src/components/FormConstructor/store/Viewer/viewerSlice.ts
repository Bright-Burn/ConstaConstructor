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
    togglePanelsByHotkey: (state, action: PayloadAction<'left' | 'right'>) => {
      if (action.payload === 'left' && state.componentsStructurePanelState) {
        state.componentsStructurePanelState = false
      } else if (action.payload === 'left') {
        state.componentsStructurePanelState = true
      }
      if (action.payload === 'right' && state.settingsPanelState) {
        state.settingsPanelState = false
      } else if (action.payload === 'right') {
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
