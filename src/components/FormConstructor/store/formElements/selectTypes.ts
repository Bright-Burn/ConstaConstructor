import { BaseProps, IFormElement } from './types'
import {
  TextFieldPropSize,
  TextFieldPropView,
  TextFieldPropForm,
  TextFieldPropStatus,
} from '@consta/uikit/TextField'

export type ITEM = {
  id: number
  label: string
}

type TextContent = { content: string }

export type SelectProps = {
  disabled?: boolean
  size?: TextFieldPropSize
  view?: TextFieldPropView
  form?: TextFieldPropForm
  items: ITEM[]
  value?: ITEM | null
  required?: boolean
  status?: TextFieldPropStatus
  caption?: string
  label?: string
  labelPosition?: 'top' | 'left'
  placeholder?: string
  isLoading?: boolean
  onChange: () => void
} & BaseProps &
  TextContent

export interface IFormElementSelect extends IFormElement {
  props: SelectProps
}

