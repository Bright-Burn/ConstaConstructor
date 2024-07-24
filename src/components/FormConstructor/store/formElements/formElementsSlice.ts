import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './initialState'
import {
  addNewFormInstance,
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
  changeElementLinkCount,
  addNewFormElementAdapter,
} from './reducers'

export const formConstructorSlice = createSlice({
  name: 'formConstructor',
  initialState,
  reducers: {
    changeElementLinkCount,
    addNewFormInstance,
    reorderFormElements,
    setDraggableElement,
    loadProjectFromJson,
    setSelectedElement,
    deselectElement,
    addNewFormElementAdapter,
    deleteFormElement,
    addNewPage,
    changeActivePage,
    changePageName,
    deletePage,
    updateOrders,
  },
})

export const formConstructorReducer = formConstructorSlice.reducer
