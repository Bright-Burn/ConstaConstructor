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

export type BaseComponentSerializable = Pick<
  IBaseComponent,
  'id' | 'name' | 'description' | 'viewInfos' | 'instances'
> & {
  childrenElementList: (IFormElement | IGroupElement)[]
}

export interface IBaseComponentsItems {
  baseComponents: IBaseComponent[]
  draggableBaseComponent: IBaseComponent | null
}
