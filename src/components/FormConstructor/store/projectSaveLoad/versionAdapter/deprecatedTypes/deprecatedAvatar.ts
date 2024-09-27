import type { BaseProps } from '../../../../coreTypes'

export type AvatarProps_Deprecated = {
  name?: string
  size?: 's' | 'm' | 'xs' | 'l'
  form?: 'round' | 'brick' | 'default'
  monochrome?: boolean
  url?: string
} & BaseProps
