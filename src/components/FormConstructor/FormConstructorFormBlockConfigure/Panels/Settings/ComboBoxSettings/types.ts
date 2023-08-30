import { TextFieldPropSize, TextFieldPropStatus, TextFieldPropView } from '@consta/uikit/TextField'
import { PropForm, comboboxItemType } from '../../../../coreTypes'
import { DatePickerPropDropdownForm } from '@consta/uikit/DatePicker'

export type ValueType =
  | TextFieldPropStatus
  | PropForm
  | TextFieldPropView
  | TextFieldPropSize
  | 'top'
  | 'left'
  | boolean
  | null
  | comboboxItemType
  | comboboxItemType[]
  | string

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

export const statusArray = ['', 'alert', 'success', 'warning']

export const labelPositionArray: ['top', 'left'] = ['top', 'left']

export const dropDownArray: DatePickerPropDropdownForm[] = ['default', 'brick', 'round']
