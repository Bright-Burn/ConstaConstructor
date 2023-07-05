export type PageOfLayout = {
  id: string
  name: string
  isActive: boolean
}

export interface PagesProps {
  pages: PageOfLayout[]
}
