import type {
  BreadcrumbPropFitMode,
  BreadcrumbPropSize,
  DefaultItem,
} from '@consta/uikit/Breadcrumbs'

import type { InstanceProps } from './instanceProps'
import type {
  BrandProps,
  ConcreteSelectedView,
  DeepWriteable,
  FormElementDictTypes,
  IFormElement,
  OmitInstanceId,
} from './types'

export type DefaultItemBreadcrumbsType = DefaultItem & { labelIcon?: string }

type UiLibProps = {
  items: DefaultItemBreadcrumbsType[]
  fitMode: BreadcrumbPropFitMode
  size: BreadcrumbPropSize
  lastItemIsLink?: boolean
}

export type BreadcrumbProps = InstanceProps<UiLibProps, {}>

export type BrandBreadcrumbsProps = BrandProps<BreadcrumbProps, 'BreadcrumbsFormElement'>

export type BreadcrumbsFormElement = ConcreteSelectedView<
  typeof FormElementDictTypes.BreadcrumbsForm
>

export type IFormElementBreadcrumbs = OmitInstanceId<
  IFormElement & {
    props: BrandBreadcrumbsProps
  }
>
