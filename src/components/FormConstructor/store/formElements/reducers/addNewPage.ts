import { IFormConstructor, ILayoutElement } from '../../../coreTypes'
import { layuoutAdapter } from '../initialState'
import { pushHistory } from '../history'
import { PayloadAction } from '@reduxjs/toolkit'

export const addNewPage = (state: IFormConstructor, action: PayloadAction<newPagePayload>) => {
  const { newPageId, pageLayout } = action.payload
  const pagesCount = state.pages.length

  state.pages = [
    ...state.pages,
    {
      id: newPageId,
      name: `Page ${pagesCount + 1}`,
    },
  ]
  state.numberOfPages = pagesCount + 1
  layuoutAdapter.addOne(state.allElements, pageLayout)

  pushHistory(state)
}

interface newPagePayload {
  newPageId: string
  pageLayout: ILayoutElement
}
