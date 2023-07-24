import { PropForm } from './selectTypes'
import { BaseProps, IFormElement } from './types'
import { TextFieldPropSize, TextFieldPropStatus, TextFieldPropView } from '@consta/uikit/TextField'

export type comboboxItemType = {
  label: string
  id: number
}

export type ComboboxProps = {
  items: comboboxItemType[]
  value?: comboboxItemType | null
  disabled?: boolean
  size?: TextFieldPropSize
  view?: TextFieldPropView
  form?: PropForm
  required?: boolean
  caption?: string
  label?: string
  status?: TextFieldPropStatus
  labelPosition?: 'top' | 'left'
  placeholder?: string
  isLoading?: boolean
  multiple?: boolean
  onChange: () => void
} & BaseProps

export interface IFormElementComboBox extends IFormElement {
  props: ComboboxProps
}
