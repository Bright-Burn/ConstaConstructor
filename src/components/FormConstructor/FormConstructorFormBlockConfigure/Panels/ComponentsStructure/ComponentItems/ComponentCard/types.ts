import { FormElementTypes, FormGroupsTypes } from '../../../../../coreTypes'

export interface IComponentCard {
  id: string
  name: string
  groupElementType?: FormGroupsTypes
  formElementType?: FormElementTypes
}

export interface IComponetCardElement {
  name: string
  value: FormGroupsTypes | FormElementTypes
  isOuter?: boolean
}
