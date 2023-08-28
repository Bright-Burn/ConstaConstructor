export type IPageButton = {
  isSelectedPage: boolean
  pageName: string
  pageId: string
  index: number
  deletePage: (pageId: string) => void
  changePage: (pageId: string) => void
  changeValueName: (id: number) => void
}
