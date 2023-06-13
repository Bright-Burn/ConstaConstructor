import { BaseProps, FormElementProps, IFormElement } from '../../../store/formElements/types'

export type CustomRectElementProps = IRectParams & FormElementProps

export interface IRectParams {
  width: string
  height: string
  top: string
  right: string
  bottom: string
  left: string
}

export interface IRectStyles {
  display: string
  background: string
}

export type CustomRectProps = IRectParams & BaseProps

export interface ICustomRectProps extends IFormElement {
  props: CustomRectProps
}
