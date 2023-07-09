import { BaseProps, IFormElement } from './types'
import { RadioPropAlign, RadioPropSize, RadioPropView } from '@consta/uikit/Radio'

export type RadioButtonProps = {
  checked: boolean
  size?: RadioPropSize
  view?: RadioPropView
  align?: RadioPropAlign
  label?: string
} & BaseProps

export interface IFormElementRadioButton extends IFormElement {
  props: RadioButtonProps
}

