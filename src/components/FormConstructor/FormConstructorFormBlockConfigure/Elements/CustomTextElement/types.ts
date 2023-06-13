import { BaseProps, FormElementProps, IFormElement } from '../../../store/formElements/types'

export interface CustomTextProps{
  top: number
  left: number
  width: number
  className: string
  text: string
  height: number
  zIndex: number
}

export interface ICustomTextParams extends IFormElement {
  props: CustomTextProps
}
