import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './initialState'
import {
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
  addNewFormElementAdapter,
} from './reducers'
import { addNewFormInstance, changeElementLinkCount, updateFormInstance } from './instanceElements'

export const formConstructorSlice = createSlice({
  name: 'formConstructor',
  initialState,
  reducers: {
    changeElementLinkCount,
    updateFormInstance,
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
