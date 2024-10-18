import type {
  DatePickerPropDateTimeView,
  DatePickerPropDropdownForm,
  DatePickerPropType,
} from '@consta/uikit/DatePicker'
import type {
  TextFieldPropSize,
  TextFieldPropStatus,
  TextFieldPropView,
} from '@consta/uikit/TextField'

import type { InstanceProps } from './instanceProps'
import type { PropForm } from './selectTypes'
import type {
  BrandProps,
  ConcreteSelectedView,
  FormElementDictTypes,
  IFormElement,
  OmitInstanceId,
} from './types'

type UiLibProps = {
  type?: DatePickerPropType
  form?: PropForm
  status?: TextFieldPropStatus
  withClearButton?: boolean
  withAdditionalControls?: boolean
  label?: string
  labelPosition?: 'top' | 'left'
  required?: boolean
  caption?: string
  size?: TextFieldPropSize
  view?: TextFieldPropView
  disabled?: boolean
  minDate?: Date
  maxDate?: Date
  dateTimeView?: DatePickerPropDateTimeView
  dropdownForm?: DatePickerPropDropdownForm
  events: Date[]
  value?: Date
}

export type DatePickerProps = InstanceProps<UiLibProps, Record<string, never>>

export type BrandDatePickerProps = BrandProps<DatePickerProps, 'DatePicker'>

export type DatePickerElement = ConcreteSelectedView<typeof FormElementDictTypes.DatePicker>

export type IFormElementDatePicker = OmitInstanceId<
  IFormElement & {
    props: BrandDatePickerProps
  }
>
