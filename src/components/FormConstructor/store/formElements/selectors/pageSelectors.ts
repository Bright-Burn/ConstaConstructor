import type { RootState } from '../../setupStore'

export const getSelectedPageName = (state: RootState) => {
  const selectedPageId = state.formConstructor.selectedPageId
  const pages = state.formConstructor.pages
  return pages.find(page => page.id === selectedPageId)?.name
}
export const getPages = (state: RootState) => state.formConstructor.pages
