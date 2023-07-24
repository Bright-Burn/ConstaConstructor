import { TagBasePropSize } from '@consta/uikit/__internal__/src/components/TagBase/TagBase'
import { BaseProps, IFormElement } from './types'
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
  onCancel?: () => void
  onChange?: () => void
  icon?: iconNames
} & BaseProps

export interface IFormElementTagProps extends IFormElement {
  props: TagProps
}
