import { ReactNode } from 'react'
import { FormElementTypes, FormGroupsTypes } from '../../coreTypes'

export interface IDroppableLocalLayer {
  children?: ReactNode
  parentElementId: string
  isLayout: boolean
}
