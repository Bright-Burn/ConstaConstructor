import type { FC } from 'react'

import type { IFormConstructorFormBlock } from '../types'

export interface IFormConstructorFormBlockConfigure extends IFormConstructorFormBlock {
  RightPanelSwitch: FC
  DeveloperPanel: FC
  Settings: FC
  ComponentsStructure: FC
  Header: FC
}
