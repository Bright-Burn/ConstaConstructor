import type { ListPropForm, ListPropInnerOffset, ListPropSize } from '@consta/uikit/ListCanary'

import type { ItemList } from '../../../../coreTypes'

export type ValueType = ListPropSize | ItemList[] | ListPropInnerOffset | ListPropForm | null

export const FormArray: ListPropForm[] = ['default', 'brick', 'round']

export const innerOffsetArray: ListPropInnerOffset[] = ['normal', 'increased']

export const sizeArray: ListPropSize[] = ['xs', 's', 'm', 'l']
