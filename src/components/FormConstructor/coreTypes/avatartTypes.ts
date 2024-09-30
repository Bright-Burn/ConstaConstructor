import { InstanceProps } from './instanceProps'
import type {
  BaseProps,
  BrandProps,
  ConcreteSelectedView,
  FormElementDictTypes,
  IFormElement,
  OmitInstanceId,
} from './types'

type UiLibProps = {
  name?: string
  size?: 's' | 'm' | 'xs' | 'l'
  form?: 'round' | 'brick' | 'default'
  monochrome?: boolean
  url?: string
}

export type AvatarProps = InstanceProps<UiLibProps, {}>

export type BrandAvatarProps = BrandProps<AvatarProps, 'Avatar'>

export type AvatarElement = ConcreteSelectedView<typeof FormElementDictTypes.Avatar>

export type IFormElementAvatar = OmitInstanceId<
  IFormElement & {
    props: BrandAvatarProps
  }
>
