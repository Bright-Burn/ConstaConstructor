import type { BaseProps, BrandProps, OmitInstanceId, IFormElement } from './types'

export type PlaceholderProps = {
  children?: never
} & BaseProps

export type IFormElementPlaceholder = OmitInstanceId<
  IFormElement & {
    props: BrandPlaceholderProps
  }
>
export type BrandPlaceholderProps = BrandProps<PlaceholderProps, 'Placeholder'>
