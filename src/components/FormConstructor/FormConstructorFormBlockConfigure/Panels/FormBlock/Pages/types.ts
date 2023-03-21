export type PageOfLayout = {
  name: string
  isActive: boolean
  parentId: string
}

export interface PagesProps {
  pages: PageOfLayout[]
  addNewPage: () => void
  changeActivePage: (index: number) => void
  closePage: (index: number) => void
}
