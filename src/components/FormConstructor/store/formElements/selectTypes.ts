import { DatePickerPropDropdownForm } from '@consta/uikit/DatePicker'
import { BaseProps, IFormElement } from './types'
import { TextFieldPropSize, TextFieldPropView, TextFieldPropStatus } from '@consta/uikit/TextField'

export type ITEM = {
  id: number
  disabled?: boolean
  group?: string
  label: string
}

export type PropForm =
  | 'default'
  | 'round'
  | 'brick'
  | 'clearRound'
  | 'roundClear'
  | 'clearDefault'
  | 'defaultClear'
  | 'defaultBrick'
  | 'brickDefault'
  | 'brickClear'
  | 'clearBrick'
  | 'clearClear'

type TextContent = { content: string }

export type SelectProps = {
  disabled?: boolean
  size?: TextFieldPropSize
  view?: TextFieldPropView
  form?: PropForm
  items: ITEM[]
  value?: ITEM | null
  required?: boolean
  status?: TextFieldPropStatus
  caption?: string
  label?: string
  labelPosition?: 'top' | 'left'
  placeholder?: string
  isLoading?: boolean
  dropdownForm?: DatePickerPropDropdownForm
  groups: string[]
  groupsActive?: boolean
  onChange: () => void
} & BaseProps &
  TextContent

export interface IFormElementSelect extends IFormElement {
  props: SelectProps
}
