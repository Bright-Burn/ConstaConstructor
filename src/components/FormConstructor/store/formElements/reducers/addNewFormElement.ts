import { PayloadAction } from '@reduxjs/toolkit'
import { IFormConstructor, IFormElement, IGroupElement } from '../../../coreTypes'
import { pushHistory } from '../history'
import { layuoutAdapter } from '../initialState'

export const addNewFormElement = (
  state: IFormConstructor,
  action: PayloadAction<IFormElement | IGroupElement>,
) => {
  layuoutAdapter.addOne(state.allElements, action.payload)

  pushHistory(state)
}
