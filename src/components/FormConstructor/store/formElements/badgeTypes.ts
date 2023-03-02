import { BadgePropForm, BadgePropSize, BadgePropStatus, BadgePropView } from '@consta/uikit/Badge'
import { BaseProps, IFormElement } from './types'

export type BadgeProps = {
  size?: BadgePropSize
  view?: BadgePropView
  status?: BadgePropStatus
  form?: BadgePropForm
  minified?: boolean
  label?: string
  children?: never
} & BaseProps

export interface IFormElementBadge extends IFormElement {
  props: BadgeProps
}
