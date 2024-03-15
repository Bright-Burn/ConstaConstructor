import type { PayloadAction } from '@reduxjs/toolkit'

import type { IFormConstructor, IFormElement, IGroupElement } from '../../../coreTypes'
import { pushHistory } from '../history'
import { layuoutAdapter } from '../initialState'

export const addNewFormElement = (
  state: IFormConstructor,
  { payload }: PayloadAction<IFormElement | IGroupElement>,
) => {
  layuoutAdapter.addOne(state.allElements, payload)

  pushHistory(state)
}
