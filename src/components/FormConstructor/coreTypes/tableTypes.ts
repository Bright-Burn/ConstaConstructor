import { BadgePropSize } from '@consta/uikit/Badge'
import { BaseProps, IFormElement } from './types'

export type TableProps = {
  size?: BadgePropSize
  row?: number
  column?: number
  children?: never
} & BaseProps

export interface IFormElementTable extends IFormElement {
  props: TableProps
}
