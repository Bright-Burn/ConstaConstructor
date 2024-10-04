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

import type { BaseProps, PropForm } from '../../../../coreTypes'

export type DatePickerProps_Deprecated = {
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
} & BaseProps
