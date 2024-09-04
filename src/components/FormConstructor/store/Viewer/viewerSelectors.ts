import type { RootState } from '../setupStore'

const getViewer = (state: RootState) => state.Viewer

export const getComponentsStructurePanelState = (state: RootState) =>
  getViewer(state).componentsStructurePanelState

export const getRightPanelType = (state: RootState) => getViewer(state).rightPanelType
export const getRightPanelState = (state: RootState) => getViewer(state).rightPanelState
export const checkIsGridVisible = (state: RootState) => getViewer(state).isGridVisible
export const checkViewMode = (state: RootState) => getViewer(state).isViewMode
