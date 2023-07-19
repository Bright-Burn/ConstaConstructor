import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../setupStore'
import { AddBaseComponent, SetDraggableBaseComponent } from './payload'
import { IBaseComponentsItems } from './types'

const InitialState: IBaseComponentsItems = {
  baseComponents: [],
  draggableBaseComponent: null,
}

export const baseComponentsSlice = createSlice({
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
