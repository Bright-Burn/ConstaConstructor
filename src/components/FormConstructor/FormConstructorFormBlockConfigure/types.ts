import type { FC } from 'react'

import type { IFormConstructorFormBlock } from '../types'

export interface IFormConstructorFormBlockConfigure extends IFormConstructorFormBlock {
  Settings: FC
  ComponentsStructure: FC
  Header: FC
}
