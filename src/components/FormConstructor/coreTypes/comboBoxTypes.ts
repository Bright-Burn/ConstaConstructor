import type { DatePickerPropDropdownForm } from '@consta/uikit/DatePicker'
import type {
  TextFieldPropSize,
  TextFieldPropStatus,
  TextFieldPropView,
} from '@consta/uikit/TextField'

import type { PropForm } from './selectTypes'
import type {
  BaseProps,
  BrandProps,
  ConcreteSelectedElement,
  FormElementDictTypes,
  IFormElement,
} from './types'

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
} & BaseProps

export type BrandComboboxProps = BrandProps<ComboboxProps, 'ComboBox'>

export type ComboBoxElement = ConcreteSelectedElement<typeof FormElementDictTypes.ComboBox>

export interface IFormElementComboBox extends IFormElement {
  props: BrandComboboxProps
}
