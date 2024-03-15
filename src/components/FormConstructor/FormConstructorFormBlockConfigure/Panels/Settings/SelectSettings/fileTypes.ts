import type {
  TextFieldPropSize,
  TextFieldPropStatus,
  TextFieldPropView,
} from '@consta/uikit/TextField'

import type { PropForm, selectitemType } from '../../../../coreTypes'

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
