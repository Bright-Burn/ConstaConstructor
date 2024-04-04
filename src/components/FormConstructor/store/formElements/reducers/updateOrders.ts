import type { PayloadAction, Update } from '@reduxjs/toolkit'

import type { IFormConstructor, IFormElement, IGroupElement, UnionProps } from '../../../coreTypes'
import { layuoutAdapter } from '../initialState'

export const updateOrders = (
  state: IFormConstructor,
  action: PayloadAction<Update<IFormElement | IGroupElement>[]>,
) => {
  layuoutAdapter.updateMany(state.allElements, action.payload)
}
