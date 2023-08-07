import { BaseProps, IFormElement } from './types'
import {
  TextFieldPropForm,
  TextFieldPropSize,
  TextFieldPropStatus,
  TextFieldPropValue,
  TextFieldPropView,
  TextFieldPropWidth,
} from '@consta/uikit/TextField'
import { TextFieldPropsTextareaType } from '@consta/uikit/TextField/'
import { fillType } from './buttonTypes'

export type TextFieldProps = {
  type?: string
  width?: TextFieldPropWidth
  form?: TextFieldPropForm
  status?: TextFieldPropStatus
  size?: TextFieldPropSize
  view?: TextFieldPropView
  value?: TextFieldPropValue
  disabled?: boolean
  required?: boolean
  withClearButton?: boolean
  caption?: string
  label?: string
  labelPosition?: 'top' | 'left'
  maxLength?: number
  placeholder?: string
  step?: number | string | number[]
  incrementButtons?: boolean
  max?: number | string
  min?: number | string
  filled?: fillType
} & BaseProps &
  TextFieldPropsTextareaType<string>

export interface IFormElementTextField extends IFormElement {
  props: TextFieldProps
}
