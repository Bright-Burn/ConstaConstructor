import type {
  AllElementTypes,
  FormInstance,
  IFormElement,
  IGroupElement,
  IPageOfLayout,
  ISelectedElement,
} from '../coreTypes'
import type { Values } from '../utils'

/// По мере расширения сопсобов сохранения, будет дополнять объект

export const ProjectSaveWays = {
  STORAGE: 'STORAGE',
  FILE: 'FILE',
} as const

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type ProjectSaveWays = Values<typeof ProjectSaveWays>

export interface ProjectData {
  project: IFormConstructorToSave & { isGridVisible: boolean }
  name: string
  description: string
}
interface IFormConstructorToSave {
  allElements: (IFormElement | IGroupElement)[]
  elementInstances: FormInstance<AllElementTypes>[]
  selectedElement: ISelectedElement | null

  pages: IPageOfLayout[]
  selectedPageId: string
  numberOfPages: number
}

export interface ProjectDataSerializable {
  project: IFormConstructorToSave
  name: string
  description: string
}

export interface SaveProjectIntent extends ProjectData {
  saveWay: ProjectSaveWays
}
