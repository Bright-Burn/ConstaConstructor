import { ReactNode } from 'react'
import { ElementTypes } from '../../store/formElements/types'

export interface ISelectableLayer {
  parentElementId: string
  type: ElementTypes
  children?: ReactNode
}
