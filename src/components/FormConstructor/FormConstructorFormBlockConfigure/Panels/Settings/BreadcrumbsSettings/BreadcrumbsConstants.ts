import type { IconPropSize } from '@consta/icons/Icon'
import type { DefaultItem } from '@consta/uikit/Breadcrumbs'
import type { TabsPropFitMode } from '@consta/uikit/Tabs'

export const sizes: IconPropSize[] = ['m', 'xs', 's', 'l']
export const fitMode: TabsPropFitMode[] = ['dropdown', 'scroll']

export type newDefaultItem = DefaultItem & { labelIcon?: string }
