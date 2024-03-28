import type { BaseProps, BrandProps, IFormElement } from './types'

export type PlaceholderProps = {
  children?: never
} & BaseProps

export interface IFormElementPlaceholder extends IFormElement {
  props: BrandPlaceholderProps
}
export type BrandPlaceholderProps = BrandProps<PlaceholderProps, 'Placeholder'>
