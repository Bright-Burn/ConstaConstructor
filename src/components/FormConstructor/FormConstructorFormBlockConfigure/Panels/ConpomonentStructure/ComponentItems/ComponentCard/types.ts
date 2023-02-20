import { ElementTypes, FormElementTypes } from '../../../../../store/formElements/types'

export interface IComponentCard {
  id: string
  name: string
  formElementType?: FormElementTypes
  elemType: ElementTypes
}
