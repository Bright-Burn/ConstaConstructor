import { BaseProps, IFormElement } from './types'
import {
  TabsPropGetItemLabel,
  TabsPropSize,
  TabsPropView,
} from '@consta/uikit/__internal__/src/components/Tabs/types'
import { IconPropSize } from '@consta/uikit/Icon'
import { FitMode } from '../../FormConstructorFormBlockConfigure/Panels/Settings/TabsSettings/types'
import { TabsPropLinePosition } from '@consta/uikit/TabsDeprecated'

export type ITEM = {
  id: number
  label: string
}

export type TabsProps = {
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
