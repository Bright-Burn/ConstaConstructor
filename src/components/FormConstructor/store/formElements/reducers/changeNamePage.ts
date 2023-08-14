import { PayloadAction } from '@reduxjs/toolkit'
import { ChangeNamePage } from '../payload'
import { IFormConstructor } from '../../../coreTypes'

export const changeNamePage = (
  state: IFormConstructor,
  { payload: { pageName: selectedPageName, id: selectedPageId } }: PayloadAction<ChangeNamePage>,
) => {
  state.selectedPageId = selectedPageId
  state.pages = state.pages.map((page, i) => {
    return {
      id: page.id,
      name: page.id === state.selectedPageId ? selectedPageName : page.name,
      isActive: page.id,
    }
  })
}
