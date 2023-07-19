import { createSlice } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '..'

import {
  addNewElement,
  addNewPage,
  changeActivePage,
  deletePage,
  deleteElement,
  setSelectedElement,
  loadProjectFromJson,
  setDraggableElement,
} from './reducers'
import { initialState } from './initialState'
import { popHistory } from './history/reducers'

//slice viewer
//slice draggable
export const formConstructorSlice = createSlice({
  name: 'formConstructor',
  initialState,
  reducers: {
    setDraggableElement: setDraggableElement,
    loadProjectFromJson: loadProjectFromJson,
    setSelectedElement: setSelectedElement,
    addNewElement: addNewElement,
    deleteElement: deleteElement,
    addNewPage: addNewPage,
    changeActivePage: changeActivePage,
    deletePage: deletePage,
    popHistory: popHistory,
  },
})

export const formConstructorReducer = formConstructorSlice.reducer

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
