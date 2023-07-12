import { PayloadAction } from '@reduxjs/toolkit'
import { IFormConstructor } from '../types'
import { LoadFromSavePoint } from '../payload'

export const loadFromSavePoint = (
  state: IFormConstructor,
  action: PayloadAction<LoadFromSavePoint>,
) => {
  state.allElementsMap = new Map(action.payload.savePoint.allElementsMap)
  state.allElementsTree = new Map(action.payload.savePoint.allElementsTree)
  state.numberOfPages = action.payload.savePoint.numberOfPages
  state.pages = [...action.payload.savePoint.pages]
}

