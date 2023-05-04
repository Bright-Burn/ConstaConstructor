import {
  PropForm,
  PropSize,
  PropStatus,
  PropView,
} from '@consta/uikit/__internal__/src/components/SelectComponents/types'
import { BaseProps, IFormElement } from './types'

type Item = {
  label: string
  id: number
}

export type ComboboxProps = {
  items: Item[]
  value?: Item | null
  disabled?: boolean
  size?: PropSize
  view?: PropView
  form?: PropForm
  required?: boolean
  caption?: string
  label?: string
  status?: PropStatus
  labelPosition?: 'top' | 'left'
  placeholder?: string
  isLoading?: boolean
  multiple?: boolean
  onChange: () => void
} & BaseProps

export interface IFormElementComboBox extends IFormElement {
  props: ComboboxProps
}

