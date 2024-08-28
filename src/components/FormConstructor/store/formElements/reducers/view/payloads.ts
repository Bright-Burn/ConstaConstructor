import type {
  AllElementTypes,
  DraggbleElement,
  IFormElement,
  IGroupElement,
} from '../../../../coreTypes'

export type SetNewElementDraggableElem = {
  element: DraggbleElement<IFormElement | IGroupElement> | null
}

export type SetNewSelectedView = {
  elementId: string
  elementType: AllElementTypes
} | null
