import { IFormConstructor, IFormElement, IGroupElement } from './types'
import { createSlice, SliceCaseReducers, ValidateSliceCaseReducers } from '@reduxjs/toolkit'
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

export const rootId = 'Page1'

const initialState: IFormConstructor = {
  allElementsTree: new Map<string, string[]>(),
  allElementsMap: new Map<string, IFormElement | IGroupElement>(),
  selectedElement: null,
  selectedElementProps: null,
  isGridVisible: true,
  draggableElement: null,
  componentsStructurePanelState: true,
  settingsPanelState: true,
  pages: [{ id: rootId, name: 'Page1' }],
  numberOfPages: 1,
  selectedPageId: rootId,
}

const createFormConstructorSlice = <Reducers extends SliceCaseReducers<IFormConstructor>>({
  name = '',
  initialState,
  reducers,
}: {
  name: string
  initialState: IFormConstructor
  reducers: ValidateSliceCaseReducers<IFormConstructor, Reducers>
}) => {
  return createSlice({
    name,
    initialState,
    reducers: reducers,
  })
}

export const formConstructorSlice = createFormConstructorSlice({
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
  },
})

export const formConstructorReducer = formConstructorSlice.reducer

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
