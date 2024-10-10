import type { ListPropForm, ListPropInnerOffset, ListPropSize } from '@consta/uikit/ListCanary'

import type { InstanceProps } from './instanceProps'
import type {
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

type UiLibProps = {
  items: ItemList[]
  value?: ItemList | null
  size?: ListPropSize
  withListBox?: boolean
  innerOffset?: ListPropInnerOffset
  form?: ListPropForm
  shadow?: boolean
  border?: boolean
  disabled?: boolean
}

export type ListProps = InstanceProps<UiLibProps, {}>

export type BrandListProps = BrandProps<ListProps, 'List'>

export type ListElement = ConcreteSelectedView<typeof FormElementDictTypes.List>

export type IFormElementList = OmitInstanceId<
  IFormElement & {
    props: BrandListProps
  }
>
