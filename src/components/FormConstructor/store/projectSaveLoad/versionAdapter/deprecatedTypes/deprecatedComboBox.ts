import type { DatePickerPropDropdownForm } from '@consta/uikit/DatePicker'
import type {
  TextFieldPropSize,
  TextFieldPropStatus,
  TextFieldPropView,
} from '@consta/uikit/TextField'

import type { BaseProps, comboboxItemType, PropForm } from '../../../../coreTypes'

export type ComboboxProps_Deprecated = {
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
  filled?: boolean
  style?: ComboBoxStyles_Deprecated
} & BaseProps
type ComboBoxStyles_Deprecated = { maxWidth: string; minWidth: string }
