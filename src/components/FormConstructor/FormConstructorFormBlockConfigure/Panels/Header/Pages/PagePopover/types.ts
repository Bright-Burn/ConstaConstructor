import type { PageOfLayout } from '../types'

export type IPagePopover = {
  selectedPageId: string
  pages: PageOfLayout[]
  changePage: (pageId: string) => void
}
