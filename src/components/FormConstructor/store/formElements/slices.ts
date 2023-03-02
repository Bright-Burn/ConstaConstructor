import {
  FormElementUnion,
  GroupElementUnion,
  IFormConstructor,
  IFormElement,
  ILayoutElement,
} from './types'
import {
  createSlice,
  SliceCaseReducers,
  PayloadAction,
  ValidateSliceCaseReducers,
} from '@reduxjs/toolkit'
import {
  AddNewElementPayload,
  DeleteElementPayload,
  LoadProjectFromFile,
  LoadProjectFromStorage,
  SaveNewProject,
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

const initialState: IFormConstructor = {
  allElementsTree: new Map<string, string[]>(),
  allElementsMap: new Map<string, ILayoutElement | IFormElement>(),
  selectedElement: null,
  selectedElementProps: null,
  isGridVisible: true,
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
        console.log(projectJson)
        const newSate = projectFromSerilizable(projectSerilizable.project)
        state.allElementsMap = newSate.allElementsMap
        state.allElementsTree = newSate.allElementsTree
        state.isGridVisible = newSate.isGridVisible
        state.selectedElement = newSate.selectedElement
        state.selectedElementProps = newSate.selectedElementProps
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
      const element = state.allElementsMap.get(action.payload.elementId)
      if (element) {
        const newProps = action.payload.newProps

        if (newProps) {
          element.props = newProps
        }

        state.selectedElementProps = (element as FormElementUnion | GroupElementUnion).props
        state.selectedElement = {
          ...action.payload,
        }

        const newAllelementMap = new Map<string, ILayoutElement | IFormElement>(
          state.allElementsMap,
        )
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

      const newAllelementMap = new Map<string, ILayoutElement | IFormElement>(state.allElementsMap)
      newAllelementMap.set(element.id, element)
      state.allElementsMap = newAllelementMap
    },
    deleteElement: (state, action: PayloadAction<DeleteElementPayload>) => {
      const elementId = action.payload.elementId
      state.allElementsMap.delete(elementId)
    },
  },
})

export const formConstructorReducer = formConstructorSlice.reducer

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
