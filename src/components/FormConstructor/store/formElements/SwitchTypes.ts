import { BaseProps, IFormElement } from './types'
import { PropSize } from '@consta/uikit/__internal__/src/components/SelectComponents/types'
import { SwitchPropAlign, SwitchPropView } from '@consta/uikit/Switch'

export type SwitchProps = {
  size?: PropSize
  view?: SwitchPropView
  align?: SwitchPropAlign
  label?: string
  checked?: boolean
} & BaseProps

export interface IFormElementSwitch extends IFormElement {
  props: SwitchProps
}

