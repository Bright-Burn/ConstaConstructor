import { BaseProps, IFormElement } from './types'
import { TextFieldPropsTextareaType } from '@consta/uikit/TextField/'
import {
  DatePickerPropDateTimeView,
  DatePickerPropDropdownForm,
  DatePickerPropType,
} from '@consta/uikit/DatePicker'
import { TextFieldPropSize, TextFieldPropStatus, TextFieldPropView } from '@consta/uikit/TextField'
import { PropForm } from './selectTypes'

export type DatePickerProps = {
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
} & BaseProps &
  TextFieldPropsTextareaType<string>

export interface IFormElementDatePicker extends IFormElement {
  props: DatePickerProps
}
