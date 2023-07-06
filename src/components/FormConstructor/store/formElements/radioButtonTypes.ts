import { BaseProps, IFormElement } from './types'
import { RadioPropAlign, RadioPropSize, RadioPropView } from '@consta/uikit/Radio'

export type RadioButtonProps = {
  size?: RadioPropSize
  view?: RadioPropView
  align?: RadioPropAlign
  label?: string
  disabled?: boolean
  checked?: boolean
} & BaseProps

export interface IFormElementRadioButton extends IFormElement {
  props: RadioButtonProps
}
