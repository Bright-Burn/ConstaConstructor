import { LayoutProps } from '@consta/uikit/Layout'
import { Props } from '@consta/uikit/Button'

export type ButtonElementProps = Props
export type LayoutElementProps = LayoutProps

/// По мере расширения сюда подем дописывать новые объединения
export type UnionProps = ButtonElementProps | LayoutElementProps

export enum ElementTypes {
  Layout = 'Layout',
  FormElement = 'FormElement',
}

export enum FormElementTypes {
  Button = 'Button',
}

export interface ILayoutElement {
  id: string
  childrenFromElements: IFormElement[]
  childrenLayoutElements: ILayoutElement[]
}

export interface ILayoutElementWithProps extends ILayoutElement {
  props: LayoutElementProps
}

export interface IFormElement {
  id: string
  type: FormElementTypes
}

export interface IFormElementButton extends IFormElement {
  props: ButtonElementProps
}

// По мере добавление новых элементов сюда будем добавлять новые объединения
export type FormElementUnion = IFormElementButton

export interface ISelectedElement {
  elementId: string
  elemntType: ElementTypes
  formElementType?: FormElementTypes
}

export interface IFormConstructor {
  allElementsTree: Map<string, (ILayoutElement | IFormElement)[]>
  allElementsMap: Map<string, ILayoutElement | IFormElement>
  selectedElement: ISelectedElement | null
}
