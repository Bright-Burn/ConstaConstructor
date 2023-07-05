import { PayloadAction } from '@reduxjs/toolkit'
import { ShowGrid } from '../payload'
import { IFormConstructor } from '../types'

export const showGrid = (state: IFormConstructor, action: PayloadAction<ShowGrid>) => {
  state.isGridVisible = action.payload.isGridVisible
}

