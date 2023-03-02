import { IFormConstructor } from '../store/formElements/types'
import {
  IFormConstructorSerializable,
  ProjectDataSerializable,
  ProjectSaveWays,
  SaveProjectIntent,
} from './types'

export const saveProject = (saveIntent: SaveProjectIntent) => {
  switch (saveIntent.saveWay) {
    case ProjectSaveWays.STORAGE:
      saveToStorage(saveIntent)
      break
  }
}

const saveToStorage = (saveIntent: SaveProjectIntent) => {
  const projData: ProjectDataSerializable = {
    project: projectToSerilizable(saveIntent.project),
    description: saveIntent.description,
    name: saveIntent.name,
  }
  localStorage.setItem(saveIntent.name, JSON.stringify(projData))
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
