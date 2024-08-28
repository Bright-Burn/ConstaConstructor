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
  updateViewInfo,
  setDraggableElement,
  setElementToCopyId,
  setSameInstanceElementsIds,
  setSelectedView,
  updateFormElements,
  updateFormInstance,
  deleteViewInfos,
  addViewInfos,
  updateOrders,
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
