import type { BaseProps, BrandProps, IFormElement } from './types'

export type footerWithSwitchProps = {
  children?: never
} & BaseProps

export interface IFormElementFooterWithSwitch extends IFormElement {
  props: BrandFooterWithSwitchProps
}
export type BrandFooterWithSwitchProps = BrandProps<footerWithSwitchProps, 'FooterWithSwitch'>
