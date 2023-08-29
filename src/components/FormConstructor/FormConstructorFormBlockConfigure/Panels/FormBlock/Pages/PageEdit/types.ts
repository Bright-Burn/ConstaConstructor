export type IPageEdit = {
  isSelectedPage: boolean
  defaultPageName: string
  setNewPageName: (pageName: string | null) => void
}
