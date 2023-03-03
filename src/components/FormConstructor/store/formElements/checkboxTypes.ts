import { CheckboxPropSize, CheckboxPropView, CheckboxPropAlign } from '@consta/uikit/Checkbox'
import { BaseProps, IFormElement } from './types'

export type CheckboxProps = {
    checked?: boolean | undefined;
    size?: CheckboxPropSize;
    view?: CheckboxPropView;
    align?: CheckboxPropAlign;
    disabled?: boolean;
    label?: string;
} & BaseProps

export interface IFormElementCheckbox extends IFormElement {
  props: CheckboxProps
}