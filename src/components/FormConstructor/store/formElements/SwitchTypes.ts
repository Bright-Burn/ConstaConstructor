import { BaseProps, IFormElement } from './types'
import { SwitchPropAlign, SwitchPropSize, SwitchPropView } from '@consta/uikit/Switch'

export type SwitchProps = {
  size?: SwitchPropSize
  view?: SwitchPropView
  align?: SwitchPropAlign
  label?: string
  checked?: boolean
  disabled?: boolean
} & BaseProps

export interface IFormElementSwitch extends IFormElement {
  props: SwitchProps
}
