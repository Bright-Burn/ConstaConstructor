import type { BaseProps } from '../../../../coreTypes'

import type { AvatarProps_Deprecated } from './deprecatedAvatar'

export type AvatarGroupProps_Deprecated = {
  items?: AvatarProps_Deprecated[]
  visibleCount?: number | 'auto'
  size?: 's' | 'm' | 'xs' | 'l'
  form?: 'round' | 'brick' | 'default'
  monochrome?: boolean
} & BaseProps
