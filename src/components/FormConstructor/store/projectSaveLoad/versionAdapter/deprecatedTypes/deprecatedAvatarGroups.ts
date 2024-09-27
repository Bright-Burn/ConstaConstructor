import { BaseProps } from '../../../../coreTypes'
import { AvatarProps_Deprecated } from './deprecatedAvatar'

export type AvatarGroupProps_Deprecated = {
  items?: AvatarProps_Deprecated[]
  visibleCount?: number | 'auto'
  size?: 's' | 'm' | 'xs' | 'l'
  form?: 'round' | 'brick' | 'default'
  monochrome?: boolean
} & BaseProps
