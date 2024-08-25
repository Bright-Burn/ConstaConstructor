import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './initialState'
import { addNewFormInstance, changeElementLinkCount, updateFormInstance } from './instanceElements'
import {
  addNewFormElementAdapter,
  addNewPage,
  changeActivePage,
  changePageName,
  deleteFormElement,
  deletePage,
  deselectElement,
  loadProjectFromJson,
  reorderFormElements,
  setDraggableElement,
  setElementToCopyId,
  setSameInstanceElementsIds,
  setSelectedElement,
  updateFormElements,
  updateOrders,
} from './reducers'

export const formConstructorSlice = createSlice({
  name: 'formConstructor',
  initialState,
  reducers: {
    setElementToCopyId,
    setSameInstanceElementsIds,
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
    updateFormElements,
  },
})

export const formConstructorReducer = formConstructorSlice.reducer
