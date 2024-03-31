import type { IFormElement, IGroupElement } from '../../coreTypes'

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
