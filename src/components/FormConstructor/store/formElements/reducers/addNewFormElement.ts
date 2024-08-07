import type { PayloadAction } from '@reduxjs/toolkit'

import type { IFormConstructor, IFormElement, IGroupElement } from '../../../coreTypes'
import { layuoutAdapter } from '../initialState'

export const addNewFormElementAdapter = (
  state: IFormConstructor,
  { payload }: PayloadAction<(IFormElement | IGroupElement)[]>,
) => {
  layuoutAdapter.addMany(state.allElements, payload)
}
