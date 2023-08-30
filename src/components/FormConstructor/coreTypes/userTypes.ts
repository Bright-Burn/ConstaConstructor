import {
  BaseProps,
  IFormElement,
  BrandProps,
  ConcreteSelectedElement,
  FormElementDictTypes,
} from './types'
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
  filled?: boolean
} & BaseProps

export type BrandUserProps = BrandProps<UserProps, 'User'>

export type UserElement = ConcreteSelectedElement<typeof FormElementDictTypes.User>

export interface IFormElementUser extends IFormElement {
  props: BrandUserProps
}
