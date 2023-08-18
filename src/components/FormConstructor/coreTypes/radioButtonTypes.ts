import { BaseProps, BrandProps, ConcreteSelectedElement, FormElementDictTypes, IFormElement } from './types'
import { RadioPropAlign, RadioPropSize, RadioPropView } from '@consta/uikit/Radio'

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

export interface IFormElementRadioButton extends IFormElement {
  props: BrandRadioButtonProps
}
