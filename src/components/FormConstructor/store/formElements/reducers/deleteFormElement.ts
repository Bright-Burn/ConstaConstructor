import type { PayloadAction } from '@reduxjs/toolkit'

import type { IFormConstructor } from '../../../coreTypes'
import { layuoutAdapter } from '../initialState'

export const deleteFormElement = (state: IFormConstructor, action: PayloadAction<string[]>) => {
  layuoutAdapter.removeMany(state.allElements, action.payload)
}
