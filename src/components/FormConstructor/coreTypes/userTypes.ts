import type { UserPropSize, UserPropStatus, UserPropView, UserPropWidth } from '@consta/uikit/User'

import type {
  BaseProps,
  BrandProps,
  ConcreteSelectedView,
  FormElementDictTypes,
  IFormElement,
  OmitInstanceId,
} from './types'

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
  filled?: boolean
} & BaseProps

export type BrandUserProps = BrandProps<UserProps, 'User'>

export type UserElement = ConcreteSelectedView<typeof FormElementDictTypes.User>

export type IFormElementUser = OmitInstanceId<
  IFormElement & {
    props: BrandUserProps
  }
>
