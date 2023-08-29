import { PageOfLayout } from '../types'

export type IPageEdit = {
  isSelectedPage: boolean
  defaultPageName: string
  newPageName: (pageName: string | null) => void
}
