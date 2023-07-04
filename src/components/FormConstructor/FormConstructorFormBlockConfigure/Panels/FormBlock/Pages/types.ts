export type PageOfLayout = {
  name: string
  isActive: boolean
  parentId: string
  id: string
}

export interface PagesProps {
  pages: PageOfLayout[]
}
