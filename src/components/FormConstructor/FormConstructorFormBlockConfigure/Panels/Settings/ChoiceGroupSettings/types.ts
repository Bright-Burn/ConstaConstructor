import type {
  ChoiceGroupPropForm,
  ChoiceGroupPropSize,
  ChoiceGroupPropView,
  ChoiceGroupPropWidth,
} from '@consta/uikit/ChoiceGroup'

import type { ChoiceGroupItem } from '../../../../coreTypes'

export type ValueType =
  | ChoiceGroupPropForm
  | ChoiceGroupPropView
  | ChoiceGroupPropSize
  | null
  | ChoiceGroupItem[]
  | ChoiceGroupItem
  | ChoiceGroupPropWidth

export const viewArray: ChoiceGroupPropView[] = ['ghost', 'primary', 'secondary']

export const sizeArray: ChoiceGroupPropSize[] = ['xs', 's', 'm', 'l']

export const formArray: ChoiceGroupPropForm[] = ['default', 'brick', 'round']

export const widthArray: ChoiceGroupPropWidth[] = ['full', 'default']
