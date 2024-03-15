import type { TagBasePropSize } from '@consta/uikit/__internal__/src/components/TagBase/TagBase'

import type { IconNames } from './iconTypes'
import type {
  BaseProps,
  BrandProps,
  ConcreteSelectedElement,
  FormElementDictTypes,
  IFormElement,
} from './types'

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
export declare type TagBasePropGroup = (typeof tagBasePropGroupStringValue)[number]

export type TagProps = {
  label: string
  size?: TagBasePropSize
  mode: 'info' | 'button' | 'check' | 'cancel' | 'link'
  checked: boolean
  group?: TagBasePropGroup
  Icon?: boolean
  icon?: IconNames
} & BaseProps

export type BrandTagProps = BrandProps<TagProps, 'Tag'>

export type TagElement = ConcreteSelectedElement<typeof FormElementDictTypes.Tag>

export interface IFormElementTagProps extends IFormElement {
  props: BrandTagProps
}
