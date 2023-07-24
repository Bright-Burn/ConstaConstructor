import { BaseProps, IFormElement } from './types'

export type headerWithBreadcrumbsProps = {
  children?: never
} & BaseProps

export interface IFormElementHeaderWithBreadcrumbs extends IFormElement {
  props: headerWithBreadcrumbsProps
}
