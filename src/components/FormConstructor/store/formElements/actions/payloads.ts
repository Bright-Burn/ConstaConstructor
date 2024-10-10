import type {
  AllElementTypes,
  DraggbleElement,
  FormInstance,
  IFormElement,
  IGroupElement,
  ViewInfo,
} from '../../../coreTypes'

export type UpdateBaseComponentPayload = {
  elements: (IFormElement | IGroupElement)[]
  instances: FormInstance<AllElementTypes>[]
}

/**
 * При перетаскивание базового компонента используем payload содержащий instance целиком
 */
export type AddElementsWithInstancesPayload = {
  views: (IFormElement | IGroupElement)[]
  instances: FormInstance<AllElementTypes>[]
  viewInfos: ViewInfo[]
  parentId: string
}

export interface SaveNewProject {
  name: string
}

export interface AddNewElementPayload {
  element: DraggbleElement<IFormElement | IGroupElement>
  /*Идентикатор нового радительского элемента, в ктороый происходит добавление*/
  newParentElementId: string
}

export type ReorderPayload = {
  elementId: string
  parentId: string
  left: boolean
  selectedElId?: string
}
