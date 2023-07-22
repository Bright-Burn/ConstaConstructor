import { EntityState, PayloadAction } from '@reduxjs/toolkit'
import {
  IFormConstructor,
  IFormElement,
  IGroupElement,
  IPageOfLayout,
  ISelectedElement,
  UnionProps,
} from '../types'
import { layuoutAdapter } from '../initialState'

export const loadProjectFromJson = (
  state: IFormConstructor,
  action: PayloadAction<IFormConstructorSerializable>,
) => {
  const newSate = action.payload
  layuoutAdapter.addOne(state.allElements, newSate.allElements)
  // state.isGridVisible = newSate.isGridVisible
  state.selectedElement = newSate.selectedElement
  state.selectedElementProps = newSate.selectedElementProps
  state.pages = newSate.pages
  state.numberOfPages = newSate.numberOfPages
  state.selectedPageId = newSate.selectedPageId

  state.history = []
}
interface IFormConstructorSerializable {
  allElements: IFormElement | IGroupElement
  selectedElement: ISelectedElement | null
  selectedElementProps: UnionProps | null

  pages: IPageOfLayout[]
  selectedPageId: string
  numberOfPages: number
}
