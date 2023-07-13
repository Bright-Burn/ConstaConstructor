import { BadgePropForm, BadgePropSize, BadgePropStatus, BadgePropView } from '@consta/uikit/Badge'
import { BaseProps, IFormElement } from './types'
import { iconNames } from './iconTypes'
import { IconComponent } from '@consta/uikit/Icon'

export type BadgeProps = {
  size?: BadgePropSize
  view?: BadgePropView
  status?: BadgePropStatus
  form?: BadgePropForm
  minified?: boolean
  label?: string
  children?: never
  iconLeft?: iconNames
  iconLeftCheck?: IconComponent
} & BaseProps

export interface IFormElementBadge extends IFormElement {
  props: BadgeProps
}
