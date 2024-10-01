import type { AvatarProps } from '../../../coreTypes'

import type { AvatarProps_Deprecated } from './deprecatedTypes'
import type { GenericAdapter } from './genericAdapter'

export type AvatarAdapter = GenericAdapter<AvatarProps_Deprecated, AvatarProps>

export const avatarAdapter: AvatarAdapter = (id, deprecated) => {
  console.log(`Run avatar adapter with id=${id}`)
  const avatarProps: AvatarProps = {
    baseProps: deprecated.baseProps,
    className: deprecated.className,
    uiLibProps: {
      form: deprecated.form,
      monochrome: deprecated.monochrome,
      name: deprecated.name,
      size: deprecated.size,
      url: deprecated.url,
    },
    styles: {},
  }
  return avatarProps
}
