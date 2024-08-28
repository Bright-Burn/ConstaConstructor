import type {
  AllElementTypes,
  DraggbleElement,
  FormInstance,
  IFormElement,
  IGroupElement,
} from '../../../coreTypes'

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

export interface SaveNewProject {
  name: string
  description: string
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
