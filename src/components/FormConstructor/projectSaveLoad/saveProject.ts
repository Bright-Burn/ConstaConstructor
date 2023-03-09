import { IFormConstructor } from '../store/formElements/types'
import { saveToFile } from '../utils'
import {
  IFormConstructorSerializable,
  ProjectDataSerializable,
  ProjectSaveWays,
  SaveProjectIntent,
} from './types'

export const saveProject = (saveIntent: SaveProjectIntent) => {
  const projData: ProjectDataSerializable = {
    project: projectToSerilizable(saveIntent.project),
    description: saveIntent.description,
    name: saveIntent.name,
  }
  switch (saveIntent.saveWay) {
    case ProjectSaveWays.STORAGE:
      saveToStorage(projData)
      break
    case ProjectSaveWays.FILE:
      saveFile(projData)
      break
  }
}

const saveToStorage = (data: ProjectDataSerializable) => {
  localStorage.setItem(data.name, JSON.stringify(data))
}

const saveFile = (projData: ProjectDataSerializable) => {
  const fileData = JSON.stringify(projData)
  saveToFile(fileData, `${projData.name}_ConstaConstructor.json`)
}

export const projectToSerilizable = (proj: IFormConstructor): IFormConstructorSerializable => {
  return {
    ...proj,
    allElementsMap: JSON.stringify(Array.from(proj.allElementsMap.entries())),
    allElementsTree: JSON.stringify(Array.from(proj.allElementsTree.entries())),
  }
}

export const projectFromSerilizable = (proj: IFormConstructorSerializable): IFormConstructor => {
  return {
    ...proj,
    allElementsMap: new Map(JSON.parse(proj.allElementsMap)),
    allElementsTree: new Map(JSON.parse(proj.allElementsTree)),
  }
}
