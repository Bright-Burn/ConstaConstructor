import type { ReactNode } from 'react'

import type { AllElementTypes, ElementTypes } from '../../coreTypes'

export interface ISelectableLayer {
  parentElementId: string
  elementTypeUsage: ElementTypes
  elementType: AllElementTypes
  children?: ReactNode
  className?: string
}
