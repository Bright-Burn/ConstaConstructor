import type { RadioPropAlign, RadioPropSize, RadioPropView } from '@consta/uikit/Radio'

import type { InstanceProps } from './instanceProps'
import type {
  BrandProps,
  ConcreteSelectedView,
  FormElementDictTypes,
  IFormElement,
  OmitInstanceId,
} from './types'

type UiLibProps = {
  size?: RadioPropSize
  view?: RadioPropView
  align?: RadioPropAlign
  label?: string
  disabled?: boolean
  checked?: boolean
}

export type RadioButtonProps = InstanceProps<UiLibProps, Record<string, never>>

export type BrandRadioButtonProps = BrandProps<RadioButtonProps, 'RadioButton'>

export type RadioButtonElement = ConcreteSelectedView<typeof FormElementDictTypes.RadioButton>

export type IFormElementRadioButton = OmitInstanceId<
  IFormElement & {
    props: BrandRadioButtonProps
  }
>
