import { FormElementTypes, IFormElement } from '../../../store/formElements/types'

export interface IBadgeFormElement {
  formElement: IFormElement
  value: FormElementTypes
}
