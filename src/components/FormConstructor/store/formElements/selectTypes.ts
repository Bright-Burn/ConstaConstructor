import { BaseProps, IFormElement } from './types'
import {
  PropSize,
  PropView,
  PropForm,
  PropStatus,
} from '@consta/uikit/__internal__/src/components/SelectComponents/types'

export type ITEM = {
  id: number
  label: string
}

type TextContent = { content: string }

export type SelectProps = {
  disabled?: boolean
  size?: PropSize
  view?: PropView
  form?: PropForm
  items: ITEM[]
  value?: ITEM | null
  required?: boolean
  status?: PropStatus
  caption?: string
  label?: string
  withLabelIcon?: boolean
  labelPosition?: 'top' | 'left'
  placeholder?: string
  isLoading?: boolean
  onChange: () => void
} & BaseProps &
  TextContent

export interface IFormElementSelect extends IFormElement {
  props: SelectProps
}
