export type PageOfLayout = {
  name: string
  isActive: boolean
  parentId: string
}

export interface PagesProps {
  pages: PageOfLayout[]
}
