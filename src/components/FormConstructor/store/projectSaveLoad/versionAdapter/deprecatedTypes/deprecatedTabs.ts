import { IconComponent, IconPropSize } from '@consta/icons/Icon'
import { TabsPropSize, TabsPropView, TabsPropLinePosition } from '@consta/uikit/Tabs'
import { IconNames } from '../../../../coreTypes'

export type FitMode = 'dropdown' | 'scroll'

type TabItemType = {
  id: number
  label: string
  disabledIcon?: boolean
  labelIconLeft?: IconNames
  iconLeft?: IconComponent
}

export type TabsProps_Deprecated = {
  size?: TabsPropSize
  onlyIcon?: boolean
  view?: TabsPropView
  iconSize?: IconPropSize
  items: TabItemType[]
  value?: TabItemType | null
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
