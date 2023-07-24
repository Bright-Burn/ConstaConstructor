import { RootState } from '../setupStore'

export const getComponentsStructurePanelState = (state: RootState) =>
  state.Viewer.componentsStructurePanelState
export const getSettingsPanelState = (state: RootState) => state.Viewer.settingsPanelState
export const checkIsGridVisible = (state: RootState) => state.Viewer.isGridVisible
