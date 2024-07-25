import { AllElementTypes, UnionProps } from '../../../coreTypes'

export type LinkCountType = 'INC' | 'DEC'
export type ChangeElementLinkCountPayload = {
  id: string
  type: LinkCountType
}

export type CrateInstancePayload = {
  instanceId: string
  type: AllElementTypes
  props: UnionProps
}
