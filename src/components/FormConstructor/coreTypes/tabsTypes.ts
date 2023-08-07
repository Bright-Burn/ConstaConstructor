import {
  BaseProps,
  BrandProps,
  ConcreteSelectedElement,
  FormElementDictTypes,
  IFormElement,
} from './types'
import {
  TabsPropGetItemLabel,
  TabsPropSize,
  TabsPropView,
} from '@consta/uikit/__internal__/src/components/Tabs/types'
import { IconComponent, IconPropSize } from '@consta/uikit/Icon'
import { TabsPropLinePosition } from '@consta/uikit/TabsDeprecated'

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

export type BrandTabsElementProps = BrandProps<TabsElementProps, 'Tabs'>

export type TabsElement = ConcreteSelectedElement<typeof FormElementDictTypes.Tabs>

export interface IFormElementTabs extends IFormElement {
  props: BrandTabsElementProps
}
