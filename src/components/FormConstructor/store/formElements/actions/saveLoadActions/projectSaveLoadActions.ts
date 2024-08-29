import type { FormConstructorToSave, SaveProjectIntent } from '../../../../projectSaveLoad'
import { ProjectSaveWays, saveProjectData } from '../../../../projectSaveLoad'
import type { AppDispatch, RootState } from '../../../setupStore'
import { ViewerSlice } from '../../../Viewer'
import { formConstructorSlice } from '../../formElementsSlice'
import type { SaveNewProject } from '../payloads'

import { formConstructorSaveToState, formConstructorToSave } from './saveAdapters'

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
