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

import type { PropForm } from '../../../../coreTypes'

export type ValueType =
  | DatePickerPropDropdownForm
  | DatePickerPropDateTimeView
  | Date
  | TextFieldPropView
  | TextFieldPropSize
  | PropForm
  | DatePickerPropType
  | TextFieldPropStatus
  | null
  | 'top'
  | 'left'
  | boolean
  | Date[]
