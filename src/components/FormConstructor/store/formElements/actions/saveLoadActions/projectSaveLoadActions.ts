import type { SaveProjectIntent } from '../../../projectSaveLoad'
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

export const loadProjectFromStorage = (projectString: string) => (dispatch: AppDispatch) => {
  const savedProject = parseProjectString(projectString)
  dispatch(formConstructorSlice.actions.repalceState(formConstructorSaveToState(savedProject)))
  dispatch(ViewerSlice.actions.showGrid(false))
}

export const saveProjectToFile =
  (project: SaveNewProject) => (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState()

    const intent: SaveProjectIntent = {
      saveWay: ProjectSaveWays.FILE,
      data: {
        name: project.name,
        project: formConstructorToSave(state),
      },
    }
    saveProject(intent)
  }

export const saveProjectToHTML =
  (project: SaveNewProject) => (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState()

    const intent: SaveProjectIntent = {
      saveWay: ProjectSaveWays.HTML,
      data: {
        name: project.name,
        project: formConstructorToSave(state),
      },
    }
    saveProject(intent)
  }
