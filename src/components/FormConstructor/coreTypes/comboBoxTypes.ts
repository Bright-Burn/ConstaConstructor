import { DatePickerPropDropdownForm } from '@consta/uikit/DatePicker'
import { PropForm } from './selectTypes'
import {
  BaseProps,
  BrandProps,
  ConcreteSelectedElement,
  FormElementDictTypes,
  IFormElement,
} from './types'
import { TextFieldPropSize, TextFieldPropStatus, TextFieldPropView } from '@consta/uikit/TextField'

export type comboboxItemType = {
  label: string
  id: number
  group?: string
}

export type ComboboxProps = {
  items: comboboxItemType[]
  value?: comboboxItemType[] | comboboxItemType | null
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
  groups: string[]
  groupsActive?: boolean
  dropdownForm?: DatePickerPropDropdownForm
  onChange: () => void
} & BaseProps

export type BrandComboboxProps = BrandProps<ComboboxProps, 'ComboBox'>

export type ComboBoxElement = ConcreteSelectedElement<typeof FormElementDictTypes.ComboBox>

export interface IFormElementComboBox extends IFormElement {
  props: BrandComboboxProps
}
