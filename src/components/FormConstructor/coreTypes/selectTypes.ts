import {
  BaseProps,
  BrandProps,
  ConcreteSelectedElement,
  FormElementDictTypes,
  IFormElement,
} from './types'
import { TextFieldPropSize, TextFieldPropView, TextFieldPropStatus } from '@consta/uikit/TextField'

export type selectitemType = {
  id: number
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
  items: selectitemType[]
  value?: selectitemType | null
  required?: boolean
  status?: TextFieldPropStatus
  caption?: string
  label?: string
  labelPosition?: 'top' | 'left'
  placeholder?: string
  isLoading?: boolean
  onChange: () => void
} & BaseProps &
  TextContent

export type BrandSelectProps = BrandProps<SelectProps, 'SelectForm'>

export type SelectElement = ConcreteSelectedElement<typeof FormElementDictTypes.Select>

export interface IFormElementSelect extends IFormElement {
  props: BrandSelectProps
}
