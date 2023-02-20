import { FC } from 'react'
import { IFormConstructorFormBlock } from '../types'

export interface IFormConstructorFormBlockConfigure extends IFormConstructorFormBlock {
  SettingsBlock: FC
  ConpomonentStructureBlock: FC
}
