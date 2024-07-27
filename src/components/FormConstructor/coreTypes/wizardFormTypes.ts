import type { BaseProps, BrandProps, IFormElement, OmitInstanceId } from './types'

export type wizardFormProps = {
  children?: never
} & BaseProps

export type IFormElementWizardForm = OmitInstanceId<
  IFormElement & {
    props: BrandWizardFromProps
  }
>
export type BrandWizardFromProps = BrandProps<wizardFormProps, 'WizardForm'>
