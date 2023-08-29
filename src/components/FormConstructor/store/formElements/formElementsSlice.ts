import { createSlice } from '@reduxjs/toolkit'

import {
  addNewFormElement,
  addNewPage,
  changeActivePage,
  deletePage,
  deleteFormElement,
  setSelectedElement,
  loadProjectFromJson,
  setDraggableElement,
  changePageName,
} from './reducers'
import { initialState } from './initialState'
import { popHistory } from './history/reducers'
import { deselectElement } from './reducers/setSelectedElement'

export const formConstructorSlice = createSlice({
  name: 'formConstructor',
  initialState,
  reducers: {
    setDraggableElement: setDraggableElement,
    loadProjectFromJson: loadProjectFromJson,
    setSelectedElement: setSelectedElement,
    deselectElement: deselectElement,
    addNewFormElement: addNewFormElement,
    deleteFormElement: deleteFormElement,
    addNewPage: addNewPage,
    changeActivePage: changeActivePage,
    changePageName: changePageName,
    deletePage: deletePage,
    popHistory: popHistory,
  },
})

export const formConstructorReducer = formConstructorSlice.reducer
