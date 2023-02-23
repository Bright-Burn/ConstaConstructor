import { IFormConstructor, IFormElement, ILayoutElement } from './types'
import {
  createSlice,
  SliceCaseReducers,
  PayloadAction,
  ValidateSliceCaseReducers,
} from '@reduxjs/toolkit'
import { AddNewElementPayload, SetNewSelectedElement } from './payload'

const initialState: IFormConstructor = {
  allElementsMap: new Map<string, (ILayoutElement | IFormElement)[]>(),
  selectedElementId: '',
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
      state.selectedElementId = action.payload.elementId
    },
    addNewElement: (state, action: PayloadAction<AddNewElementPayload>) => {
      const newMap = state.allElementsMap
      newMap.set(action.payload.parent, [
        ...(state.allElementsMap.get(action.payload.parent) || []),
        action.payload.element,
      ])
      state.allElementsMap = new Map(newMap)
    },
  },
})
