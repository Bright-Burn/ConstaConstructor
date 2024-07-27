import type { BaseProps, BrandProps, IFormElement, OmitInstanceId } from './types'

export type footerWithSwitchProps = {
  children?: never
} & BaseProps

export type IFormElementFooterWithSwitch = OmitInstanceId<
  IFormElement & {
    props: BrandFooterWithSwitchProps
  }
>
export type BrandFooterWithSwitchProps = BrandProps<footerWithSwitchProps, 'FooterWithSwitch'>
