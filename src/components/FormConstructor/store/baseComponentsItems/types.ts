import { IFormElement, IGroupElement } from '../formElements'

export interface IBaseComponent {
  id: string
  name: string
  description: string
  /// поле serializeble, можно превратить в Map для дальнейшего использования
  childParentMap: [string, string][]
  /// поле serializeble, можно превратить в Map для дальнейшего использованияы
  childrenElementList: (IFormElement | IGroupElement)[]
}

export interface IBaseComponentsItems {
  baseComponents: IBaseComponent[]
  draggableBaseComponent: IBaseComponent | null
}
