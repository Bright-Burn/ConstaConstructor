import { PayloadAction } from '@reduxjs/toolkit'

import { IFormConstructor } from '../types'
import { DeletePage } from '../payload'
import { processDelete } from './deleteElement'

export const deletePage = (state: IFormConstructor, action: PayloadAction<DeletePage>) => {
  /// Разрешаем удаление только в случае, если количество страниц больше 1
  if (state.pages.length > 1) {
    const pageIdToDelete = action.payload.id
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

    const allElementsTree = new Map(state.allElementsTree)
    const allElementsMap = new Map(state.allElementsMap)

    processDelete(pageIdToDelete, allElementsTree, allElementsMap)

    state.allElementsMap = allElementsMap
    state.allElementsTree = allElementsTree

    state.pages = newPages
  }
}
