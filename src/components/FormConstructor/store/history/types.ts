import { IFormElement, IGroupElement } from '../formElements'
import { IPageOfLayout } from '../formElements/types'

export interface ISavePoint {
  allElementsTree: Map<string, string[]>
  allElementsMap: Map<string, IFormElement | IGroupElement>

  pages: IPageOfLayout[]
  numberOfPages: number
}

export interface IHistory {
  history: ISavePoint[]

  savePointToUse: ISavePoint | null
}

