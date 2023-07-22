import { IFormElement, IGroupElement } from '../formElements'

export interface IBaseComponent {
  id: string
  name: string
  description: string
  childrenElementList: (IFormElement | IGroupElement)[]
}

export interface IBaseComponentsItems {
  baseComponents: IBaseComponent[]
  draggableBaseComponent: IBaseComponent | null
}
