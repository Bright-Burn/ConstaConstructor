import type {
  BadgePropForm,
  BadgePropSize,
  BadgePropStatus,
  BadgePropView,
} from '@consta/uikit/Badge'

import type { IconNames } from './iconTypes'
import type {
  BrandProps,
  ConcreteSelectedView,
  FormElementDictTypes,
  IFormElement,
  OmitInstanceId,
} from './types'
import { InstanceProps } from './instanceProps'

type UiLibProps = {
  size?: BadgePropSize
  view?: BadgePropView
  status?: BadgePropStatus
  form?: BadgePropForm
  minified?: boolean
  iconLeft?: IconNames
  iconRight?: IconNames
  label?: string
}

export type BadgeProps = InstanceProps<UiLibProps, {}>

export type BrandBadgeProps = BrandProps<BadgeProps, 'Badge'>

export type BadgeElement = ConcreteSelectedView<typeof FormElementDictTypes.Badge>

export type IFormElementBadge = OmitInstanceId<
  IFormElement & {
    props: BrandBadgeProps
  }
>
