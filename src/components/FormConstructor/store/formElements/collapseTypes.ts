import { BaseProps, IFormElement } from './types'
import {
  CollapseIconPropDirection,
  CollapsePropHorizontalSpace,
  CollapsePropSize,
  CollapsePropView,
} from '@consta/uikit/Collapse'
import { ListPropForm } from '@consta/uikit/ListCanary'
import { iconNames } from './iconTypes'
import { IconComponent } from '@consta/uikit/Icon'

export type CollapseProps = {
  size?: CollapsePropSize
  form?: ListPropForm
  label: string
  children?: string
  maxHeight?: number
  hoverEffect?: boolean
  view?: CollapsePropView
  horizontalSpace?: CollapsePropHorizontalSpace
  iconView?: 'clear' | 'ghost'
  divider?: boolean
  rightSide?: boolean
  directionIcon?: CollapseIconPropDirection
  closeDirectionIcon?: CollapseIconPropDirection
  withCustomIcon?: boolean
  icon?: iconNames
} & BaseProps

export interface IFormElementCollapse extends IFormElement {
  props: CollapseProps
}
