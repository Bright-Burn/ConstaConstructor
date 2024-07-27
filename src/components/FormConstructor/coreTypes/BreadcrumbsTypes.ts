import type {
  BreadcrumbPropFitMode,
  BreadcrumbPropSize,
  DefaultItem,
} from '@consta/uikit/Breadcrumbs'

import type {
  BaseProps,
  BrandProps,
  ConcreteSelectedElement,
  DeepWriteable,
  FormElementDictTypes,
  IFormElement,
  OmitInstanceId,
} from './types'

export type DefaultItemBreadcrumbsType = DefaultItem & { labelIcon?: string }

export type BreadcrumbProps = {
  items: DefaultItemBreadcrumbsType[]
  fitMode: BreadcrumbPropFitMode
  size: BreadcrumbPropSize
  lastItemIsLink?: boolean
} & BaseProps

export type BrandBreadcrumbsProps = BrandProps<
  DeepWriteable<BreadcrumbProps>,
  'BreadcrumbsFormElement'
>

export type BreadcrumbsFormElement = ConcreteSelectedElement<
  typeof FormElementDictTypes.BreadcrumbsForm
>

export type IFormElementBreadcrumbs = OmitInstanceId<
  IFormElement & {
    props: BrandBreadcrumbsProps
  }
>
