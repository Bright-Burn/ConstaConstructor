import { ListPropForm, ListPropInnerOffset, ListPropSize } from '@consta/uikit/ListCanary'
import { ItemList } from '../../../../coreTypes'

export type ValueType =
  | ListPropSize
  | ItemList[]
  | ListPropInnerOffset
  | ListPropForm
  | string
  | null

export const FormArray: ListPropForm[] = ['default', 'brick', 'round']

export const innerOffsetArray: ListPropInnerOffset[] = ['normal', 'increased']

export const sizeArray: ListPropSize[] = ['xs', 's', 'm', 'l']
