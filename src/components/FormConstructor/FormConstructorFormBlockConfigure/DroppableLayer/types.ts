import type { IFormElement, IGroupElement } from '../../coreTypes'
import { AllProps } from '../../coreTypes/formInstance'

export interface IDroppableLayer {
  parentElementId: string
  outerParentId?: string
}

export interface AddNewElementPayload {
  props: AllProps
  element: IFormElement | IGroupElement
  parent: string
}
