import type { RadioPropAlign, RadioPropSize, RadioPropView } from '@consta/uikit/Radio'

import type {
  BaseProps,
  BrandProps,
  ConcreteSelectedElement,
  OmitInstanceId,
  FormElementDictTypes,
  IFormElement,
} from './types'

export type RadioButtonProps = {
  size?: RadioPropSize
  view?: RadioPropView
  align?: RadioPropAlign
  label?: string
  disabled?: boolean
  checked?: boolean
} & BaseProps

export type BrandRadioButtonProps = BrandProps<RadioButtonProps, 'RadioButton'>

export type RadioButtonElement = ConcreteSelectedElement<typeof FormElementDictTypes.RadioButton>

export type IFormElementRadioButton = OmitInstanceId<
  IFormElement & {
    props: BrandRadioButtonProps
  }
>
