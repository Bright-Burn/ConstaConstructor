export enum ElementTypes {
  Layout = 'Layout',
  FormElement = 'FormElement',
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

export interface ISelectedElement {
  elementId: string
  elemntType: ElementTypes
  formElementType?: FormElementTypes
}

export interface IFormConstructor {
  allElementsMap: Map<string, (ILayoutElement | IFormElement)[]>
  selectedElement: ISelectedElement | null
}
