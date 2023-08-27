import { TextFieldPropStatus, TextFieldPropView, TextFieldPropSize } from '@consta/uikit/TextField'
import { PropForm, selectitemType } from '../../../../coreTypes'

export type ValueType =
  | TextFieldPropStatus
  | PropForm
  | TextFieldPropView
  | TextFieldPropSize
  | 'top'
  | 'left'
  | boolean
  | null
  | selectitemType
  | string
