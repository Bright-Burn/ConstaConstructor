import type { ListProps } from '../../../coreTypes'

import type { ListProps_Deprecated } from './deprecatedTypes'
import type { GenericAdapter } from './genericAdapter'

export type ListAdapter = GenericAdapter<ListProps_Deprecated, ListProps>

export const listAdapter: ListAdapter = (id, deprecated) => {
  console.log(`Run List adapter with id=${id}`)

  return {
    baseProps: deprecated.baseProps,
    className: deprecated.className,
    styles: {},
    uiLibProps: {
      items: deprecated.items,
      form: deprecated.form,
      innerOffset: deprecated.innerOffset,
      size: deprecated.size,
      value: deprecated.value,
      withListBox: deprecated.withListBox,
    },
  }
}
