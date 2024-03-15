import type { TypedUseSelectorHook } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { AppDispatch, RootState } from '../setupStore'

import { AddBaseComponent, SetDraggableBaseComponent } from './payload'
import type { IBaseComponentsItems } from './types'

const InitialState: IBaseComponentsItems = {
  baseComponents: [],
  draggableBaseComponent: null,
}

export const baseComponentsSlice = createSlice({
  name: 'baseComponentsSlice',
  initialState: InitialState,
  reducers: {
    setDraggableBaseComponent: (state, action) => {
      state.draggableBaseComponent = action.payload.baseComponent
    },
    addNewBaseElement: (state, action) => {
      state.baseComponents = [...state.baseComponents, action.payload.baseComponent]
    },
  },
})

export const baseComponentsReducer = baseComponentsSlice.reducer

export const useBaseComponentsDispatch = () => useDispatch<AppDispatch>()
export const useBaseComponentsSelector: TypedUseSelectorHook<RootState> = useSelector
