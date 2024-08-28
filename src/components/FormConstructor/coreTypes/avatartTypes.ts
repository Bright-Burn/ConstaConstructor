import type {
  BaseProps,
  BrandProps,
  ConcreteSelectedView,
  FormElementDictTypes,
  IFormElement,
  OmitInstanceId,
} from './types'

export type AvatarProps = {
  name?: string
  size?: 's' | 'm' | 'xs' | 'l'
  form?: 'round' | 'brick' | 'default'
  monochrome?: boolean
  url?: string
} & BaseProps
export type BrandAvatarProps = BrandProps<AvatarProps, 'Avatar'>

export type AvatarElement = ConcreteSelectedView<typeof FormElementDictTypes.Avatar>

export type IFormElementAvatar = OmitInstanceId<
  IFormElement & {
    props: BrandAvatarProps
  }
>
