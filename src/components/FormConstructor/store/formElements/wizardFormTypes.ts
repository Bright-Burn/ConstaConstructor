import { BaseProps, IFormElement } from './types'

export type wizardFormProps = {
  children?: never
} & BaseProps

export interface IFormElementWizardForm extends IFormElement {
  props: wizardFormProps
}
