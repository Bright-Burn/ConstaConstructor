import { PayloadAction } from '@reduxjs/toolkit'
import { IFormConstructor } from '../../../coreTypes'
import { pushHistory } from '../history'
import { layuoutAdapter } from '../initialState'

export const deleteFormElement = (state: IFormConstructor, action: PayloadAction<string[]>) => {
  layuoutAdapter.removeMany(state.allElements, action.payload)
  pushHistory(state)
}
