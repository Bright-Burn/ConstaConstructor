import { PageOfLayout } from '../types'

export type IPageButton = {
  isSelectedPage: boolean
  pageName: string
  pageId: string
  index: number
  page: PageOfLayout
  isNameEdited: boolean
  changePage: (pageId: string) => void
  setEditedName: (id: boolean) => void
}
