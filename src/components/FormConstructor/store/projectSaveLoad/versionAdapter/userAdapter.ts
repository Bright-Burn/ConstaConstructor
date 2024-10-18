import type { UserProps } from '../../../coreTypes'

import { classNameAdapter } from './classNameAdapter'
import type { UserProps_Deprecated } from './deprecatedTypes'
import type { GenericAdapter } from './genericAdapter'

export type UserAdapter = GenericAdapter<UserProps_Deprecated, UserProps>

export const userAdapter: UserAdapter = (id, deprecated) => {
  console.log(`Run User adapter with id=${id}`)
  return {
    baseProps: deprecated.baseProps,
    className: classNameAdapter(deprecated.className),
    styles: {
      filled: deprecated.filled,
    },
    uiLibProps: {
      avatarUrl: deprecated.avatarUrl,
      checked: deprecated.checked,
      info: deprecated.info,
      name: deprecated.name,
      onlyAvatar: deprecated.onlyAvatar,
      size: deprecated.size,
      status: deprecated.status,
      view: deprecated.view,
      width: deprecated.width,
      withArrow: deprecated.withArrow,
    },
  }
}
