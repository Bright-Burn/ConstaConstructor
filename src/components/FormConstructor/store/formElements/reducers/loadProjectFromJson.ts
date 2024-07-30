import type { PayloadAction } from '@reduxjs/toolkit'

import type {
  AllElementTypes,
  FormInstance,
  IFormConstructor,
  IFormElement,
  IGroupElement,
  InstanceManager,
  IPageOfLayout,
  ISelectedElement,
  UnionProps,
} from '../../../coreTypes'
import { formInstanceAdapter } from '../formInstanseAdapter'
import { layuoutAdapter } from '../initialState'

export const loadProjectFromJson = (
  state: IFormConstructor,
  action: PayloadAction<IFormConstructorSerializable>,
) => {
  const newSate = action.payload

  layuoutAdapter.addMany(state.allElements, newSate.allElements)
  formInstanceAdapter.addMany(state.elementInstances, newSate.elementInstances)

  // state.isGridVisible = newSate.isGridVisible
  state.selectedElement = newSate.selectedElement
  state.selectedElementProps = newSate.selectedElementProps
  state.instanceManager = newSate.instanceManager
  state.pages = newSate.pages
  state.numberOfPages = newSate.numberOfPages
  state.selectedPageId = newSate.selectedPageId

  state.history = []
}
interface IFormConstructorSerializable {
  allElements: (IFormElement | IGroupElement)[]
  selectedElement: ISelectedElement | null
  selectedElementProps: UnionProps | null
  elementInstances: FormInstance<AllElementTypes>[]
  /*Надо будет избавиться от этого*/
  instanceManager: InstanceManager
  pages: IPageOfLayout[]
  selectedPageId: string
  numberOfPages: number
}
