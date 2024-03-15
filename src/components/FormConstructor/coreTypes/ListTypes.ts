import type { ListPropForm, ListPropInnerOffset, ListPropSize } from '@consta/uikit/ListCanary'

import type {
  BaseProps,
  BrandProps,
  ConcreteSelectedElement,
  FormElementDictTypes,
  IFormElement,
} from './types'

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

export type BrandListProps = BrandProps<ListProps, 'List'>

export type ListElement = ConcreteSelectedElement<typeof FormElementDictTypes.List>

export interface IFormElementList extends IFormElement {
  props: BrandListProps
}
