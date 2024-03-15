import type { BaseProps, IFormElement } from './types'

export type CustomCardsProps = {
  children?: never
} & BaseProps

export interface IFormElementCustomCards extends IFormElement {
  props: CustomCardsProps
}
