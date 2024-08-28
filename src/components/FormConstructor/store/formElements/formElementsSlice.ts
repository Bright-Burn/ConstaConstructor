import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './initialState'
import {
  addNewFormElementAdapter,
  addNewFormInstance,
  addNewPage,
  changeActivePage,
  changeElementLinkCount,
  changePageName,
  deleteFormElement,
  deletePage,
  deselectElement,
  reorderFormElements,
  repalceState,
  replaceViewInfo,
  setDraggableElement,
  setElementToCopyId,
  setSameInstanceElementsIds,
  setSelectedView,
  updateFormElements,
  updateFormInstance,
  updateOrders,
} from './reducers'

export const formConstructorSlice = createSlice({
  name: 'formConstructor',
  initialState,
  reducers: {
    replaceViewInfo,
    setElementToCopyId,
    setSameInstanceElementsIds,
    changeElementLinkCount,
    updateFormInstance,
    addNewFormInstance,
    reorderFormElements,
    setDraggableElement,
    repalceState,
    setSelectedView,
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
