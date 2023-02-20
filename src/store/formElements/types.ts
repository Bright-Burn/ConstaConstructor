export enum FormElementEnum {
  Layout = 'Layout',
  Button = 'Button',
}

export interface IFormElementHolder {
  childrenFromElements: IFormElement[]
  childrenLayoutElements: ILayoutElement[]
}

export interface IFormElement {
  id: string
  selected: boolean
}

export interface ILayoutElement extends IFormElement {}
export interface IButtonElement extends IFormElement {}

export interface IFormConstructor {
  allElementsMap: Map<string, IFormElementHolder>
  selectedFormElement: string
}
