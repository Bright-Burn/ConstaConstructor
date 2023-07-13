import { DefaultItem } from '@consta/uikit/Breadcrumbs'
import { IconPropSize } from '@consta/uikit/Icon'
import { TabsPropFitMode } from '@consta/uikit/Tabs'

export const sizes: IconPropSize[] = ['m', 'xs', 's', 'l']
export const fitMode: TabsPropFitMode[] = ['dropdown', 'scroll']

export type newDefaultItem = DefaultItem & { labelIcon?: string }
