import { BreadcrumbsProps } from '@consta/uikit/Breadcrumbs'
import { BaseProps, FormElementTypes } from '../../../../../../store'

export type BreadcrumbProps = BreadcrumbsProps & BaseProps

export interface IFormElementBreadcrumbs {
  id: string
  type: FormElementTypes
  props: BreadcrumbProps
}
