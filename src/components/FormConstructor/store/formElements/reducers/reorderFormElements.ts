import type { PayloadAction } from '@reduxjs/toolkit'

import type { IFormConstructor, IFormElement, IGroupElement } from '../../../coreTypes'
import { layuoutAdapter } from '../initialState'

export const reorderFormElements = (
  state: IFormConstructor,
  action: PayloadAction<IFormElement | IGroupElement>,
) => {
  layuoutAdapter.updateOne(state.allElements, { id: action.payload.id, changes: action.payload })
}
