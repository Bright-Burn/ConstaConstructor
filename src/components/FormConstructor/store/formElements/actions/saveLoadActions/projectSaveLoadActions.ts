import { JsonHelper } from '../../../../../../helpers'
import type { FormConstructorToSave, SaveProjectIntent } from '../../../projectSaveLoad'
import {
  formConstructorSaveToState,
  formConstructorToSave,
  parseProjectString,
  ProjectSaveWays,
  saveProject,
} from '../../../projectSaveLoad'
import type { AppDispatch, RootState } from '../../../setupStore'
import { ViewerSlice } from '../../../Viewer'
import { formConstructorSlice } from '../../formElementsSlice'
import type { SaveNewProject } from '../payloads'

export const loadProjectFromString = (json: string) => (dispatch: AppDispatch) => {
  const project = parseProjectString(json)
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
    saveProject(intent)
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
    saveProject(intent)
  }
