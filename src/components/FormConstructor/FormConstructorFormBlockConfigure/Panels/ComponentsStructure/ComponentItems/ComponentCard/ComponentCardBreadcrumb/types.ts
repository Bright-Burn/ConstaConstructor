import type { BreadcrumbsProps } from '@consta/uikit/Breadcrumbs'

import type { BaseProps, BrandBreadcrumbsProps, IFormElement } from '../../../../../../coreTypes'

export type BreadcrumbProps = BreadcrumbsProps & BaseProps

export interface IFormElementBreadcrumbs extends IFormElement {
  props: BrandBreadcrumbsProps
}
