import { IFormConstructor, IFormElement, IGroupElement } from './types'
import {
  createSlice,
  SliceCaseReducers,
  PayloadAction,
  ValidateSliceCaseReducers,
} from '@reduxjs/toolkit'
import { HistoryAction, SetNewElementDraggableElem, ShowGrid } from './payload'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '..'
import { HistoryList } from '../../utils'
import {
  addNewElement,
  deleteElement,
  saveProjectToFile,
  saveProjectToMemmoryStorage,
  setHistoryBackState,
  setSelectedElement,
  togglePanelByHotKey,
} from './reducers'
import { loadProjectFromStorage } from './reducers/loadProjectFromStorage'
import { loadProjectFromJson } from './reducers/loadProjectFromJson'

export const maxHistorySize = 40
export const emptyHistory = new HistoryList<HistoryAction>({
  maxSize: maxHistorySize,
  size: 0,
  tail: null,
  head: null,
})

const initialState: IFormConstructor = {
  allElementsTree: new Map<string, string[]>(),
  allElementsMap: new Map<string, IFormElement | IGroupElement>(),
  selectedElement: null,
  selectedElementProps: null,
  isGridVisible: true,
  draggableElement: null,
  componentsStructurePanelState: true,
  settingsPanelState: true,
  history: emptyHistory,
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
    loadProjectFromStorage: loadProjectFromStorage,
    loadProjectFromJson: loadProjectFromJson,
    saveProjectToMemmoryStorage: saveProjectToMemmoryStorage,
    setHistoryBackState: setHistoryBackState,
    addNewElement: addNewElement,
    deleteElement: deleteElement,
    togglePanelsByHotkey: togglePanelByHotKey,
    saveProjectToFile: saveProjectToFile,
    setSelectedElement: setSelectedElement,

    setDraggableElement: (state, action: PayloadAction<SetNewElementDraggableElem>) => {
      state.draggableElement = action.payload.element
    },
    showGrid: (state, action: PayloadAction<ShowGrid>) => {
      state.isGridVisible = action.payload.isGridVisible
    },
    toggleSettingsPanelState: state => {
      state.settingsPanelState = !state.settingsPanelState
    },
    toggleComponentsStructurePanel: state => {
      state.componentsStructurePanelState = !state.componentsStructurePanelState
    },
  },
})

export const formConstructorReducer = formConstructorSlice.reducer

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
