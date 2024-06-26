import type { AvatarProps } from './avatartTypes'
import type {
  BaseProps,
  BrandProps,
  ConcreteSelectedElement,
  FormElementDictTypes,
  IFormElement,
} from './types'

export type AvatarGroupProps = {
  items?: AvatarProps[]
  visibleCount?: number | 'auto'
  size?: 's' | 'm' | 'xs' | 'l'
  form?: 'round' | 'brick' | 'default'
  monochrome?: boolean
} & BaseProps
export type BrandAvatarGroupProps = BrandProps<AvatarGroupProps, 'AvatarGroup'>

export type AvatarGroupElement = ConcreteSelectedElement<typeof FormElementDictTypes.AvatarGroup>

export interface IFormElementAvatarGroup extends IFormElement {
  props: BrandAvatarGroupProps
}
