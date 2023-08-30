import {
  ChoiceGroupPropForm,
  ChoiceGroupPropSize,
  ChoiceGroupPropView,
} from '@consta/uikit/ChoiceGroup'
import { UserPropWidth } from '@consta/uikit/User'
import { IconComponent } from '@consta/uikit/Icon'
import { DeepWriteable } from '../../../../coreTypes'

export type Item = {
  label: string
  icon?: IconComponent
  labelIcon?: string
  disabled?: boolean
}

export type ValueType =
  | ChoiceGroupPropForm
  | ChoiceGroupPropView
  | ChoiceGroupPropSize
  | null
  | string
  | DeepWriteable<Item>
  | Item[]
  | Item

export const viewArray: ChoiceGroupPropView[] = ['ghost', 'primary', 'secondary']

export const sizeArray: ChoiceGroupPropSize[] = ['xs', 's', 'm', 'l']

export const widthArray: UserPropWidth[] = ['default', 'full']

export const formArray: ChoiceGroupPropForm[] = ['default', 'brick', 'round']
