import type { ListPropForm, ListPropInnerOffset, ListPropSize } from '@consta/uikit/ListCanary'

import type {
  BaseProps,
  BrandProps,
  ConcreteSelectedView,
  FormElementDictTypes,
  IFormElement,
  OmitInstanceId,
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

export type ListElement = ConcreteSelectedView<typeof FormElementDictTypes.List>

export type IFormElementList = OmitInstanceId<
  IFormElement & {
    props: BrandListProps
  }
>
