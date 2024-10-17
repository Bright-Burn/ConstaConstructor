import type {
  ChoiceGroupPropForm,
  ChoiceGroupPropSize,
  ChoiceGroupPropView,
  ChoiceGroupPropWidth,
} from '@consta/uikit/ChoiceGroup'

import type { BaseProps, ChoiceGroupItem } from '../../../../coreTypes'

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

export type SingleChoiceGroupProps_Deprecated = ChoiceGroupPropsGeneric<ChoiceGroupItem> & BaseProps

export type MultipleChoiceGroupProps_Deprecated = ChoiceGroupPropsGeneric<ChoiceGroupItem, true> &
  BaseProps

export type ChoiceGroupProps_Deprecated =
  | SingleChoiceGroupProps_Deprecated
  | MultipleChoiceGroupProps_Deprecated
