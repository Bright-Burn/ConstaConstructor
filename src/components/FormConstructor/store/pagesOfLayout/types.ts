export interface IPageOfLayout {
  name: string
  isActive: boolean
  parentId: string
}

export interface IPages {
  pages: IPageOfLayout[]
  numberOfPages: number
}
