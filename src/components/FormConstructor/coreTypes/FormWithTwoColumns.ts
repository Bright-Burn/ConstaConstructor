import { BaseProps, IFormElement } from './types'

export type FormWithTwoColumnsProps = {
  children?: never
} & BaseProps

export interface IFormFormWithTwoColumns extends IFormElement {
  props: FormWithTwoColumnsProps
}
