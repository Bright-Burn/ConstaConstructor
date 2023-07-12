import { ISavePoint } from '../history'
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

export interface ChangeActivePage {
  id: string
}

export interface DeletePage {
  id: string
}

export interface LoadFromSavePoint {
  savePoint: ISavePoint
}
