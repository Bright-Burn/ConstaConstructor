import { PayloadAction } from '@reduxjs/toolkit'
import { IFormConstructor, IFormElement, IGroupElement } from '../types'
import { pushHistory } from '../history'

export const addNewElement = (
  state: IFormConstructor,
  action: PayloadAction<{newTreeMap: any,allElementsMap: Map<string, IFormElement | IGroupElement>}>,
) => {
 
  state.allElementsMap = action.payload.allElementsMap
  state.allElementsTree = action.payload.newTreeMap

  pushHistory(state)
}
