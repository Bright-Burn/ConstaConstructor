import { IFormConstructor, IFormElement, IGroupElement } from './types'
import {
  createSlice,
  SliceCaseReducers,
  PayloadAction,
  ValidateSliceCaseReducers,
} from '@reduxjs/toolkit'
import { PanelStatePayload, SetNewElementDraggableElem, ShowGrid } from './payload'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '..'

import {
  addNewElement,
  addNewPage,
  changeActivePage,
  closePage,
  deleteElement,
  loadProjectFromStorage,
  saveProjectToFile,
  saveProjectToMemmoryStorage,
  setSelectedElement,
  togglePanelByHotKey,
} from './reducers'
import { loadProjectFromJson } from './reducers/loadProjectFromJson'

const initialState: IFormConstructor = {
  allElementsTree: new Map<string, string[]>(),
  allElementsMap: new Map<string, IFormElement | IGroupElement>(),
  selectedElement: null,
  selectedElementProps: null,
  isGridVisible: true,
  draggableElement: null,
  componentsStructurePanelState: true,
  settingsPanelState: true,
  pages: [{ name: 'Page1', isActive: true, parentId: 'root' }],
  numberOfPages: 1,
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
    setDraggableElement: (state, action: PayloadAction<SetNewElementDraggableElem>) => {
      state.draggableElement = action.payload.element
    },
    loadProjectFromStorage: loadProjectFromStorage,
    loadProjectFromJson: loadProjectFromJson,
    saveProjectToMemmoryStorage: saveProjectToMemmoryStorage,
    saveProjectToFile: saveProjectToFile,
    showGrid: (state, action: PayloadAction<ShowGrid>) => {
      state.isGridVisible = action.payload.isGridVisible
    },
    setSelectedElement: setSelectedElement,
    addNewElement: addNewElement,
    deleteElement: deleteElement,
    togglePanelsByHotkey: togglePanelByHotKey,
    toggleSettingsPanelState: (state, action: PayloadAction<PanelStatePayload>) => {
      state.settingsPanelState = !state.settingsPanelState
    },
    toggleComponentsStructurePanel: (state, action: PayloadAction<PanelStatePayload>) => {
      state.componentsStructurePanelState = !state.componentsStructurePanelState
    },
    addNewPage: addNewPage,
    changeActivePage: changeActivePage,
    closePage: closePage,
  },
})

export const formConstructorReducer = formConstructorSlice.reducer

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
