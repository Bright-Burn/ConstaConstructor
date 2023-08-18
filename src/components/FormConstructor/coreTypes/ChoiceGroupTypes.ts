import { BaseProps, IFormElement,  BrandProps, ConcreteSelectedElement, FormElementDictTypes } from './types'
import { ChoiceGroupProps } from '@consta/uikit/ChoiceGroup'
import { IconComponent } from '@consta/uikit/Icon'

export type SingleChoiceGroupProps = ChoiceGroupProps<Item, false> & BaseProps

export type MultipleChoiceGroupProps = ChoiceGroupProps<Item, true> & BaseProps

export type OwnChoiceGroupProps = SingleChoiceGroupProps | MultipleChoiceGroupProps

export interface IFormElementChoiceGroup extends IFormElement {
  props: BrandOwnChoiceGroupProps
}

export type ChoiceGroupElement = ConcreteSelectedElement<typeof FormElementDictTypes.ChoiceGroup>

export type BrandOwnChoiceGroupProps = BrandProps<SingleChoiceGroupProps, 'ChoiceGroup'>

export type Item = {
  label: string
  icon?: IconComponent
  labelIcon?: string
  disabled?: boolean
}
