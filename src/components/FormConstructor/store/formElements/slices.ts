import { IFormConstructor, IFormElement, IGroupElement } from './types'
import {
  createSlice,
  SliceCaseReducers,
  PayloadAction,
  ValidateSliceCaseReducers,
} from '@reduxjs/toolkit'
import {
  AddNewElementPayload,
  ChangePages,
  DeleteElementPayload,
  LoadProjectFromFile,
  LoadProjectFromStorage,
  PanelStatePayload,
  SaveNewProject,
  SetNewElementDraggableElem,
  SetNewSelectedElement,
  ShowGrid,
} from './payload'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '..'
import {
  projectFromSerilizable,
  ProjectSaveWays,
  saveProjectData,
  SaveProjectIntent,
} from '../../projectSaveLoad'
import { ProjectDataSerializable } from '../../projectSaveLoad/types'
import { deleteButtonActions, deleteElementFromTree } from './utils'

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
    loadProjectFromStorage: (state, action: PayloadAction<LoadProjectFromStorage>) => {
      const projectJson = localStorage.getItem(action.payload.name)
      if (projectJson) {
        const projectSerilizable: ProjectDataSerializable = {
          ...JSON.parse(projectJson),
        }
        const newSate = projectFromSerilizable(projectSerilizable.project)
        state.allElementsMap = newSate.allElementsMap
        state.allElementsTree = newSate.allElementsTree
        state.isGridVisible = newSate.isGridVisible
        state.selectedElement = newSate.selectedElement
        state.selectedElementProps = newSate.selectedElementProps
      }
    },
    loadProjectFromJson: (state, action: PayloadAction<LoadProjectFromFile>) => {
      const projectJson = action.payload.projectJson
      if (projectJson) {
        const projectSerilizable: ProjectDataSerializable = {
          ...JSON.parse(projectJson as string),
        }
        const newSate = projectFromSerilizable(projectSerilizable.project)
        state.allElementsMap = newSate.allElementsMap
        state.allElementsTree = newSate.allElementsTree
        state.isGridVisible = newSate.isGridVisible
        state.selectedElement = newSate.selectedElement
        state.selectedElementProps = newSate.selectedElementProps
        state.pages = newSate.pages
        state.numberOfPages = newSate.numberOfPages
      }
    },
    saveProjectToMemmoryStorage: (state, action: PayloadAction<SaveNewProject>) => {
      const intent: SaveProjectIntent = {
        description: action.payload.description,
        name: action.payload.name,
        saveWay: ProjectSaveWays.STORAGE,
        project: state,
      }
      saveProjectData(intent)
    },
    saveProjectToFile: (state, action: PayloadAction<SaveNewProject>) => {
      const intent: SaveProjectIntent = {
        description: action.payload.description,
        name: action.payload.name,
        saveWay: ProjectSaveWays.FILE,
        project: state,
      }
      saveProjectData(intent)
    },
    showGrid: (state, action: PayloadAction<ShowGrid>) => {
      state.isGridVisible = action.payload.isGridVisible
    },
    setSelectedElement: (state, action: PayloadAction<SetNewSelectedElement>) => {
      if (!action.payload) {
        state.selectedElementProps = null
        state.selectedElement = null
        return
      }
      const element = state.allElementsMap.get(action.payload.elementId)
      if (element) {
        const newProps = action.payload.newProps

        if (newProps) {
          element.props = newProps
        }

        state.selectedElementProps = (element as IFormElement | IGroupElement).props
        state.selectedElement = {
          ...action.payload,
        }

        const newAllelementMap = new Map<string, IFormElement | IGroupElement>(state.allElementsMap)
        state.allElementsMap = newAllelementMap
        newAllelementMap.set(element.id, element)
      }
    },
    addNewElement: (state, action: PayloadAction<AddNewElementPayload>) => {
      const element = action.payload.element
      const newTreeMap = new Map<string, string[]>(state.allElementsTree)
      newTreeMap.set(action.payload.parent, [
        ...(newTreeMap.get(action.payload.parent) || []),
        element.id,
      ])
      state.allElementsTree = newTreeMap

      const newAllelementMap = new Map<string, IFormElement | IGroupElement>(state.allElementsMap)
      newAllelementMap.set(element.id, element)
      state.allElementsMap = newAllelementMap
    },
    deleteElement: (state, action: PayloadAction<DeleteElementPayload>) => {
      const elementId = action.payload.elementId
      deleteButtonActions(elementId, state)
      deleteElementFromTree(elementId, state)
    },
    togglePanelsByHotkey: (state: PanelStatePayload) => {
      if (
        (state.componentsStructurePanelState === true && state.settingsPanelState === false) ||
        (state.componentsStructurePanelState === false && state.settingsPanelState) ||
        (state.componentsStructurePanelState === true && state.settingsPanelState)
      ) {
        state.componentsStructurePanelState = false
        state.settingsPanelState = false
      } else if (
        state.componentsStructurePanelState === false &&
        state.settingsPanelState === false
      ) {
        state.componentsStructurePanelState = true
        state.settingsPanelState = true
      }
    },
    toggleSettingsPanelState: (state, action: PayloadAction<PanelStatePayload>) => {
      state.settingsPanelState = !state.settingsPanelState
    },
    toggleComponentsStructurePanel: (state, action: PayloadAction<PanelStatePayload>) => {
      state.componentsStructurePanelState = !state.componentsStructurePanelState
    },
    addNewPage: state => {
      state.pages = [
        ...state.pages,
        {
          name: `Page${state.numberOfPages + 1}`,
          isActive: false,
          parentId: `Page${state.numberOfPages + 1}`,
        },
      ]
      state.numberOfPages = state.numberOfPages + 1
    },
    changeActivePage: (state, action: PayloadAction<ChangePages>) => {
      state.pages = state.pages.map((page, i) => {
        return {
          name: page.name,
          isActive: i === action.payload.index,
          parentId: page.parentId,
        }
      })
    },
    closePage: (state, action: PayloadAction<ChangePages>) => {
      state.pages = state.pages
        .filter((page, i) => i !== action.payload.index)
        .map((page, i) => {
          return {
            name: page.name,
            isActive: i === action.payload.index,
            parentId: page.parentId,
          }
        })
    },
  },
})

export const formConstructorReducer = formConstructorSlice.reducer

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
