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
export const statusArray: PropStatus[] = ['alert', 'success', 'warning']
export const labelPositionArray: ['top', 'left'] = ['top', 'left']
export const sizeArray: PropSize[] = ['xs', 's', 'm', 'l']
export const viewArray: PropView[] = ['default', 'clear']

export const dateTimeViewArray: DatePickerPropDateTimeView[] = ['classic', 'book', 'slider']
export const dropdownFormArray: DatePickerPropDropdownForm[] = ['default', 'brick', 'round']
