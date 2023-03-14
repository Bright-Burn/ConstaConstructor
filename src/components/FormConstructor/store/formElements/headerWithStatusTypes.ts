import { BaseProps, IFormElement } from './types'

export type headerWithStatusProps = {
  children?: never
} & BaseProps

export interface IFormElementHeaderWithStatus extends IFormElement {
  props: headerWithStatusProps
}
