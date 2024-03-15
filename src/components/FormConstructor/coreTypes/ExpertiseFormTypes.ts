import type { BaseProps, IFormElement } from './types'

export type ExpertiseFormProps = {
  children?: never
} & BaseProps

export interface IExpertiseFormProps extends IFormElement {
  props: ExpertiseFormProps
}
