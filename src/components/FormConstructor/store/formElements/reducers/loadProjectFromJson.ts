import { PayloadAction } from '@reduxjs/toolkit'
import { IFormConstructor, IFormElement, IGroupElement, IPageOfLayout, ISelectedElement, UnionProps } from '../types'

export const loadProjectFromJson = (
  state: IFormConstructor,
  action: PayloadAction<IFormConstructorSerializable>,
) => {
  const newSate = action.payload
    state.allElementsMap = newSate.allElementsMap
    state.allElementsTree = newSate.allElementsTree
    // state.isGridVisible = newSate.isGridVisible
    state.selectedElement = newSate.selectedElement
    state.selectedElementProps = newSate.selectedElementProps
    state.pages = newSate.pages
    state.numberOfPages = newSate.numberOfPages
    state.selectedPageId = newSate.selectedPageId

    state.history = []
  
}
interface IFormConstructorSerializable {
  allElementsTree:  Map<string, string[]>
  allElementsMap: Map<string, IGroupElement | IFormElement>
  selectedElement: ISelectedElement | null
  selectedElementProps: UnionProps | null

  pages: IPageOfLayout[]
  selectedPageId: string
  numberOfPages: number
}
