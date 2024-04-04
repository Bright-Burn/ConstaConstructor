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
  reorderFormElements,
  setDraggableElement,
  setSelectedElement,
  updateOrders,
} from './reducers'

export const formConstructorSlice = createSlice({
  name: 'formConstructor',
  initialState,
  reducers: {
    reorderFormElements,
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
    updateOrders,
  },
})

export const formConstructorReducer = formConstructorSlice.reducer
