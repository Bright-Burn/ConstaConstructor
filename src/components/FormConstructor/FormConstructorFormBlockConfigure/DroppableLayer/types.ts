import type { DraggbleElement, IFormElement, IGroupElement } from '../../coreTypes'

export interface IDroppableLayer {
  parentElementId: string
  outerParentId?: string
}

export interface AddNewElementPayload {
  element: DraggbleElement<IFormElement | IGroupElement>
  parent: string
}
