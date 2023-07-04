import { BaseProps, IFormElement } from './types'
import { UserPropSize, UserPropStatus, UserPropView, UserPropWidth } from '@consta/uikit/User'

export type UserProps = {
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
} & BaseProps

export interface IFormElementUser extends IFormElement {
  props: UserProps
}
