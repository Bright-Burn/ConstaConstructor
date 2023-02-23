import { LayoutProps } from '@consta/uikit/Layout'
import { Props } from '@consta/uikit/Button'

export type ButtonElementProps = Props
export type LayoutElementProps = LayoutProps

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

export interface ISelectedElement {
  elementId: string
  elemntType: ElementTypes
  formElementType?: FormElementTypes
}

export interface IFormConstructor {
  allElementsMap: Map<string, (ILayoutElement | IFormElement)[]>
  selectedElement: ISelectedElement | null
}
