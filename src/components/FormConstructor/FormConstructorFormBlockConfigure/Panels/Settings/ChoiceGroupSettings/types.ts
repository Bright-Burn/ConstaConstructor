import {
  ChoiceGroupPropForm,
  ChoiceGroupPropSize,
  ChoiceGroupPropView,
} from '@consta/uikit/ChoiceGroup'
import { UserPropWidth } from '@consta/uikit/User'
import { iconNames } from '../../../../store/formElements/iconTypes'
import { IconComponent } from '@consta/uikit/Icon'

export type Item = {
  label: string
  icon?: IconComponent
  labelIcon?: string
  disabled?: boolean
}

export const viewArray: ChoiceGroupPropView[] = ['ghost', 'primary', 'secondary']

export const sizeArray: ChoiceGroupPropSize[] = ['xs', 's', 'm', 'l']

export const widthArray: UserPropWidth[] = ['default', 'full']

export const formArray: ChoiceGroupPropForm[] = ['default', 'brick', 'round']
