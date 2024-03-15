import type { PayloadAction } from '@reduxjs/toolkit'

import type { IFormConstructor } from '../../../coreTypes'
import type { ChangeNamePage } from '../payload'

export const changePageName = (
  state: IFormConstructor,
  { payload: { pageName: selectedPageName } }: PayloadAction<ChangeNamePage>,
) => {
  state.pages = state.pages.map(page => {
    if (page.id === state.selectedPageId) return { ...page, name: selectedPageName }
    return page
  })
}
