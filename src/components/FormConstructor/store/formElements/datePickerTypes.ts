import { BaseProps, IFormElement } from './types'
import { TextFieldPropsTextareaType } from '@consta/uikit/TextField/'
import {
  DatePickerPropDateTimeView,
  DatePickerPropDropdownForm,
  DatePickerPropType,
} from '@consta/uikit/DatePicker'
import {
  PropForm,
  PropSize,
  PropStatus,
  PropView,
} from '@consta/uikit/__internal__/src/components/SelectComponents/types'

export type DatePickerProps = {
  type?: DatePickerPropType
  form?: PropForm
  status?: PropStatus
  withClearButton?: boolean
  withAdditionalControls?: boolean
  label?: string
  labelPosition?: 'top' | 'left'
  required?: boolean
  caption?: string
  size?: PropSize
  view?: PropView
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

