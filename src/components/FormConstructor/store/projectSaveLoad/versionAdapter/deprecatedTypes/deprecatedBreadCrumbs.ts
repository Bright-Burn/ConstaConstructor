import { BreadcrumbPropFitMode, BreadcrumbPropSize } from '@consta/uikit/Breadcrumbs'
import { BaseProps } from '../../../../coreTypes'
import { DefaultItemBreadcrumbsType } from '../../../../coreTypes/breadcrumbsTypes'

export type BreadcrumbProps_Deprecated = {
  items: DefaultItemBreadcrumbsType[]
  fitMode: BreadcrumbPropFitMode
  size: BreadcrumbPropSize
  lastItemIsLink?: boolean
} & BaseProps
