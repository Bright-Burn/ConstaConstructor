import { FormElementTypes, FormGroupsTypes } from '../../../../store/formElements/types'

export interface IComponentCard {
  id: string
  name: string
  groupElementType?: FormGroupsTypes
  formElementType?: FormElementTypes
}
