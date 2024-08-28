import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './initialState'
import {
  addNewFormElementAdapter,
  addNewFormInstance,
  addNewPage,
  addViewInfos,
  changeActivePage,
  changeElementLinkCount,
  changePageName,
  deleteFormElement,
  deletePage,
  deleteViewInfos,
  deselectElement,
  reorderFormElements,
  repalceState,
  setDraggableElement,
  setElementToCopyId,
  setSameInstanceElementsIds,
  setSelectedView,
  updateFormElements,
  updateFormInstance,
  updateOrders,
  updateViewInfo,
} from './reducers'

export const formConstructorSlice = createSlice({
  name: 'formConstructor',
  initialState,
  reducers: {
    deleteViewInfos,
    addViewInfos,
    updateViewInfo,
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
