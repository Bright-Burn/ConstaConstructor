import { FormElementTypes, FormGroupsTypes, IFormElement, IGroupElement, UnionProps } from './types'

export interface AddNewElementPayload {
  element: IFormElement | IGroupElement
  parent: string
}

export interface SetNewSelectedElement {
  elementId: string
  elementType: FormGroupsTypes | FormElementTypes
  newProps?: UnionProps
}
