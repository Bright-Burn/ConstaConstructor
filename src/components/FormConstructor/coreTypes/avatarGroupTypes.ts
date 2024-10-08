import type { AvatarProps } from './avatartTypes'
import type {
  BaseProps,
  BrandProps,
  ConcreteSelectedView,
  FormElementDictTypes,
  IFormElement,
  OmitInstanceId,
} from './types'

export type AvatarGroupProps = {
  items?: AvatarProps[]
  visibleCount?: number | 'auto'
  size?: 's' | 'm' | 'xs' | 'l'
  form?: 'round' | 'brick' | 'default'
  monochrome?: boolean
} & BaseProps
export type BrandAvatarGroupProps = BrandProps<AvatarGroupProps, 'AvatarGroup'>

export type AvatarGroupElement = ConcreteSelectedView<typeof FormElementDictTypes.AvatarGroup>

export type IFormElementAvatarGroup = OmitInstanceId<
  IFormElement & {
    props: BrandAvatarGroupProps
  }
>
