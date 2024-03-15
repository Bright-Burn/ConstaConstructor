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

//TODO необходимо логику из редьюсеров перенести в экшены, а редьюсеры в слайсы
// иначе не может привести к типу WriteableDraft<IFormConstructor>
// @ts-ignore
export const formConstructorSlice = createSlice({
  name: 'formConstructor',
  initialState,
  reducers: {
    // @ts-ignore
    setDraggableElement: setDraggableElement,
    // @ts-ignore
    loadProjectFromJson: loadProjectFromJson,
    // @ts-ignore
    setSelectedElement: setSelectedElement,
    // @ts-ignore
    deselectElement: deselectElement,
    // @ts-ignore
    addNewFormElement: addNewFormElement,
    // @ts-ignore
    deleteFormElement: deleteFormElement,
    // @ts-ignore
    addNewPage: addNewPage,
    // @ts-ignore
    changeActivePage: changeActivePage,
    // @ts-ignore
    changePageName: changePageName,
    // @ts-ignore
    deletePage: deletePage,
    // @ts-ignore
    popHistory: popHistory,
  },
})

export const formConstructorReducer = formConstructorSlice.reducer
