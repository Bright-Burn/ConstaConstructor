import type { CheckboxPropAlign, CheckboxPropSize, CheckboxPropView } from '@consta/uikit/Checkbox'

import type { InstanceProps } from './instanceProps'
import type {
  BrandProps,
  ConcreteSelectedView,
  FormElementDictTypes,
  IFormElement,
  OmitInstanceId,
} from './types'

export type UiLibProps = {
  checked: boolean
  size?: CheckboxPropSize
  view?: CheckboxPropView
  align?: CheckboxPropAlign
  disabled?: boolean
  label?: string
  intermediate?: boolean
}

export type CheckboxProps = InstanceProps<UiLibProps, {}>

export type BrandCheckboxProps = BrandProps<CheckboxProps, 'Checkbox'>

export type CheckboxElement = ConcreteSelectedView<typeof FormElementDictTypes.Checkbox>

export type IFormElementCheckbox = OmitInstanceId<
  IFormElement & {
    props: BrandCheckboxProps
  }
>
