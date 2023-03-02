import { FormElementTypes, FormGroupsTypes, IFormElement, IGroupElement, UnionProps } from './types'

export interface AddNewElementPayload {
  element: IFormElement | IGroupElement
  parent: string
}
export interface DeleteElementPayload {
  elementId: string
}

export interface SetNewSelectedElement {
  elementId: string
  elementType: FormGroupsTypes | FormElementTypes
  newProps?: UnionProps
}

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
