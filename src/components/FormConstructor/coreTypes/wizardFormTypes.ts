import type { BaseProps, BrandProps, OmitInstanceId, IFormElement } from './types'

export type wizardFormProps = {
  children?: never
} & BaseProps

export type IFormElementWizardForm = OmitInstanceId<
  IFormElement & {
    props: BrandWizardFromProps
  }
>
export type BrandWizardFromProps = BrandProps<wizardFormProps, 'WizardForm'>
