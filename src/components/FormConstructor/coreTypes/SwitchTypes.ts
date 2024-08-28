import type { SwitchPropAlign, SwitchPropSize, SwitchPropView } from '@consta/uikit/Switch'

import type {
  BaseProps,
  BrandProps,
  ConcreteSelectedView,
  FormElementDictTypes,
  IFormElement,
  OmitInstanceId,
} from './types'

export type SwitchProps = {
  size?: SwitchPropSize
  view?: SwitchPropView
  align?: SwitchPropAlign
  label?: string
  checked?: boolean
  disabled?: boolean
} & BaseProps

export type BrandSwitchProps = BrandProps<SwitchProps, 'Switch'>

export type SwitchElement = ConcreteSelectedView<typeof FormElementDictTypes.Switch>

export type IFormElementSwitch = OmitInstanceId<
  IFormElement & {
    props: BrandSwitchProps
  }
>
