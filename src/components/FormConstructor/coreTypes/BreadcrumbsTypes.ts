import {
  BaseProps,
  IFormElement,
  BrandProps,
  FormElementDictTypes,
  ConcreteSelectedElement,
  DeepWriteable,
} from './types'
import { BreadcrumbPropFitMode, BreadcrumbPropSize, DefaultItem } from '@consta/uikit/Breadcrumbs'

export type DefaultItemBreadcrumbsType = DefaultItem & { labelIcon?: string }

export type BreadcrumbProps = {
  items: DefaultItemBreadcrumbsType[]
  fitMode: BreadcrumbPropFitMode
  size: BreadcrumbPropSize
} & BaseProps

export type BrandBreadcrumbsProps = BrandProps<
  DeepWriteable<BreadcrumbProps>,
  'BreadcrumbsFormElement'
>

export type BreadcrumbsFormElement = ConcreteSelectedElement<
  typeof FormElementDictTypes.BreadcrumbsForm
>

export interface IFormElementBreadcrumbs extends IFormElement {
  props: BrandBreadcrumbsProps
}
