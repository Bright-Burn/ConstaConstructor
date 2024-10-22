import type {
  AllElementTypes,
  FormInstance,
  IFormElement,
  IGroupElement,
  ViewInfo,
} from '../../coreTypes'

export type IBaseComponent = {
  id: string
  name: string
  description: string
  views: (IFormElement | IGroupElement)[]
  instances: FormInstance<AllElementTypes>[]
  viewInfos: ViewInfo[]
}

export interface IBaseComponentsItems {
  baseComponents: IBaseComponent[]
  draggableBaseComponent: IBaseComponent | null
}
