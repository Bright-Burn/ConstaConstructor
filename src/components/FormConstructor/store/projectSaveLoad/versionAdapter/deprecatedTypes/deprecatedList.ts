import type { ListPropForm, ListPropInnerOffset, ListPropSize } from '@consta/uikit/ListCanary'

import type { BaseProps, ItemList } from '../../../../coreTypes'

export type ListProps_Deprecated = {
  items: ItemList[]
  value?: ItemList | null
  size?: ListPropSize
  withListBox?: boolean
  innerOffset?: ListPropInnerOffset
  form?: ListPropForm
} & BaseProps
