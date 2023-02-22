import { IFormElement, ILayoutElement } from './types'

export interface AddNewFormElementPayload {
  element: IFormElement | ILayoutElement
  parent: string
}
