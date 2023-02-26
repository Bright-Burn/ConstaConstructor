import { FormElementTypes, FormGroupsTypes, IFormElement, ILayoutElement } from './types'

export interface AddNewElementPayload {
  element: IFormElement | ILayoutElement
  parent: string
}

export interface SetNewSelectedElement {
  elementId: string
  elementType: FormGroupsTypes | FormElementTypes
}
