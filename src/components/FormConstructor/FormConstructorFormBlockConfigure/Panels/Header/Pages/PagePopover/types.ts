import type { PageOfLayout } from '../types'

export type IPagePopover = {
  selectedPageId: string
  isNameEdited: boolean
  pages: PageOfLayout[]
  setNewPageName: (pageName: string | null) => void
  changePage: (pageId: string) => void
  changeIsNameEdited: () => void
}
