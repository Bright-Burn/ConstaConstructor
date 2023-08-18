import { BadgePropSize } from '@consta/uikit/Badge'
import { BaseProps, BrandProps, ConcreteSelectedElement, FormElementDictTypes, IFormElement } from './types'

export type TableProps = {
  size?: BadgePropSize
  row?: number
  column?: number
  children?: never
} & BaseProps

export type BrandTableProps = BrandProps<TableProps, 'Table'>

export type TableElement = ConcreteSelectedElement<typeof FormElementDictTypes.Table>

export interface IFormElementTable extends IFormElement {
  props: BrandTableProps
}
