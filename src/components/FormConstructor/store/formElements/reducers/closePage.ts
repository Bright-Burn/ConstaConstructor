import { PayloadAction } from '@reduxjs/toolkit'
import { ChangePages } from '../payload'
import { IFormConstructor } from '../types'

export const closePage = (state: IFormConstructor, action: PayloadAction<ChangePages>) => {
  state.pages = state.pages
    .filter((page, i) => i !== action.payload.index)
    .map((page, i) => {
      return {
        name: page.name,
        isActive: i === action.payload.index,
        parentId: page.parentId,
      }
    })
}

