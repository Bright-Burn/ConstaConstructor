import { BaseProps, IFormElement } from './types'
import {
  TabsPropGetItemLabel,
  TabsPropSize,
  TabsPropView,
} from '@consta/uikit/__internal__/src/components/Tabs/types'
import { IconPropSize } from '@consta/uikit/Icon'
import { TabsPropLinePosition } from '@consta/uikit/TabsDeprecated'

export type FitMode = 'dropdown' | 'scroll'

export type tabItemType = {
  id: number
  label: string
}

export type TabsProps = {
  size?: TabsPropSize
  onlyIcon?: boolean
  view?: TabsPropView
  iconSize?: IconPropSize
  items: tabItemType[]
  value?: tabItemType | null
  getItemLabel?: TabsPropGetItemLabel<tabItemType>
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
