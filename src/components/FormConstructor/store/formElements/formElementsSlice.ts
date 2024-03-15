import { createSlice } from '@reduxjs/toolkit'

import { popHistory } from './history/reducers'
import { deselectElement } from './reducers/setSelectedElement'
import { initialState } from './initialState'
import {
  addNewFormElement,
  addNewPage,
  changeActivePage,
  changePageName,
  deleteFormElement,
  deletePage,
  loadProjectFromJson,
  setDraggableElement,
  setSelectedElement,
} from './reducers'

//TODO необходимо логику из редьюсеров перенести в экшены, а редьюсеры в слайсы
// иначе не может привести к типу WriteableDraft<IFormConstructor>
// @ts-expect-error
export const formConstructorSlice = createSlice({
  name: 'formConstructor',
  initialState,
  reducers: {
    // @ts-expect-error
    setDraggableElement,
    // @ts-expect-error
    loadProjectFromJson,
    // @ts-expect-error
    setSelectedElement,
    // @ts-expect-error
    deselectElement,
    // @ts-expect-error
    addNewFormElement,
    // @ts-expect-error
    deleteFormElement,
    // @ts-expect-error
    addNewPage,
    // @ts-expect-error
    changeActivePage,
    // @ts-expect-error
    changePageName,
    // @ts-expect-error
    deletePage,
    // @ts-expect-error
    popHistory,
  },
})

export const formConstructorReducer = formConstructorSlice.reducer
