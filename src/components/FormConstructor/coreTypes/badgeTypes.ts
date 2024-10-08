import type {
  BadgePropForm,
  BadgePropSize,
  BadgePropStatus,
  BadgePropView,
} from '@consta/uikit/Badge'

import type { IconNames } from './iconTypes'
import type {
  BaseProps,
  BrandProps,
  ConcreteSelectedView,
  FormElementDictTypes,
  IFormElement,
  OmitInstanceId,
} from './types'

export type BadgeProps = {
  size?: BadgePropSize
  view?: BadgePropView
  status?: BadgePropStatus
  form?: BadgePropForm
  minified?: boolean
  label?: string
  children?: never
  iconLeft?: IconNames
  iconRight?: IconNames
} & BaseProps

export type BrandBadgeProps = BrandProps<BadgeProps, 'Badge'>

export type BadgeElement = ConcreteSelectedView<typeof FormElementDictTypes.Badge>

export type IFormElementBadge = OmitInstanceId<
  IFormElement & {
    props: BrandBadgeProps
  }
>
