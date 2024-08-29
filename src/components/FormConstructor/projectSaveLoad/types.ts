import type {
  AllElementTypes,
  FormInstance,
  IFormConstructor,
  IFormElement,
  IGroupElement,
  ViewInfo,
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
export type FormConstructorToSave = Pick<
  IFormConstructor,
  'instanceManager' | 'numberOfPages' | 'pages' | 'selectedPageId'
> & {
  /*Сохраняем списком*/
  allElements: (IFormElement | IGroupElement)[]
  /*Сохраняем списком*/
  elementInstances: FormInstance<AllElementTypes>[]
  /*Сохраняем списом*/
  viewInfos: ViewInfo[]
}
