import type {
  BreadcrumbPropFitMode,
  BreadcrumbPropSize,
  DefaultItem,
} from '@consta/uikit/Breadcrumbs'

import type { IconNames } from './iconTypes'
import type { InstanceProps } from './instanceProps'
import type {
  BrandProps,
  ConcreteSelectedView,
  FormElementDictTypes,
  IFormElement,
  OmitInstanceId,
} from './types'

export type DefaultItemBreadcrumbsType = Omit<DefaultItem, 'icon'> & { icon?: IconNames }

type UiLibProps = {
  items: DefaultItemBreadcrumbsType[]
  fitMode: BreadcrumbPropFitMode
  size: BreadcrumbPropSize
  lastItemIsLink?: boolean
}

export type BreadcrumbProps = InstanceProps<UiLibProps, Record<string, never>>

export type BrandBreadcrumbsProps = BrandProps<BreadcrumbProps, 'BreadcrumbsFormElement'>

export type BreadcrumbsFormElement = ConcreteSelectedView<
  typeof FormElementDictTypes.BreadcrumbsForm
>

export type IFormElementBreadcrumbs = OmitInstanceId<
  IFormElement & {
    props: BrandBreadcrumbsProps
  }
>
