import type { BaseProps, BrandProps, IFormElement } from './types'

export type wizardFormProps = {
  children?: never
} & BaseProps

export interface IFormElementWizardForm extends IFormElement {
  props: BrandWizardFromProps
}
export type BrandWizardFromProps = BrandProps<wizardFormProps, 'WizardForm'>
