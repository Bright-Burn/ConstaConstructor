import { ReactNode } from 'react'

export interface IDroppableLocalLayer {
  children?: ReactNode
  parentElementId: string
  elemId: string
  isLayout: boolean
}

export interface BoundMetrics {
  centerPoint: number
  distance: number
}

export type ElemPositionToAdd = 1 | -1 | 0

export const BorderStyle = '5px solid #8AAAE5'
