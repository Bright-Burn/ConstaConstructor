import { BadgePropSize, BadgePropView, BadgePropStatus, BadgePropForm } from '@consta/uikit/Badge'
import { IconNames, BaseProps } from '../../../../coreTypes'

export type BadgeProps_Deprecated = {
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
