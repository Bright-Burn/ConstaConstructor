import { PayloadAction } from '@reduxjs/toolkit'
import { ChangeNamePage } from '../payload'
import { IFormConstructor } from '../../../coreTypes'

export const changePageName = (
  state: IFormConstructor,
  { payload: { pageName: selectedPageName } }: PayloadAction<ChangeNamePage>,
) => {
  state.pages = state.pages.map(page => {
    if (page.id === state.selectedPageId) return { ...page, name: selectedPageName }
    else return page
  })
}
