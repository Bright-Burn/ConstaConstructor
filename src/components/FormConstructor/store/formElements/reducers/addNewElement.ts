import { PayloadAction } from '@reduxjs/toolkit'
import { IFormConstructor, IFormElement, IGroupElement } from '../types'
import { pushHistory } from '../history'
import { layuoutAdapter } from '../initialState'

export const addNewElement = (
  state: IFormConstructor,
  action: PayloadAction<IFormElement | IGroupElement>,
) => {
  layuoutAdapter.addOne(state.allElements, action.payload)

  pushHistory(state)
}
