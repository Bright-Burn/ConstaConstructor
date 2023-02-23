import { IFormConstructor, IFormElement, ILayoutElement } from './types'
import {
  createSlice,
  SliceCaseReducers,
  PayloadAction,
  ValidateSliceCaseReducers,
} from '@reduxjs/toolkit'
import { AddNewElementPayload, SetNewSelectedElement } from './payload'

const initialState: IFormConstructor = {
  allElementsTree: new Map<string, (ILayoutElement | IFormElement)[]>(),
  allElementsMap: new Map<string, ILayoutElement | IFormElement>(),
  selectedElement: null,
}

const createFormConstructorSlice = <Reducers extends SliceCaseReducers<IFormConstructor>>({
  name = '',
  initialState,
  reducers,
}: {
  name: string
  initialState: IFormConstructor
  reducers: ValidateSliceCaseReducers<IFormConstructor, Reducers>
}) => {
  return createSlice({
    name,
    initialState,
    reducers: reducers,
  })
}

export const formConstructorSlice = createFormConstructorSlice({
  name: 'formConstructor',
  initialState,
  reducers: {
    setSelectedElement: (state, action: PayloadAction<SetNewSelectedElement>) => {
      state.selectedElement = {
        ...action.payload,
      }
    },
    addNewElement: (state, action: PayloadAction<AddNewElementPayload>) => {
      const element = action.payload.element
      const newTreeMap = new Map<string, (ILayoutElement | IFormElement)[]>(state.allElementsTree)
      newTreeMap.set(action.payload.parent, [
        ...(newTreeMap.get(action.payload.parent) || []),
        element,
      ])
      state.allElementsTree = newTreeMap

      const newAllelementMap = new Map<string, ILayoutElement | IFormElement>(state.allElementsMap)
      newAllelementMap.set(element.id, element)
      state.allElementsMap = newAllelementMap
    },
  },
})
