import type { DefaultItem } from '@consta/uikit/Breadcrumbs'
import type { IconPropSize } from '@consta/uikit/Icon'
import type { TabsPropFitMode } from '@consta/uikit/Tabs'

export const sizes: IconPropSize[] = ['m', 'xs', 's', 'l']
export const fitMode: TabsPropFitMode[] = ['dropdown', 'scroll']

export type newDefaultItem = DefaultItem & { labelIcon?: string }
