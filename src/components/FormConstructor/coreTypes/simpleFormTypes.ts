import type { BaseProps, BrandProps, IFormElement } from './types'

export type simpleFormProps = {
  children?: never
} & BaseProps

export interface IFormElementSimpleForm extends IFormElement {
  props: BrandSimpleFormProps
}
export type BrandSimpleFormProps = BrandProps<simpleFormProps, 'SimpleForm'>
