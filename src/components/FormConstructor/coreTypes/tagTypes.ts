import type { TagBasePropSize } from '@consta/uikit/TagBase'

import type { IconNames } from './iconTypes'
import type {
  BaseProps,
  BrandProps,
  ConcreteSelectedView,
  FormElementDictTypes,
  IFormElement,
  OmitInstanceId,
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

export type TagElement = ConcreteSelectedView<typeof FormElementDictTypes.Tag>

export type IFormElementTagProps = OmitInstanceId<
  IFormElement & {
    props: BrandTagProps
  }
>
