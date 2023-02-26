import {
  FormElementUnion,
  GroupElementUnion,
  IFormConstructor,
  IFormElement,
  ILayoutElement,
} from './types'
import {
  createSlice,
  SliceCaseReducers,
  PayloadAction,
  ValidateSliceCaseReducers,
} from '@reduxjs/toolkit'
import { AddNewElementPayload, SetNewSelectedElement } from './payload'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '..'

const initialState: IFormConstructor = {
  allElementsTree: new Map<string, string[]>(),
  allElementsMap: new Map<string, ILayoutElement | IFormElement>(),
  selectedElement: null,
  selectedElementProps: null,
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
      const element = state.allElementsMap.get(action.payload.elementId)
      if (element) {
        const newProps = action.payload.newProps

        if (newProps) {
          element.props = newProps
        }

        state.selectedElementProps = (element as FormElementUnion | GroupElementUnion).props
        state.selectedElement = {
          ...action.payload,
        }

        const newAllelementMap = new Map<string, ILayoutElement | IFormElement>(
          state.allElementsMap,
        )
        state.allElementsMap = newAllelementMap
        newAllelementMap.set(element.id, element)
      }
    },
    addNewElement: (state, action: PayloadAction<AddNewElementPayload>) => {
      const element = action.payload.element
      const newTreeMap = new Map<string, string[]>(state.allElementsTree)
      newTreeMap.set(action.payload.parent, [
        ...(newTreeMap.get(action.payload.parent) || []),
        element.id,
      ])
      state.allElementsTree = newTreeMap

      const newAllelementMap = new Map<string, ILayoutElement | IFormElement>(state.allElementsMap)
      newAllelementMap.set(element.id, element)
      state.allElementsMap = newAllelementMap
    },
  },
})

export const formConstructorReducer = formConstructorSlice.reducer

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
