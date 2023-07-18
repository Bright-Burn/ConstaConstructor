import { IFormConstructor } from './types'
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '..'

import {
  addNewElement,
  addNewPage,
  changeActivePage,
  deletePage,
  deleteElement,
  loadProjectFromStorage,
  saveProjectToFile,
  saveProjectToMemmoryStorage,
  setSelectedElement,
  togglePanelByHotKey,
  loadProjectFromJson,
  showGrid,
  toggleSettingsPanelState,
  toggleComponentsStructurePanel,
  setDraggableElement,
} from './reducers'
import { initialState } from './initialState'
import { popHistory } from './history/reducers'

//slice viewer
//slice draggable
export const formConstructorSlice = createSlice({
  name: 'formConstructor',
  initialState,
  reducers: {
    setDraggableElement: setDraggableElement,
    loadProjectFromStorage: loadProjectFromStorage,
    loadProjectFromJson: loadProjectFromJson,
    saveProjectToMemmoryStorage: saveProjectToMemmoryStorage,
    saveProjectToFile: saveProjectToFile,
    showGrid: showGrid,
    setSelectedElement: setSelectedElement,
    addNewElement: addNewElement,
    deleteElement: deleteElement,
    togglePanelsByHotkey: togglePanelByHotKey,
    toggleSettingsPanelState: toggleSettingsPanelState,
    toggleComponentsStructurePanel: toggleComponentsStructurePanel,
    addNewPage: addNewPage,
    changeActivePage: changeActivePage,
    deletePage: deletePage,
    popHistory: popHistory,
  },
})

export const formConstructorReducer = formConstructorSlice.reducer

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
