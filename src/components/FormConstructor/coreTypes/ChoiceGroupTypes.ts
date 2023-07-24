import { BaseProps, IFormElement } from './types'
import { ChoiceGroupProps } from '@consta/uikit/ChoiceGroup'

export type SingleChoiceGroupProps = ChoiceGroupProps<Item, false> & BaseProps

export type MultipleChoiceGroupProps = ChoiceGroupProps<Item, true> & BaseProps

export type OwnChoiceGroupProps = SingleChoiceGroupProps | MultipleChoiceGroupProps

export interface IFormElementChoiceGroup extends IFormElement {
  props: OwnChoiceGroupProps
}
import { IconComponent } from '@consta/uikit/Icon'

export type Item = {
  label: string
  icon?: IconComponent
  labelIcon?: string
  disabled?: boolean
}
