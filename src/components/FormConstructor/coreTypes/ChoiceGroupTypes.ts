import type { IconComponent } from '@consta/icons/Icon'
import type {
  ChoiceGroupPropForm,
  ChoiceGroupPropSize,
  ChoiceGroupPropView,
  ChoiceGroupPropWidth,
} from '@consta/uikit/ChoiceGroup'

import type { IconNames } from './iconTypes'
import type {
  BaseProps,
  BrandProps,
  ConcreteSelectedView,
  FormElementDictTypes,
  IFormElement,
  OmitInstanceId,
} from './types'

type ChoiceGroupPropValue<ITEM, MULTIPLE extends boolean> =
  | (MULTIPLE extends true ? ITEM[] : ITEM)
  | null
type ChoiceGroupProps<ITEM, MULTIPLE extends boolean = false> = {
  items: ITEM[]
  view?: ChoiceGroupPropView
  size?: ChoiceGroupPropSize
  form?: ChoiceGroupPropForm
  name: string
  multiple?: MULTIPLE
  value?: ChoiceGroupPropValue<ITEM, MULTIPLE>
  disabled?: boolean
  onlyIcon?: boolean
  width: ChoiceGroupPropWidth
}
export type SingleChoiceGroupProps = ChoiceGroupProps<ChoiceGroupItem> & BaseProps

export type MultipleChoiceGroupProps = ChoiceGroupProps<ChoiceGroupItem, true> & BaseProps

export type OwnChoiceGroupProps = SingleChoiceGroupProps | MultipleChoiceGroupProps

export type IFormElementChoiceGroup = OmitInstanceId<
  IFormElement & {
    props: BrandOwnChoiceGroupProps
  }
>

export type ChoiceGroupElement = ConcreteSelectedView<typeof FormElementDictTypes.ChoiceGroup>

export type BrandOwnChoiceGroupProps = BrandProps<OwnChoiceGroupProps, 'ChoiceGroup'>

export type ChoiceGroupItem = {
  label: string
  icon?: IconComponent
  labelIcon?: IconNames
  disabled?: boolean
}
