import type { BaseProps, IFormElement } from './types'

export type PlaceholderProps = {
  children?: never
} & BaseProps

export interface IFormElementPlaceholder extends IFormElement {
  props: PlaceholderProps
}
