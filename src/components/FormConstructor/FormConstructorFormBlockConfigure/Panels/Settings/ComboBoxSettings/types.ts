import type { DatePickerPropDropdownForm } from '@consta/uikit/DatePicker'
import type {
  TextFieldPropSize,
  TextFieldPropStatus,
  TextFieldPropView,
} from '@consta/uikit/TextField'

import type { ComboboxItemType, PropForm } from '../../../../coreTypes'

export type ValueType =
  | TextFieldPropStatus
  | PropForm
  | TextFieldPropView
  | TextFieldPropSize
  | 'top'
  | 'left'
  | boolean
  | null
  | ComboboxItemType
  | ComboboxItemType[]

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

export const statusArray: (TextFieldPropStatus | '')[] = ['', 'alert', 'success', 'warning']
export type statusType = (typeof statusArray)[number]
export const labelPositionArray: ['top', 'left'] = ['top', 'left']

export const dropDownArray: DatePickerPropDropdownForm[] = ['default', 'brick', 'round']
