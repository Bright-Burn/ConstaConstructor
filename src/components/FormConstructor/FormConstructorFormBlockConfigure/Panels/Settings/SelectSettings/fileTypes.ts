import type {
  TextFieldPropSize,
  TextFieldPropStatus,
  TextFieldPropView,
} from '@consta/uikit/TextField'

import type { PropForm, selectitemType } from '../../../../coreTypes'

import type { dropdownFormType } from './types'

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
  | dropdownFormType
