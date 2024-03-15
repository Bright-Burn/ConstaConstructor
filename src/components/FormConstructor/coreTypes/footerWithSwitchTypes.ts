import type { BaseProps, IFormElement } from './types'

export type footerWithSwitchProps = {
  children?: never
} & BaseProps

export interface IFormElementFooterWithSwitch extends IFormElement {
  props: footerWithSwitchProps
}
