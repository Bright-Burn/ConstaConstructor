import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './initialState'
import {
  addNewFormElement,
  addNewPage,
  changeActivePage,
  changePageName,
  deleteFormElement,
  deletePage,
  deselectElement,
  loadProjectFromJson,
  setDraggableElement,
  setSelectedElement,
} from './reducers'

export const formConstructorSlice = createSlice({
  name: 'formConstructor',
  initialState,
  reducers: {
    setDraggableElement,
    loadProjectFromJson,
    setSelectedElement,
    deselectElement,
    addNewFormElement,
    deleteFormElement,
    addNewPage,
    changeActivePage,
    changePageName,
    deletePage,
  },
})

export const formConstructorReducer = formConstructorSlice.reducer
