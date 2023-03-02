import { BaseProps, IFormElement } from './types'
import {
  TabsPropGetItemLabel,
  TabsPropSize,
  TabsPropView,
} from '@consta/uikit/__internal__/src/components/Tabs/types'
import { IconPropSize } from '@consta/uikit/Icon'
import {
  FitMode,
  LinePosition,
} from '../../FormConstructorFormBlockConfigure/Panels/Settings/TabsSettings/types'

export type ITEM = {
  label: string | number
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
  linePosition?: LinePosition
  fitMode?: FitMode
}

export type TabsElementProps = TabsProps & BaseProps

export interface IFormElementTabs extends IFormElement {
  props: TabsElementProps
}
