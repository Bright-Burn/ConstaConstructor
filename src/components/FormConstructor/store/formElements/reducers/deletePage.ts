import type { PayloadAction } from '@reduxjs/toolkit'

import type { IFormConstructor } from '../../../coreTypes'
import { pushHistory } from '../history'
import type { DeletePage } from '../payload'

export const deletePage = (state: IFormConstructor, { payload }: PayloadAction<DeletePage>) => {
  const pageIdToDelete = payload.id
  let pageToOpenIndex: number | null = null

  const newPages = state.pages.filter((page, index) => {
    /// Если удаляется выбранная страница, то происходит поиск индекса следующей для открытия
    if (page.id === pageIdToDelete && page.id === state.selectedPageId) {
      pageToOpenIndex = index !== 0 ? index - 1 : index
    }
    return page.id !== pageIdToDelete
  })

  if (pageToOpenIndex != null) {
    state.selectedPageId = pageToOpenIndex
  }

  // processDelete(pageIdToDelete, allElementsTree, allElementsMap)

  state.pages = newPages

  pushHistory(state)
}
