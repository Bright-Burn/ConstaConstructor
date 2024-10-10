import type {
  TextFieldPropForm,
  TextFieldPropSize,
  TextFieldPropStatus,
  TextFieldPropsTextareaType,
  TextFieldPropValue,
  TextFieldPropView,
} from '@consta/uikit/TextField'

import type { BaseProps } from '../../../../coreTypes'

export type TextFieldProps_Deprecated = {
  type?: string
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
  filled?: boolean
} & BaseProps &
  TextFieldPropsTextareaType<string>
