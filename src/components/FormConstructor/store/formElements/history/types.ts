import { IFormElement, IGroupElement } from '..'
import { IPageOfLayout, ISelectedElement, UnionProps } from '../types'

export interface ISavePoint {
  allElementsTree: Map<string, string[]>
  allElementsMap: Map<string, IFormElement | IGroupElement>
  pages: IPageOfLayout[]
  numberOfPages: number

  selectedElement: ISelectedElement | null
  selectedElementProps: UnionProps | null
}

export interface IHistory {
  history: ISavePoint[]
}

