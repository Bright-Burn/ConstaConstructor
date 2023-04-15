import { BaseProps, IFormElement } from './types'

export type simpleFormProps2 = {
  children?: never
} & BaseProps

export interface IFormElementSimpleForm2 extends IFormElement {
  props: simpleFormProps2
}

