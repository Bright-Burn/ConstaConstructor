import type {
  TextFieldPropForm,
  TextFieldPropSize,
  TextFieldPropStatus,
  TextFieldPropsTextareaType,
  TextFieldPropValue,
  TextFieldPropView,
} from '@consta/uikit/TextField'

import type { InstanceProps } from './instanceProps'
import type {
  BrandProps,
  ConcreteSelectedView,
  FormElementDictTypes,
  IFormElement,
  OmitInstanceId,
} from './types'

type UiLibProps = {
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
} & TextFieldPropsTextareaType<string>

type Styles = {
  filled?: boolean
}

export type TextFieldProps = InstanceProps<UiLibProps, Styles>

export type BrandTextFieldProps = BrandProps<TextFieldProps, 'TextField'>

export type TextFieldElement = ConcreteSelectedView<typeof FormElementDictTypes.TextField>

export type IFormElementTextField = OmitInstanceId<
  IFormElement & {
    props: BrandTextFieldProps
  }
>
