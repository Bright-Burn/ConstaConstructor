import type { AllElementTypes, FormElementTypes, FormGroupsTypes } from '../../../../../coreTypes'

export interface IComponentCard {
  id: string
  name: string
  groupElementType?: FormGroupsTypes
  formElementType?: FormElementTypes
  isOuter?: boolean
}

export interface IComponetCardElement {
  name: string
  value: AllElementTypes
  isOuter?: boolean
}
