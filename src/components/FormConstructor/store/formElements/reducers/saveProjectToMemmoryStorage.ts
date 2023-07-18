import { PayloadAction } from '@reduxjs/toolkit'
import { ProjectSaveWays, SaveProjectIntent, saveProjectData } from '../../../projectSaveLoad'
import { SaveNewProject } from '../payload'
import { IFormConstructor } from '../types'

export const saveProjectToMemmoryStorage = (
  state: IFormConstructor,
  action: PayloadAction<SaveNewProject>,
) => {
  const intent: SaveProjectIntent = {
    description: action.payload.description,
    name: action.payload.name,
    saveWay: ProjectSaveWays.STORAGE,
    project: state,
  }
  saveProjectData(intent)
  //это просто экшн
}
