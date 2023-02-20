export enum ElementTypes {
  Layout = 'Layout',
  Form = 'Form',
}

export enum FormElementTypes {
  Button = 'Button',
}

export interface ILayoutElement {
  id: string
  selected: boolean
  childrenFromElements: IFormElement[]
  childrenLayoutElements: ILayoutElement[]
}

export interface IFormElement {
  id: string
  selected: boolean
  type: FormElementTypes
}

export interface IButtonElement extends IFormElement {}

export interface IFormConstructor {
  allElementsMap: Map<string, (ILayoutElement | IFormElement)[]>
  selectedFormElement: string
}
