import type { PayloadAction } from '@reduxjs/toolkit'

import type { IFormConstructor } from '../../../coreTypes'

export const addNewPage = (state: IFormConstructor, { payload }: PayloadAction<newPagePayload>) => {
  const { newPageId } = payload
  const pagesCount = state.pages.length

  state.pages = [
    ...state.pages,
    {
      id: newPageId,
      name: `Страница ${pagesCount + 1}`,
    },
  ]
  state.numberOfPages = pagesCount + 1
}

interface newPagePayload {
  newPageId: string
}
