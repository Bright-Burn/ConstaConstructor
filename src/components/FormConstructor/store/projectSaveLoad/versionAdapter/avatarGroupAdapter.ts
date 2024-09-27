import type { AvatarGroupProps } from '../../../coreTypes'

import { avatarAdapter } from './avatarAdapter'
import type { AvatarGroupProps_Deprecated } from './deprecatedTypes'

export type AvatarGroupAdapter = (
  buttonInstanceId: string,
  deprecated: AvatarGroupProps_Deprecated,
) => AvatarGroupProps

export const avatarGroupAdapter: AvatarGroupAdapter = (id, deprecated) => {
  console.log(`Run avatar group adapter with id=${id}`)
  const adaptedItemsProps = (deprecated.items || []).map(
    item => avatarAdapter(id, item).constaProps,
  )

  const avatarProps: AvatarGroupProps = {
    baseProps: deprecated.baseProps,
    className: deprecated.className,
    constaProps: {
      form: deprecated.form,
      monochrome: deprecated.monochrome,
      size: deprecated.size,
      visibleCount: deprecated.visibleCount,
      items: adaptedItemsProps,
    },
    styles: {},
  }
  return avatarProps
}
