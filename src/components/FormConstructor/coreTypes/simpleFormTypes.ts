import type { BaseProps, IFormElement } from './types'

export type simpleFormProps = {
  children?: never
} & BaseProps

export interface IFormElementSimpleForm extends IFormElement {
  props: simpleFormProps
}
