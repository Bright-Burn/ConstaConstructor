import { BaseProps, IFormElement } from './types'
import { BreadcrumbsProps } from '@consta/uikit/Breadcrumbs'

export type BreadcrumbProps = BreadcrumbsProps & BaseProps

export interface IFormElementBreadcrumbs extends IFormElement {
  props: BreadcrumbProps
}
