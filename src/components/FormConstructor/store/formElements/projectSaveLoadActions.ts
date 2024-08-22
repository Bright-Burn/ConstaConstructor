import type { IFormConstructor } from '../../coreTypes'
import type { FormConstructorToSave, SaveProjectIntent } from '../../projectSaveLoad'
import { ProjectSaveWays, saveProjectData } from '../../projectSaveLoad'
import type { AppDispatch, RootState } from '../setupStore'
import { ViewerSlice } from '../Viewer'

import { formConstructorSlice } from './formElementsSlice'
import { selectAllInstances } from './formInstanceSelectors'
import { formInstanceAdapter } from './formInstanseAdapter'
import { layuoutAdapter } from './initialState'
import { selectAll } from './layoutAdapterSelectors'
import type { SaveNewProject } from './payload'

export const loadProjectFromFile = (project: FormConstructorToSave) => (dispatch: AppDispatch) => {
  dispatch(formConstructorSlice.actions.loadProjectFromJson(formConstructorSaveToState(project)))
}

export const loadProjectFromStorage =
  (project: FormConstructorToSave) => (dispatch: AppDispatch) => {
    dispatch(formConstructorSlice.actions.loadProjectFromJson(formConstructorSaveToState(project)))
    dispatch(ViewerSlice.actions.showGrid(false))
  }

export const saveProjectToFile =
  (project: SaveNewProject) => (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState()

    const intent: SaveProjectIntent = {
      description: project.description,
      name: project.name,
      saveWay: ProjectSaveWays.FILE,
      project: formConstructorToSave(state),
    }
    saveProjectData(intent)
  }

export const saveProjectToHTML =
  (project: SaveNewProject) => (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState()

    const intent: SaveProjectIntent = {
      description: project.description,
      name: project.name,
      saveWay: ProjectSaveWays.HTML,
      project: formConstructorToSave(state),
    }
    saveProjectData(intent)
  }

/**
 * Формирует объект для сохраенения из текущего состояния
 */
const formConstructorToSave = (state: RootState): FormConstructorToSave => {
  const allElements = selectAll(state)
  const elementInstances = selectAllInstances(state)
  const formConstructor = state.formConstructor
  const toSave: FormConstructorToSave = {
    instanceManager: formConstructor.instanceManager,
    numberOfPages: formConstructor.numberOfPages,
    pages: formConstructor.pages,
    selectedPageId: formConstructor.selectedPageId,
    allElements,
    elementInstances,
  }

  return toSave
}

/**
 * Формирует текущее состояние из сохраненного объекта
 */
const formConstructorSaveToState = (save: FormConstructorToSave): IFormConstructor => {
  const allElements = layuoutAdapter.getInitialState()
  const elementInstances = formInstanceAdapter.getInitialState()

  const newAllElements = layuoutAdapter.addMany(allElements, save.allElements)
  const newElementInstances = formInstanceAdapter.addMany(elementInstances, save.elementInstances)

  const formConstructor: IFormConstructor = {
    ...save,
    history: [],
    allElements: newAllElements,
    elementInstances: newElementInstances,
    draggableElement: null,
    elementToCopyId: null,
    selectedElement: null,
    sameInstanceElementsIds: [],
  }
  return formConstructor
}
