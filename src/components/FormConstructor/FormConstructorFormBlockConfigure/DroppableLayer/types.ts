import { IFormElement, IGroupElement } from '../../coreTypes'

export interface IDroppableLayer {
  parentElementId: string
  outerParentId?: string
}

export interface AddNewElementPayload {
  element: IFormElement | IGroupElement
  parent: string
}
