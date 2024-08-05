import type { BreadcrumbsProps } from '@consta/uikit/Breadcrumbs'

import type {
  BaseProps,
  BrandBreadcrumbsProps,
  IFormElement,
  OmitInstanceId,
} from '../../../../../../coreTypes'

export type BreadcrumbProps = BreadcrumbsProps & BaseProps

export type IFormElementBreadcrumbs = OmitInstanceId<
  IFormElement & {
    props: BrandBreadcrumbsProps
  }
>
