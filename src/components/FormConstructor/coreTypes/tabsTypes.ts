import type {
  TabsPropSize,
  TabsPropView,
} from '@consta/uikit/__internal__/src/components/Tabs/types'
import { TabsPropGetItemLabel } from '@consta/uikit/__internal__/src/components/Tabs/types'
import type { IconComponent, IconPropSize } from '@consta/uikit/Icon'
import type { TabsPropLinePosition } from '@consta/uikit/TabsDeprecated'

import type {
  BaseProps,
  BrandProps,
  ConcreteSelectedElement,
  FormElementDictTypes,
  IFormElement,
} from './types'

export type FitMode = 'dropdown' | 'scroll'

export type tabItemType = {
  id: number
  label: string
  disabledIcon?: boolean
  labelIconLeft?: string
  iconLeft?: IconComponent
}

export type TabsProps = {
  size?: TabsPropSize
  onlyIcon?: boolean
  view?: TabsPropView
  iconSize?: IconPropSize
  items: tabItemType[]
  value?: tabItemType | null
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

export type BrandTabsElementProps = BrandProps<TabsElementProps, 'Tabs'>

export type TabsElement = ConcreteSelectedElement<typeof FormElementDictTypes.Tabs>

export interface IFormElementTabs extends IFormElement {
  props: BrandTabsElementProps
}
