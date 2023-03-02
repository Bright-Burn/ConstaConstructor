import { Props } from '@consta/uikit/Button'
import { Props as CardProps } from '@consta/uikit/Card'
import { BaseTypes } from '../../FormConstructorFormBlockConfigure/Panels/Settings/BaseSettings/types'
import { LayoutElementPropsStyles } from './layoutTypes'

export type ButtonElementProps = Props
export type CardElementProps = CardProps

export interface CardElementPropsStyles extends BaseProps { 
  constaProps: CardElementProps
}

export interface ButtonElementPropsStyles extends BaseProps { 
  constaProps: ButtonElementProps
}

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
  Card = 'Card',
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
  props: ButtonElementPropsStyles
}

export interface IFormElementCard extends IFormElement {
  props: CardElementPropsStyles
}

// Все Union пропсы для FormElement
export type FormElementProps = ButtonElementPropsStyles | CardElementPropsStyles

// Все Union пропсы для GropElement
export type GroupElementProps = LayoutElementPropsStyles

// По мере добавление новых обычных элементов формы сюда будем добавлять новые объединения
export type FormElementUnion = IFormElementButton

// По мере добавление новых группирующих элементов сюда будем добавлять новые объединения
export type GroupElementUnion = ILayoutElement

/// По мере расширения сюда подем дописывать новые объединения
export type UnionProps = FormElementProps | GroupElementProps

export interface BaseProps {
  className: string
  baseProps: BaseTypes
}
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
