import type { BreadcrumbsProps } from '@consta/uikit/Breadcrumbs'

import type { BaseProps, BrandBreadcrumbsProps, IFormElement } from '../../../../../../coreTypes'
import { OmitInstanceId } from '../../../../../../coreTypes/types'

export type BreadcrumbProps = BreadcrumbsProps & BaseProps

export type IFormElementBreadcrumbs = OmitInstanceId<
  IFormElement & {
    props: BrandBreadcrumbsProps
  }
>
