import type { BaseProps, BrandProps, IFormElement, OmitInstanceId } from './types'

export type simpleFormProps = {
  children?: never
} & BaseProps

export type IFormElementSimpleForm = OmitInstanceId<
  IFormElement & {
    props: BrandSimpleFormProps
  }
>
export type BrandSimpleFormProps = BrandProps<simpleFormProps, 'SimpleForm'>
