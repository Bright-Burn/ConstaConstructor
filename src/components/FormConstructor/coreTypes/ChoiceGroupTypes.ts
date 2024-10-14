import type { IconComponent } from '@consta/icons/Icon'
import type {
  ChoiceGroupPropForm,
  ChoiceGroupPropSize,
  ChoiceGroupPropView,
  ChoiceGroupPropWidth,
} from '@consta/uikit/ChoiceGroup'

import type { IconNames } from './iconTypes'
import type { InstanceProps } from './instanceProps'
import type {
  BrandProps,
  ConcreteSelectedView,
  FormElementDictTypes,
  IFormElement,
  OmitInstanceId,
} from './types'

type ChoiceGroupPropValue<ITEM, MULTIPLE extends boolean> =
  | (MULTIPLE extends true ? ITEM[] : ITEM)
  | null
type ChoiceGroupPropsGeneric<ITEM, MULTIPLE extends boolean = false> = {
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

export type ChoiceGroupItem = {
  label: string
  icon?: IconComponent
  labelIcon?: IconNames
  disabled?: boolean
}

export type SingleChoiceGroupProps = ChoiceGroupPropsGeneric<ChoiceGroupItem>

export type MultipleChoiceGroupProps = ChoiceGroupPropsGeneric<ChoiceGroupItem, true>

export type ChoiceGroupProps = InstanceProps<
  SingleChoiceGroupProps | MultipleChoiceGroupProps,
  Record<string, never>
>

export type BrandOwnChoiceGroupProps = BrandProps<ChoiceGroupProps, 'ChoiceGroup'>

export type IFormElementChoiceGroup = OmitInstanceId<
  IFormElement & {
    props: BrandOwnChoiceGroupProps
  }
>

export type ChoiceGroupElement = ConcreteSelectedView<typeof FormElementDictTypes.ChoiceGroup>
