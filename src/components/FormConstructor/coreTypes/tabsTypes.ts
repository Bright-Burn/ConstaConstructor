import type { IconPropSize } from '@consta/icons/Icon'
import type { TabsPropLinePosition, TabsPropSize, TabsPropView } from '@consta/uikit/Tabs'

import type { IconNames } from './iconTypes'
import type { InstanceProps } from './instanceProps'
import type {
  BrandProps,
  ConcreteSelectedView,
  FormElementDictTypes,
  IFormElement,
  OmitInstanceId,
} from './types'

export type FitMode = 'dropdown' | 'scroll'

export type TabItemType = {
  id: number
  label: string
  disabledIcon?: boolean

  // Иконка слева вкладки
  leftIcon?: IconNames
  // Иконка спарва вкладки
  rightIcon?: IconNames
}

type UiLibProps = {
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

type CustomStyles = {
  minWidth?: string
  maxWidth?: string
  filled?: boolean
}

export type TabsProps = InstanceProps<UiLibProps, CustomStyles>

export type BrandTabsElementProps = BrandProps<TabsProps, 'Tabs'>

export type TabsElement = ConcreteSelectedView<typeof FormElementDictTypes.Tabs>

export type IFormElementTabs = OmitInstanceId<
  IFormElement & {
    props: BrandTabsElementProps
  }
>
