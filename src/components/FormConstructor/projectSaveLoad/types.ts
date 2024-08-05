import type {
  AllElementTypes,
  FormInstance,
  IFormConstructor,
  IFormElement,
  IGroupElement,
} from '../coreTypes'
import type { Values } from '../utils'

/// По мере расширения сопсобов сохранения, будет дополнять объект

export const ProjectSaveWays = {
  STORAGE: 'STORAGE',
  FILE: 'FILE',
  HTML: 'HTML',
} as const

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type ProjectSaveWays = Values<typeof ProjectSaveWays>

export interface ProjectData {
  project: FormConstructorToSave
  name: string
  description: string
}

export interface SaveProjectIntent extends ProjectData {
  saveWay: ProjectSaveWays
}

/**
 * Тип для сохранения и загрузки проекта
 */
export type FormConstructorToSave = Omit<
  IFormConstructor,
  'allElements' | 'elementInstances' | 'history' | 'selectedElement' | 'draggableElement'
> & {
  /*Сохраняем списком*/
  allElements: (IFormElement | IGroupElement)[]
  /*Сохраняем списком*/
  elementInstances: FormInstance<AllElementTypes>[]
}
