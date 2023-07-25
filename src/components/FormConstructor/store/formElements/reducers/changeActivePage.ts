import { PayloadAction } from '@reduxjs/toolkit'
import { ChangeActivePage } from '../payload'
import { IFormConstructor } from '../../../coreTypes'

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
