import type { UserPropSize, UserPropStatus, UserPropView, UserPropWidth } from '@consta/uikit/User'

import type { BaseProps } from '../../../../coreTypes'

export type UserProps_Deprecated = {
  view?: UserPropView
  width?: UserPropWidth
  size?: UserPropSize
  status?: UserPropStatus
  avatarUrl?: string
  name?: string
  info?: string
  withArrow?: boolean
  onlyAvatar?: boolean
  checked?: boolean
  filled?: boolean
} & BaseProps
