import { BaseProps, IFormElement } from './types'
import { ChoiceGroupProps } from '@consta/uikit/ChoiceGroup'
import { Item } from '../../FormConstructorFormBlockConfigure/Panels/Settings/ChoiceGroupSettings/types'

export type SingleChoiceGroupProps = ChoiceGroupProps<Item, false> & BaseProps

export type MultipleChoiceGroupProps = ChoiceGroupProps<Item, true> & BaseProps

export type OwnChoiceGroupProps = SingleChoiceGroupProps | MultipleChoiceGroupProps

export interface IFormElementChoiceGroup extends IFormElement {
  props: OwnChoiceGroupProps
}
