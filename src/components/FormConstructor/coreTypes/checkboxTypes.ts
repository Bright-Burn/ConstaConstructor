import { CheckboxPropSize, CheckboxPropView, CheckboxPropAlign } from '@consta/uikit/Checkbox'
import {
  BaseProps,
  BrandProps,
  ConcreteSelectedElement,
  FormElementDictTypes,
  IFormElement,
} from './types'

export type CheckboxProps = {
  checked: boolean
  size?: CheckboxPropSize
  view?: CheckboxPropView
  align?: CheckboxPropAlign
  disabled?: boolean
  label?: string
  intermediate?: boolean
} & BaseProps

export type BrandCheckboxProps = BrandProps<CheckboxProps, 'Checkbox'>

export type CheckboxElement = ConcreteSelectedElement<typeof FormElementDictTypes.Checkbox>

export interface IFormElementCheckbox extends IFormElement {
  props: BrandCheckboxProps
}
