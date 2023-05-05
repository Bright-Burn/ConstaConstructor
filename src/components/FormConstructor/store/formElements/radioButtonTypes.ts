import { BaseProps, IFormElement } from './types'
import { PropSize } from '@consta/uikit/__internal__/src/components/SelectComponents/types'
import { RadioPropAlign, RadioPropView } from '@consta/uikit/Radio'

export type RadioButtonProps = {
  size?: PropSize
  view?: RadioPropView
  align?: RadioPropAlign
  label?: string
} & BaseProps

export interface IFormElementRadioButton extends IFormElement {
  props: RadioButtonProps
}

