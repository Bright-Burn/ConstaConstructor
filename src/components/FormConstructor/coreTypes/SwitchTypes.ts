import type { SwitchPropAlign, SwitchPropSize, SwitchPropView } from '@consta/uikit/Switch'

import type { InstanceProps } from './instanceProps'
import type {
  BrandProps,
  ConcreteSelectedView,
  FormElementDictTypes,
  IFormElement,
  OmitInstanceId,
} from './types'

type UiLibProps = {
  size?: SwitchPropSize
  view?: SwitchPropView
  align?: SwitchPropAlign
  label?: string
  checked?: boolean
  disabled?: boolean
}
export type SwitchProps = InstanceProps<UiLibProps, {}>

export type BrandSwitchProps = BrandProps<SwitchProps, 'Switch'>

export type SwitchElement = ConcreteSelectedView<typeof FormElementDictTypes.Switch>

export type IFormElementSwitch = OmitInstanceId<
  IFormElement & {
    props: BrandSwitchProps
  }
>
