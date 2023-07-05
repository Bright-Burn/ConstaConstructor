import { IconPropSize } from '@consta/uikit/Icon'
import { BaseProps, IFormElement } from './types'
import { TabsPropFitMode } from '@consta/uikit/Tabs'
import { BreadcrumbsProps } from '@consta/uikit/Breadcrumbs'

export type BreadcrumbProps = BreadcrumbsProps & BaseProps

export interface IFormElementBreadcrumbs extends IFormElement {
  props: BreadcrumbProps
}
