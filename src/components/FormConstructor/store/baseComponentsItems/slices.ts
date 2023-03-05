import {
  createSlice,
  PayloadAction,
  SliceCaseReducers,
  ValidateSliceCaseReducers,
} from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../setupStore'
import { AddBaseComponent, SetDraggableBaseComponent } from './payload'
import { IBaseComponentsItems } from './types'

const InitialState: IBaseComponentsItems = {
  baseComponents: [],
  draggableBaseComponent: null,
}

const createBaseComponentsItemsSlice = <Reducers extends SliceCaseReducers<IBaseComponentsItems>>({
  name = '',
  initialState,
  reducers,
}: {
  name: string
  initialState: IBaseComponentsItems
  reducers: ValidateSliceCaseReducers<IBaseComponentsItems, Reducers>
}) => {
  return createSlice({
    name,
    initialState,
    reducers: reducers,
  })
}

export const baseComponentsSlice = createBaseComponentsItemsSlice({
  name: 'baseComponentsSlice',
  initialState: InitialState,
  reducers: {
    setDraggableBaseComponent: (state, action: PayloadAction<SetDraggableBaseComponent>) => {
      state.draggableBaseComponent = action.payload.baseComponent
    },
    addNewBaseElement: (state, action: PayloadAction<AddBaseComponent>) => {
      state.baseComponents = [...state.baseComponents, action.payload.baseComponent]
    },
  },
})

export const baseComponentsReducer = baseComponentsSlice.reducer

export const useBaseComponentsDispatch = () => useDispatch<AppDispatch>()
export const useBaseComponentsSelector: TypedUseSelectorHook<RootState> = useSelector
