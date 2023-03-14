import { ReactNode } from 'react'
import { ElementTypes, FormElementTypes, FormGroupsTypes } from '../../store/formElements/types'

export interface ISelectableLayer {
  parentElementId: string
  elementTypeUsage: ElementTypes
  elementType: FormGroupsTypes | FormElementTypes
  children?: ReactNode
  className?: string
}
