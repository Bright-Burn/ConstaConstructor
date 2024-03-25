import type { TextFieldPropSize, TextFieldPropView } from '@consta/uikit/TextField'

import type { PropForm, selectStatus } from '../../../../coreTypes'

export const sizeArray: TextFieldPropSize[] = ['xs', 's', 'm', 'l']

export const viewArray: TextFieldPropView[] = ['default', 'clear']

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
export const statusArray: selectStatus[] = ['', 'alert', 'success', 'warning']
export type StatusType = (typeof statusArray)[number]

export const labelPositionArray: ['top', 'left'] = ['top', 'left']

export type dropdownFormType = 'default' | 'round' | 'brick'
export const dropdownFormArray: dropdownFormType[] = ['default', 'round', 'brick']
