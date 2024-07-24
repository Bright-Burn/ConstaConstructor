import { DraggbleElement, UnionProps } from '../../coreTypes'

export interface IDroppableLayer {
  parentElementId: string
  outerParentId?: string
}

export interface AddNewElementPayload {
  element: DraggbleElement
  parent: string
}
