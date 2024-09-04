import { Values } from '../../utils'

export type ViewerSliceState = {
  isGridVisible: boolean
  isViewMode: boolean
  componentsStructurePanelState: boolean
  rightPanelState: boolean

  rightPanelType: RightPanelType
}

export const RightPanelsSwitch = {
  DeveloperPanel: 'DeveloperPanel',
  Settings: 'Settings',
} as const

export type RightPanelType = Values<typeof RightPanelsSwitch>
