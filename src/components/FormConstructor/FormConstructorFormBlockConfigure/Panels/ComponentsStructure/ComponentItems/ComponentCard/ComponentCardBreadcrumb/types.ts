import type { BreadcrumbsProps } from '@consta/uikit/Breadcrumbs'

import type {
  BaseProps,
  BrandBreadcrumbsProps,
  FormElementTypes,
} from '../../../../../../coreTypes'

export type BreadcrumbProps = BreadcrumbsProps & BaseProps

export interface IFormElementBreadcrumbs {
  id: string
  type: FormElementTypes
  props: BrandBreadcrumbsProps
}
