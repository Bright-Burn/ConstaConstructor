import { TagBasePropSize } from '@consta/uikit/__internal__/src/components/TagBase/TagBase'
import { BaseProps, IFormElement, BrandProps, ConcreteSelectedElement, FormElementDictTypes } from './types'
import { iconNames } from './iconTypes'

export declare const tagBasePropGroupStringValue: readonly [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
]
export declare type TagBasePropGroup = typeof tagBasePropGroupStringValue[number]

export type TagProps = {
  label: string
  size?: TagBasePropSize
  mode: 'info' | 'button' | 'check' | 'cancel' | 'link'
  checked: boolean
  group?: TagBasePropGroup
  Icon?: boolean
  icon?: iconNames
} & BaseProps

export type BrandTagProps = BrandProps<TagProps, 'Tag'>

export type TagElement = ConcreteSelectedElement<typeof FormElementDictTypes.Tag>

export interface IFormElementTagProps extends IFormElement {
  props: BrandTagProps
}
