import type { AllElementTypes, FormInstance, IFormElement, IGroupElement } from '../../coreTypes'

export interface IBaseComponent {
  id: string
  name: string
  description: string
  childrenElementList: (IFormElement | IGroupElement)[]
  instances: FormInstance<AllElementTypes>[]
}

export interface IBaseComponentsItems {
  baseComponents: IBaseComponent[]
  draggableBaseComponent: IBaseComponent | null
}
