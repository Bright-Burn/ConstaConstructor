import type {
  DatePickerPropDateTimeView,
  DatePickerPropDropdownForm,
  DatePickerPropType,
} from '@consta/uikit/DatePicker'
import type {
  TextFieldPropSize,
  TextFieldPropStatus,
  TextFieldPropsTextareaType,
  TextFieldPropView,
} from '@consta/uikit/TextField'

import type { PropForm } from './selectTypes'
import type {
  BaseProps,
  BrandProps,
  ConcreteSelectedElement,
  OmitInstanceId,
  FormElementDictTypes,
  IFormElement,
} from './types'

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
  events: Date[]
  value?: Date
} & BaseProps &
  TextFieldPropsTextareaType<string>

export type BrandDatePickerProps = BrandProps<DatePickerProps, 'DatePicker'>

export type DatePickerElement = ConcreteSelectedElement<typeof FormElementDictTypes.DatePicker>

export type IFormElementDatePicker = OmitInstanceId<
  IFormElement & {
    props: BrandDatePickerProps
  }
>
