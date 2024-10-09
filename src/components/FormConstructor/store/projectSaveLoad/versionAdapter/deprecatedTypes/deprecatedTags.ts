import type { TagBasePropSize } from '@consta/uikit/TagBase'

import type { BaseProps, IconNames } from '../../../../coreTypes'

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

export type TagProps_Deprecated = {
  label: string
  size?: TagBasePropSize
  mode: 'info' | 'button' | 'check' | 'cancel' | 'link'
  checked: boolean
  group?: TagBasePropGroup
  Icon?: boolean
  icon?: IconNames
} & BaseProps
