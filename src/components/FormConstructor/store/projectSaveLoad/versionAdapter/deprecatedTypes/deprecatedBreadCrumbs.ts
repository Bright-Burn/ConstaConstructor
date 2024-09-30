import type { BreadcrumbPropFitMode, BreadcrumbPropSize } from '@consta/uikit/Breadcrumbs'

import type { BaseProps } from '../../../../coreTypes'
import type { DefaultItemBreadcrumbsType } from '../../../../coreTypes/breadcrumbsTypes'

export type BreadcrumbProps_Deprecated = {
  items: DefaultItemBreadcrumbsType[]
  fitMode: BreadcrumbPropFitMode
  size: BreadcrumbPropSize
  lastItemIsLink?: boolean
} & BaseProps
