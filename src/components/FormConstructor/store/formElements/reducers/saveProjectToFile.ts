import { PayloadAction } from '@reduxjs/toolkit'
import { ProjectSaveWays, SaveProjectIntent, saveProjectData } from '../../../projectSaveLoad'
import { SaveNewProject } from '../payload'
import { IFormConstructor } from '../types'

export const saveProjectToFile = (
  state: IFormConstructor,
  action: PayloadAction<SaveNewProject>,
) => {
  const intent: SaveProjectIntent = {
    description: action.payload.description,
    name: action.payload.name,
    saveWay: ProjectSaveWays.FILE,
    project: state,
  }
  saveProjectData(intent)
}

