import { FormElementTypes, FormGroupsTypes, IFormElement, IGroupElement, UnionProps } from './types'

export interface AddNewElementPayload {
  element: IFormElement | IGroupElement
  parent: string
}

export interface DeleteElementPayload {
  elementId: string
}

export interface PanelStatePayload {
  componentsStructurePanelState?: boolean
  settingsPanelState?: boolean
}

export type SetNewSelectedElement = {
  elementId: string
  elementType: FormGroupsTypes | FormElementTypes
  newProps?: UnionProps
} | null

export interface ShowGrid {
  isGridVisible: boolean
}

export interface SaveNewProject {
  name: string
  description: string
}

export interface LoadProjectFromStorage {
  name: string
}

export interface LoadProjectFromFile {
  projectJson: string
}

export interface SetNewElementDraggableElem {
  element: IFormElement | IGroupElement | null
}

export class CancleSetNewSelectedElement {
  elementId: string
  prevProps?: UnionProps

  constructor(elementId: string, prevProps: UnionProps) {
    this.elementId = elementId
    this.prevProps = prevProps
  }
}

export interface ElementParentPair {
  element: IFormElement | IGroupElement
  parentId: string
}

export class CancelDelete {
  deleteItems: ElementParentPair[]

  constructor(deleteItems: ElementParentPair[]) {
    this.deleteItems = deleteItems
  }
}

export class CancelAddElement {
  elementsIds: string[]

  constructor(elementsIds: string[]) {
    this.elementsIds = elementsIds
  }
}

export type HistoryAction = CancleSetNewSelectedElement | CancelDelete | CancelAddElement
