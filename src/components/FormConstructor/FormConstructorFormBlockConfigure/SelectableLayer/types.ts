import { ReactNode } from 'react'
import { ElementTypes, FormElementTypes, FormGroupsTypes } from '../../coreTypes'

export interface ISelectableLayer {
  parentElementId: string
  elementTypeUsage: ElementTypes
  elementType: FormGroupsTypes | FormElementTypes
  children?: ReactNode
  className?: string
}
