import type { AvatarProps } from './avatartTypes'
import type { InstanceProps } from './instanceProps'
import type {
  BrandProps,
  ConcreteSelectedView,
  FormElementDictTypes,
  IFormElement,
  OmitInstanceId,
} from './types'

type UiLibProps = {
  items: AvatarProps['uiLibProps'][]
  visibleCount?: number | 'auto'
  size?: 's' | 'm' | 'xs' | 'l'
  form?: 'round' | 'brick' | 'default'
  monochrome?: boolean
}

export type AvatarGroupProps = InstanceProps<UiLibProps, Record<string, never>>

export type BrandAvatarGroupProps = BrandProps<AvatarGroupProps, 'AvatarGroup'>

export type AvatarGroupElement = ConcreteSelectedView<typeof FormElementDictTypes.AvatarGroup>

export type IFormElementAvatarGroup = OmitInstanceId<
  IFormElement & {
    props: BrandAvatarGroupProps
  }
>
