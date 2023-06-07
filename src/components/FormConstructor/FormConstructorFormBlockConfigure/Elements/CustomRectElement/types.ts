import { BaseProps, FormElementProps } from '../../../store/formElements/types';

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
