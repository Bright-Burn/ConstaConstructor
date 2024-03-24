import type { ReactElement } from 'react'

import type { FormElementDictTypes, FormGroupsDictTypes } from '../../coreTypes'

export interface ISwitchComponent {
  children?: ReactElement<{
    value: keyof typeof FormGroupsDictTypes | keyof typeof FormElementDictTypes
  }>[]
  testValue:
    | keyof typeof FormGroupsDictTypes
    | (typeof FormElementDictTypes)[keyof typeof FormElementDictTypes]
}
