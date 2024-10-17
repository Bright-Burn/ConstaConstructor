import type { TagProps } from '../../../coreTypes'

import { classNameAdapter } from './classNameAdapter'
import type { TagProps_Deprecated } from './deprecatedTypes'
import type { GenericAdapter } from './genericAdapter'

export type TagsAdapter = GenericAdapter<TagProps_Deprecated, TagProps>

export const tagsAdapter: TagsAdapter = (id, deprecated) => {
  console.log(`Run Tag adapter with id=${id}`)

  return {
    baseProps: deprecated.baseProps,
    className: classNameAdapter(deprecated.className),
    styles: {},
    uiLibProps: {
      checked: deprecated.checked,
      label: deprecated.label,
      mode: deprecated.mode,
      group: deprecated.group,
      Icon: deprecated.Icon,
      icon: deprecated.icon,
      size: deprecated.size,
    },
  }
}
