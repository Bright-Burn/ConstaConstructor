import type { RootState } from '../setupStore'

const getViewer = (state: RootState) => state.Viewer

export const getComponentsStructurePanelState = (state: RootState) =>
  getViewer(state).componentsStructurePanelState
export const getSettingsPanelState = (state: RootState) => getViewer(state).settingsPanelState
export const checkIsGridVisible = (state: RootState) => getViewer(state).isGridVisible
export const checkViewMode = (state: RootState) => getViewer(state).isViewMode
