import { newDefaultItem } from '../../FormConstructorFormBlockConfigure/Panels/Settings/BreadcrumbsSettings/BreadcrumbsConstants'
import { BaseProps, IFormElement } from './types'
import { BreadcrumbPropFitMode, BreadcrumbPropSize } from '@consta/uikit/Breadcrumbs'

export type BreadcrumbProps = {
  items: newDefaultItem[]
  fitMode: BreadcrumbPropFitMode
  size: BreadcrumbPropSize
} & BaseProps

export interface IFormElementBreadcrumbs extends IFormElement {
  props: BreadcrumbProps
}
