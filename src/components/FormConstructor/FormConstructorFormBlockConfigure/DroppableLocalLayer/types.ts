import { ReactNode } from 'react'
import { FormElementTypes, FormGroupsTypes } from '../../coreTypes'

export interface IDroppableLocalLayer {
  children?: ReactNode
  id: string
  parentElementId: string
  isLayout: boolean
}
