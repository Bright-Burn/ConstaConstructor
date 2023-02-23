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
  type: FormElementTypes
}

export interface IFormConstructor {
  allElementsMap: Map<string, (ILayoutElement | IFormElement)[]>
  selectedElementId: string
}
