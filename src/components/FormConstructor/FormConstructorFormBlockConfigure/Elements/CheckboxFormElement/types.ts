import { FormElementTypes, IFormElement } from '../../../store/formElements/types'

export interface ICheckboxFormElement {
  formElement: IFormElement
  value: FormElementTypes
}
