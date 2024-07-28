import type {
  AllElementTypes,
  DraggbleElement,
  FormElementTypes,
  IFormElement,
  IGroupElement,
} from '../../coreTypes'

export interface AddNewElementPayload {
  element: DraggbleElement<IFormElement | IGroupElement>
  parent: string
}

export interface PanelStatePayload {
  componentsStructurePanelState?: boolean
  settingsPanelState?: boolean
}

export type SetNewSelectedElement = {
  elementId: string
  elementType: AllElementTypes
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

export type SetNewElementDraggableElem = {
  element: DraggbleElement<IFormElement | IGroupElement> | null
}

export interface ChangeActivePage {
  id: string
}

export interface ChangeNamePage {
  pageName: string
}

export interface DeletePage {
  id: string
}
