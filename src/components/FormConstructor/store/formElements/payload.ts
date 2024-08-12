import type {
  AllElementTypes,
  DraggbleElement,
  FormInstance,
  IFormElement,
  IGroupElement,
} from '../../coreTypes'

export interface AddNewElementPayload {
  element: DraggbleElement<IFormElement | IGroupElement>
  /*Идентикатор нового радительского элемента, в ктороый происходит добавление*/
  newParentElementId: string
}

export type UpdateBaseComponentPayload = {
  elements: (IFormElement | IGroupElement)[]
  instances: FormInstance<AllElementTypes>[]
}

/**
 * При перетаскивание базового компонента используем payload содержащий instance целиком
 */
export type AddElementsWithInstancesPayload = {
  elements: (IFormElement | IGroupElement)[]
  instances: FormInstance<AllElementTypes>[]
  parentId: string
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
