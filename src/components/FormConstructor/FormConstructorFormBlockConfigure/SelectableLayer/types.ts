import { ReactNode } from 'react'
import { ElementTypes, FormElementTypes } from '../../store/formElements/types'

export interface ISelectableLayer {
  parentElementId: string
  elementType: ElementTypes
  formElementType?: FormElementTypes
  children?: ReactNode
}
