import type { PageOfLayout } from '../types'

export type IPageButton = {
  isSelectedPage: boolean
  pageName: string
  pageId: string
  index: number
  page: PageOfLayout
  changePage: (pageId: string) => void
}
