import type {
  TextFieldPropSize,
  TextFieldPropStatus,
  TextFieldPropView,
} from '@consta/uikit/TextField'

import type {
  BaseProps,
  BrandProps,
  ConcreteSelectedView,
  FormElementDictTypes,
  IFormElement,
  OmitInstanceId,
} from './types'

export type selectitemType = {
  id: number
  label: string
  group?: string
}
export type selectStatus = 'alert' | 'success' | 'warning' | ''
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
  style?: SelectStyles
} & BaseProps &
  TextContent
export type SelectStyles = { maxWidth: string; minWidth: string }
export type BrandSelectProps = BrandProps<SelectProps, 'SelectForm'>

export type SelectElement = ConcreteSelectedView<typeof FormElementDictTypes.Select>

export type IFormElementSelect = OmitInstanceId<
  IFormElement & {
    props: BrandSelectProps
  }
>
