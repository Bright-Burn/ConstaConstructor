import type {
  AllElementTypes,
  FormInstance,
  IFormConstructor,
  IFormElement,
  IGroupElement,
  ViewInfo,
} from '../../coreTypes'
import type { Values } from '../../utils'
import type { IBaseComponent } from '../baseComponentsItems'

export const ProjectSaveWays = {
  STORAGE: 'STORAGE',
  FILE: 'FILE',
  HTML: 'HTML',
} as const

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type ProjectSaveWays = Values<typeof ProjectSaveWays>

interface ProjectData {
  project: FormConstructorToSave
  name: string
  description: string
}

export interface SaveProjectIntent extends ProjectData {
  saveWay: ProjectSaveWays
}

export type SaveBaseComponentIntent = {
  fileName: string
  viewsToSave: (IFormElement | IGroupElement)[]
  instancesToSave: FormInstance<AllElementTypes>[]
  viewInfosToSave: ViewInfo[]
}

/**
 * Тип старых макетов
 */
export type FormConstructorToSave_Deprecated = Pick<
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

/**
 * Тип для сохранения и загрузки проекта
 */
export type FormConstructorToSave = Pick<
  IFormConstructor,
  'instanceManager' | 'numberOfPages' | 'pages' | 'selectedPageId'
> & {
  // Временное поле, пока осуществляется переход на новые тип пропсов
  projectVersion: string
  views: (IFormElement | IGroupElement)[]
  instances: FormInstance<AllElementTypes>[]
  viewInfos: ViewInfo[]
}

/**
 * Тип для сохранения и загрузки базового компонента
 */
export type BaseComponentToSave = Pick<
  IBaseComponent,
  'id' | 'name' | 'description' | 'viewInfos' | 'instances' | 'views'
>