import type { PayloadAction } from '@reduxjs/toolkit'

import type { IFormConstructor, ILayoutElement } from '../../../coreTypes'
import { pushHistory } from '../history'
import { layuoutAdapter } from '../initialState'

export const addNewPage = (state: IFormConstructor, { payload }: PayloadAction<newPagePayload>) => {
  const { newPageId, pageLayout } = payload
  const pagesCount = state.pages.length

  state.pages = [
    ...state.pages,
    {
      id: newPageId,
      name: `Страница ${pagesCount + 1}`,
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
