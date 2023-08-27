import { TextFieldPropStatus, TextFieldPropView, TextFieldPropSize } from '@consta/uikit/TextField'
import { PropForm, comboboxItemType } from '../../../../coreTypes'

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
