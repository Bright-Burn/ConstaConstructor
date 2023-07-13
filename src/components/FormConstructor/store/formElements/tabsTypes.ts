import { BaseProps, IFormElement } from './types'
import {
  TabsPropGetItemLabel,
  TabsPropSize,
  TabsPropView,
} from '@consta/uikit/__internal__/src/components/Tabs/types'
import { IconComponent, IconPropSize } from '@consta/uikit/Icon'
import { FitMode } from '../../FormConstructorFormBlockConfigure/Panels/Settings/TabsSettings/types'
import { TabsPropLinePosition } from '@consta/uikit/TabsDeprecated'
import React from 'react'
import { BadgeProps } from './badgeTypes'

export type ITEM = {
  id: number
  label: string
  disabled?: boolean
  labelIconLeft?: string
  labelIconRight?: string
  iconLeft?: IconComponent
  iconRight?: IconComponent
}

export type TabsProps = {
  disabled?: boolean
  size?: TabsPropSize
  onlyIcon?: boolean
  view?: TabsPropView
  iconSize?: IconPropSize
  items: ITEM[]
  value?: ITEM | null
  getItemLabel?: TabsPropGetItemLabel<ITEM>
  onChange: () => void
} & (
  | {
      linePosition?: Extract<TabsPropLinePosition, 'bottom' | 'top'>
      fitMode?: FitMode
    }
  | {
      linePosition: Extract<TabsPropLinePosition, 'left' | 'right'>
      fitMode?: never
    }
)

export type TabsElementProps = TabsProps & BaseProps

export interface IFormElementTabs extends IFormElement {
  props: TabsElementProps
}
