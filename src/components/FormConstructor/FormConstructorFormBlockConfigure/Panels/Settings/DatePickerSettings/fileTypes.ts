import {
  DatePickerPropDropdownForm,
  DatePickerPropDateTimeView,
  DatePickerPropType,
} from '@consta/uikit/DatePicker'
import { TextFieldPropView, TextFieldPropSize, TextFieldPropStatus } from '@consta/uikit/TextField'
import { PropForm } from '../../../../coreTypes'

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
  | string
  | Date[]
