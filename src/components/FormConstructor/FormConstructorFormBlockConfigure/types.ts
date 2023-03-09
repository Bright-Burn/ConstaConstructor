import { FC } from 'react'
import { IFormConstructorFormBlock } from '../types'

export interface IFormConstructorFormBlockConfigure extends IFormConstructorFormBlock {
  Settings: FC
  ConponentsStructure: FC
}
