import {
  DatePickerPropDateTimeView,
  DatePickerPropDropdownForm,
  DatePickerPropType,
} from '@consta/uikit/DatePicker'
import { TextFieldPropSize, TextFieldPropStatus, TextFieldPropView } from '@consta/uikit/TextField'
import { PropForm } from '../../../../store/formElements/selectTypes'


export const typeArray: DatePickerPropType[] = [
  'date',
  'date-range',
  'date-time',
  'date-time-range',
  'time',
  'year',
  'year-range',
  'month',
  'month-range',
]
export const formArray: PropForm[] = [
  'default',
  'brick',
  'round',
  'clearRound',
  'roundClear',
  'clearDefault',
  'defaultClear',
  'defaultBrick',
  'brickDefault',
  'brickClear',
  'clearBrick',
  'clearClear',
]
export const statusArray: TextFieldPropStatus[] = ['alert', 'success', 'warning']
export const labelPositionArray: ['top', 'left'] = ['top', 'left']
export const sizeArray: TextFieldPropSize[] = ['xs', 's', 'm', 'l']
export const viewArray: TextFieldPropView[] = ['default', 'clear']

export const dateTimeViewArray: DatePickerPropDateTimeView[] = ['classic', 'book', 'slider']
export const dropdownFormArray: DatePickerPropDropdownForm[] = ['default', 'brick', 'round']
