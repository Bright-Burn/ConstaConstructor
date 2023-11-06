import { ReactNode } from 'react'

export interface IDroppableLocalLayer {
  children?: ReactNode
  parentElementId: string
  isLayout: boolean
}

export interface BoundMetrics {
  centerPoint: number
  distance: number
}

export type ElemPositionToAdd = 'Prev' | 'Next' | 'EndOfContainer'

export const BorderStyle = '5px solid #8AAAE5'
