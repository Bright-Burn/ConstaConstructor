import { BaseProps, IFormElement } from './types'

export type PlaceViolationProps = {
  children?: never
} & BaseProps

export interface IFormElementPlaceViolation extends IFormElement {
  props: PlaceViolationProps
}

