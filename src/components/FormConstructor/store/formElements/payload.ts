import type {
  FormElementTypes,
  FormGroupsTypes,
  IFormElement,
  IGroupElement,
  UnionProps,
} from '../../coreTypes'
export interface AddNewElementPayload {
  element: IFormElement | IGroupElement
  parent: string
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

export interface SetNewElementDraggableElem<T extends FormElementTypes = FormElementTypes> {
  element: IFormElement<T> | IGroupElement | null
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
