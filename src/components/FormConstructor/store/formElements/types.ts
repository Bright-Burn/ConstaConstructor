import { Props } from '@consta/uikit/Button'
import { LayoutElementPropsStyles } from './layoutTypes'

export type ButtonElementProps = Props

// Существует два типа элементов, элементы формы и группирующие панели
// например Layout - пока только один, но если в консте будет что еще группирующие, то будем расширять FormGroupsType
export enum ElementTypes {
  FormGroups = 'FormGroups',
  FormElement = 'FormElement',
}

// Виды группирующих панелей
export enum FormGroupsTypes {
  LayoutInner = 'LayoutInner',
  LayoutOuter = 'LayoutOuter',
}

// Виды обычных элементов формы ввода
export enum FormElementTypes {
  Button = 'Button',
}

export interface IGroupElement {
  id: string
  parentId: string
  type: FormGroupsTypes
  props: GroupElementProps
}

export interface ILayoutElement extends IGroupElement {
  props: LayoutElementPropsStyles
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
export type GroupElementProps = LayoutElementPropsStyles

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
  allElementsMap: Map<string, IGroupElement | IFormElement>
  selectedElement: ISelectedElement | null
  selectedElementProps: UnionProps | null
  isGridVisible: boolean
}
