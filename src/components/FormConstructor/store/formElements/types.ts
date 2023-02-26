import { Props } from '@consta/uikit/Button'
import {
  LayoutPropDirection,
  LayoutPropHorizontalAlign,
  LayoutPropVerticalAlign,
} from '@consta/uikit/Layout'

export type ButtonElementProps = Props

// Нет возможности использовать тип импортированный из консты, как это сделано с типом ButtonElementProps, так как нет возможности создать State, содержащий поле типа HTMLElement
// В будущем решим эту проблему, пока что описал вручную
export type LayoutElementProps = {
  flex?: number | 'none'
  fixed?: boolean
  verticalAlign?: LayoutPropVerticalAlign
  horizontalAlign?: LayoutPropHorizontalAlign
  direction?: LayoutPropDirection
}

// Существует два типа элементов, элементы формы и группирующие панели
// например Layout - пока только один, но если в консте будет что еще группирующие, то будем расширять FormGroupsType
export enum ElementTypes {
  FormGroups = 'FormGroups',
  FormElement = 'FormElement',
}

// Виды группирующих панелей
export enum FormGroupsTypes {
  Layout = 'Layout',
}

// Виды обычных элементов формы ввода
export enum FormElementTypes {
  Button = 'Button',
}

// Нужно такое предстваление в utils, в будущем можно будет переделать
export const FormElementArray = [FormElementTypes.Button]

export interface IGroupElement {
  parentId: string
  type: FormGroupsTypes
  props: GroupElementProps
}

export interface ILayoutElement extends IGroupElement {
  id: string
  props: LayoutElementProps
}

export interface IFormElement {
  id: string
  type: FormElementTypes
  props: FormElementProps
}

export interface IFormElementButton extends IFormElement {
  props: ButtonElementProps
}

// Все Union пропсы для FormElement
export type FormElementProps = ButtonElementProps

// Все Union пропсы для GropElement
export type GroupElementProps = LayoutElementProps

// По мере добавление новых обычных элементов формы сюда будем добавлять новые объединения
export type FormElementUnion = IFormElementButton

// По мере добавление новых группирующих элементов сюда будем добавлять новые объединения
export type GroupElementUnion = ILayoutElement

/// По мере расширения сюда подем дописывать новые объединения
export type UnionProps = FormElementProps | GroupElementProps

export interface ISelectedElement {
  elementId: string
  elementType: FormGroupsTypes | FormElementTypes
}

export interface IFormConstructor {
  allElementsTree: Map<string, string[]>
  allElementsMap: Map<string, ILayoutElement | IFormElement>
  selectedElement: ISelectedElement | null
  selectedElementProps: UnionProps | null
}
