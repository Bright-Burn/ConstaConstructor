import type {
  TextFieldPropSize,
  TextFieldPropStatus,
  TextFieldPropView,
} from '@consta/uikit/TextField'

import type { BaseProps, PropForm, selectitemType } from '../../../../coreTypes'

type TextContent_Deprecated = { content: string }

export type SelectProps_Deprecated = {
  disabled?: boolean
  size?: TextFieldPropSize
  view?: TextFieldPropView
  form?: PropForm
  items: selectitemType[]
  value?: selectitemType | null
  required?: boolean
  status?: TextFieldPropStatus
  caption?: string
  label?: string
  labelPosition?: 'top' | 'left'
  placeholder?: string
  isLoading?: boolean
  dropdownForm?: 'brick' | 'default' | 'round'
  groups: string[]
  groupsActive?: boolean
  filled?: boolean
  style?: SelectStyles_Deprecated
} & BaseProps &
  TextContent_Deprecated
export type SelectStyles_Deprecated = { maxWidth: string; minWidth: string }
