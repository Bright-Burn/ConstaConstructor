import { IFormConstructor, ISelectedElement, UnionProps } from '../store/formElements/types'

/// По мере расширения сопсобов сохранения, будет дополнять enum
export enum ProjectSaveWays {
  STORAGE = 'STORAGE',
  FILE = 'FILE',
}

export interface ProjectData {
  project: IFormConstructor
  name: string
  description: string
}

export interface IFormConstructorSerializable {
  allElementsTree: string
  allElementsMap: string
  selectedElement: ISelectedElement | null
  selectedElementProps: UnionProps | null
  isGridVisible: boolean
}

export interface ProjectDataSerializable {
  project: IFormConstructorSerializable
  name: string
  description: string
}

export interface SaveProjectIntent extends ProjectData {
  saveWay: ProjectSaveWays
}
