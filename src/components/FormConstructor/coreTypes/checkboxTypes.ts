import type { CheckboxPropAlign, CheckboxPropSize, CheckboxPropView } from '@consta/uikit/Checkbox'

import type {
  BaseProps,
  BrandProps,
  ConcreteSelectedView,
  FormElementDictTypes,
  IFormElement,
  OmitInstanceId,
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

export type CheckboxElement = ConcreteSelectedView<typeof FormElementDictTypes.Checkbox>

export type IFormElementCheckbox = OmitInstanceId<
  IFormElement & {
    props: BrandCheckboxProps
  }
>
