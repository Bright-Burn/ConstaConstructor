import type { UserPropSize, UserPropStatus, UserPropView, UserPropWidth } from '@consta/uikit/User'

import type { InstanceProps } from './instanceProps'
import type {
  BrandProps,
  ConcreteSelectedView,
  FormElementDictTypes,
  IFormElement,
  OmitInstanceId,
} from './types'

type Styles = {
  filled?: boolean
}

type UiLibProps = {
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
}

export type UserProps = InstanceProps<UiLibProps, Styles>

export type BrandUserProps = BrandProps<UserProps, 'User'>

export type UserElement = ConcreteSelectedView<typeof FormElementDictTypes.User>

export type IFormElementUser = OmitInstanceId<
  IFormElement & {
    props: BrandUserProps
  }
>
