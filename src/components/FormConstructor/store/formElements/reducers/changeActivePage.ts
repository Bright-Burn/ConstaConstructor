import type { PayloadAction } from '@reduxjs/toolkit'

import type { IFormConstructor } from '../../../coreTypes'
import type { ChangeActivePage } from '../payload'

export const changeActivePage = (
  state: IFormConstructor,
  { payload: { id: selectedPageId } }: PayloadAction<ChangeActivePage>,
) => {
  state.selectedPageId = selectedPageId
  state.pages = state.pages.map((page, i) => {
    return {
      id: page.id,
      name: page.name,
      //Переделать на хранение активного id
      isActive: page.id === selectedPageId,
    }
  })
}
