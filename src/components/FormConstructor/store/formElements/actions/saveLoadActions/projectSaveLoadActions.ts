import type { IFormConstructor } from '../../../../coreTypes'
import type { FormConstructorToSave, SaveProjectIntent } from '../../../../projectSaveLoad'
import { ProjectSaveWays, saveProjectData } from '../../../../projectSaveLoad'
import type { AppDispatch, RootState } from '../../../setupStore'
import { ViewerSlice } from '../../../Viewer'
import {
  instanceAdapter,
  selectInstanceAll,
  selectViewAll,
  selectViewInfoAll,
  viewAdapter,
  viewInfoAdapter,
} from '../../adapters'
import { formConstructorSlice } from '../../formElementsSlice'
import type { SaveNewProject } from '../payloads'

export const loadProjectFromFile = (project: FormConstructorToSave) => (dispatch: AppDispatch) => {
  dispatch(formConstructorSlice.actions.repalceState(formConstructorSaveToState(project)))
}

export const loadProjectFromStorage =
  (project: FormConstructorToSave) => (dispatch: AppDispatch) => {
    dispatch(formConstructorSlice.actions.repalceState(formConstructorSaveToState(project)))
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
  const views = selectViewAll(state)
  const instances = selectInstanceAll(state)
  const viewInfos = selectViewInfoAll(state)
  const formConstructor = state.formConstructor
  const toSave: FormConstructorToSave = {
    instanceManager: formConstructor.instanceManager,
    numberOfPages: formConstructor.numberOfPages,
    pages: formConstructor.pages,
    selectedPageId: formConstructor.selectedPageId,
    allElements: views,
    elementInstances: instances,
    viewInfos,
  }

  return toSave
}

/**
 * Формирует текущее состояние из сохраненного объекта
 */
const formConstructorSaveToState = (save: FormConstructorToSave): IFormConstructor => {
  const allElements = viewAdapter.getInitialState()
  const elementInstances = instanceAdapter.getInitialState()
  const viewInfos = viewInfoAdapter.getInitialState()

  const newAllElements = viewAdapter.addMany(allElements, save.allElements)
  const newElementInstances = instanceAdapter.addMany(elementInstances, save.elementInstances)
  const allNewInfos = viewInfoAdapter.addMany(viewInfos, save.viewInfos)

  const formConstructor: IFormConstructor = {
    ...save,
    history: [],
    views: newAllElements,
    instances: newElementInstances,
    viewInfo: allNewInfos,
    draggableElement: null,
    elementToCopyId: null,
    selectedView: null,
    sameInstanceElementsIds: [],
  }
  return formConstructor
}
