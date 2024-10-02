import type { DatePickerPropDropdownForm } from '@consta/uikit/DatePicker'
import type {
  TextFieldPropSize,
  TextFieldPropStatus,
  TextFieldPropView,
} from '@consta/uikit/TextField'

import type { InstanceProps } from './instanceProps'
import type { PropForm } from './selectTypes'
import type {
  BaseProps,
  BrandProps,
  ConcreteSelectedView,
  FormElementDictTypes,
  IFormElement,
  OmitInstanceId,
} from './types'

export type comboboxItemType = {
  label: string
  id: number
  group?: string
}

type UiLibProps = {
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
}
type ComboboxPropsStyles = {
  maxWidth?: string
  minWidth?: string
  filled?: boolean
}

export type ComboboxProps = InstanceProps<UiLibProps, ComboboxPropsStyles>

export type BrandComboboxProps = BrandProps<ComboboxProps, 'ComboBox'>

export type ComboBoxElement = ConcreteSelectedView<typeof FormElementDictTypes.ComboBox>

export type IFormElementComboBox = OmitInstanceId<
  IFormElement & {
    props: BrandComboboxProps
  }
>
