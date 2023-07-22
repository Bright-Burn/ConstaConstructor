import { createSlice, createEntityAdapter, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  isGridVisible: true,
  componentsStructurePanelState: true,
  settingsPanelState: true,
}

export const ViewrSlice = createSlice({
  name: 'Viewer',
  initialState,
  reducers: {
    showGrid: (state, action: PayloadAction<boolean | undefined>) => {
      state.isGridVisible = action.payload !== undefined ? action.payload : !state.isGridVisible
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
