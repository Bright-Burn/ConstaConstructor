import { BaseProps, IFormElement,BrandProps, FormElementDictTypes, ConcreteSelectedElement } from './types'
import { BreadcrumbsProps } from '@consta/uikit/Breadcrumbs'

export type BreadcrumbProps = BreadcrumbsProps & BaseProps

export type BrandBreadcrumbsProps = BrandProps<BreadcrumbProps, 'BreadcrumbsFormElement'>

export type BreadcrumbsFormElement = ConcreteSelectedElement<typeof FormElementDictTypes.BreadcrumbsForm>

export interface IFormElementBreadcrumbs extends IFormElement {
  props: BrandBreadcrumbsProps
}
