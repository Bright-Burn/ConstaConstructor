import { IFormConstructor } from '../types'

export const toggleSettingsPanelState = (state: IFormConstructor) => {
  state.settingsPanelState = !state.settingsPanelState
}
