import { BadgePropForm, BadgePropSize, BadgePropStatus, BadgePropView } from '@consta/uikit/Badge'
import {
  BaseProps,
  BrandProps,
  ConcreteSelectedElement,
  FormElementDictTypes,
  IFormElement,
} from './types'
import { IconNames } from './iconTypes'

export type BadgeProps = {
  size?: BadgePropSize
  view?: BadgePropView
  status?: BadgePropStatus
  form?: BadgePropForm
  minified?: boolean
  label?: string
  children?: never
  iconLeft?: IconNames
} & BaseProps

export type BrandBadgeProps = BrandProps<BadgeProps, 'Badge'>

export type BadgeElement = ConcreteSelectedElement<typeof FormElementDictTypes.Badge>

export interface IFormElementBadge extends IFormElement {
  props: BrandBadgeProps
}
