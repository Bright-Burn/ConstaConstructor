import type { BreadcrumbPropFitMode, BreadcrumbPropSize } from '@consta/uikit/Breadcrumbs'

import type { BaseProps, DefaultItemBreadcrumbsType } from '../../../../coreTypes'

export type BreadcrumbProps_Deprecated = {
  items: DefaultItemBreadcrumbsType[]
  fitMode: BreadcrumbPropFitMode
  size: BreadcrumbPropSize
  lastItemIsLink?: boolean
} & BaseProps
