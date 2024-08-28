import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './initialState'
import {
  addNewFormInstance,
  addNewPage,
  addNewView,
  addViewInfos,
  changeActivePage,
  changeElementLinkCount,
  changePageName,
  deleteFormElement,
  deletePage,
  deleteViewInfos,
  deselectElement,
  reorderView,
  repalceState,
  setDraggableElement,
  setSameInstanceElementsIds,
  setSelectedView,
  setViewToCopyId,
  updateFormInstance,
  updateOrders,
  updateView,
  updateViewInfo,
} from './reducers'

export const formConstructorSlice = createSlice({
  name: 'formConstructor',
  initialState,
  reducers: {
    deleteViewInfos,
    addViewInfos,
    updateViewInfo,
    setViewToCopyId,
    setSameInstanceElementsIds,
    changeElementLinkCount,
    updateFormInstance,
    addNewFormInstance,
    reorderView,
    setDraggableElement,
    repalceState,
    setSelectedView,
    deselectElement,
    addNewView,
    deleteFormElement,
    addNewPage,
    changeActivePage,
    changePageName,
    deletePage,
    updateOrders,
    updateView,
  },
})

export const formConstructorReducer = formConstructorSlice.reducer
