import { BaseProps, IFormElement } from './types'
import { ListPropForm, ListPropInnerOffset, ListPropSize } from '@consta/uikit/ListCanary'

export type ItemList = {
  label: string
  id: number
  disabled: boolean
}

export type ListProps = {
  items: ItemList[]
  value?: ItemList | null
  size?: ListPropSize
  withListBox?: boolean
  innerOffset?: ListPropInnerOffset
  form?: ListPropForm
} & BaseProps

export interface IFormElementList extends IFormElement {
  props: ListProps
}
