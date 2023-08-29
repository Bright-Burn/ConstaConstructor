import { PageOfLayout } from '../types'

export type IPagePopover = {
  selectedPageId: string
  isNameEdited: boolean
  pages: PageOfLayout[]
  newPageName: (pageName: string | null) => void
  changePage: (pageId: string) => void
  setNameEdited: (id: boolean) => void
}
