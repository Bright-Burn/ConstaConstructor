import { PanelStatePayload } from '../payload'

export const togglePanelByHotKey = (state: PanelStatePayload) => {
  if (
    (state.componentsStructurePanelState === true && state.settingsPanelState === false) ||
    (state.componentsStructurePanelState === false && state.settingsPanelState) ||
    (state.componentsStructurePanelState === true && state.settingsPanelState)
  ) {
    state.componentsStructurePanelState = false
    state.settingsPanelState = false
  } else if (state.componentsStructurePanelState === false && state.settingsPanelState === false) {
    state.componentsStructurePanelState = true
    state.settingsPanelState = true
  }
}
