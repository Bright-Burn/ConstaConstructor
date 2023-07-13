import { TextFieldPropSize, TextFieldPropStatus, TextFieldPropView } from '@consta/uikit/TextField'
import { PropForm } from '../../../../store/formElements/selectTypes'
import { DatePickerPropDropdownForm } from '@consta/uikit/DatePicker'

export const viewArray: TextFieldPropView[] = ['default', 'clear']

export const sizeArray: TextFieldPropSize[] = ['xs', 's', 'm', 'l']

export const formArray: PropForm[] = [
  'default',
  'clearBrick',
  'brick',
  'brickClear',
  'brickDefault',
  'clearDefault',
  'clearClear',
  'clearRound',
  'defaultBrick',
  'defaultClear',
  'round',
  'roundClear',
]

export const statusArray: TextFieldPropStatus[] = ['alert', 'success', 'warning']

export const labelPositionArray: ['top', 'left'] = ['top', 'left']

export const dropDownArray: DatePickerPropDropdownForm[] = ['default', 'brick', 'round']
