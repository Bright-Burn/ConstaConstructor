import type { ChoiceGroupProps } from '@consta/uikit/ChoiceGroup'
import type { IconComponent } from '@consta/uikit/Icon'

import type {
  BaseProps,
  BrandProps,
  ConcreteSelectedElement,
  DeepWriteable,
  FormElementDictTypes,
  IFormElement,
} from './types'

export type SingleChoiceGroupProps = ChoiceGroupProps<ChoiceGroupItem> & BaseProps

export type MultipleChoiceGroupProps = ChoiceGroupProps<ChoiceGroupItem, true> & BaseProps

export type OwnChoiceGroupProps = SingleChoiceGroupProps | MultipleChoiceGroupProps

export interface IFormElementChoiceGroup extends IFormElement {
  props: BrandOwnChoiceGroupProps
}

export type ChoiceGroupElement = ConcreteSelectedElement<typeof FormElementDictTypes.ChoiceGroup>

export type BrandOwnChoiceGroupProps = BrandProps<DeepWriteable<OwnChoiceGroupProps>, 'ChoiceGroup'>

export type ChoiceGroupItem = {
  label: string
  icon?: IconComponent
  labelIcon?: string
  disabled?: boolean
}
