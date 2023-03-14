import { Props } from '@consta/uikit/Button'
import { BaseTypes } from '../../FormConstructorFormBlockConfigure/Panels/Settings/BaseSettings/types'
import { CardElementPropsStyles } from './cardTypes'
import { BadgeProps, IFormElementBadge } from './badgeTypes'
import { LayoutElementPropsStyles } from './layoutTypes'
import { IFormElementTabs, TabsElementProps } from './tabsTypes'
import { IFormElementInformer, InformerElementProps } from './informerTypes'
import { CheckboxProps, IFormElementCheckbox } from './checkboxTypes'
import { TextElementProps, IFormElementText } from './textTypes'
import { IFormElementTextField, TextFieldProps } from './textFieldTypes'

export type ButtonElementProps = Props & BaseProps

// Существует два типа элементов, элементы формы и группирующие панели
// например Layout - пока только один, но если в консте будет что еще группирующие, то будем расширять FormGroupsType
export enum ElementTypes {
  FormGroups = 'FormGroups',
  FormElement = 'FormElement',
}

// Виды группирующих панелей
export enum FormGroupsTypes {
  Layout = 'Layout',
  Card = 'Card',
}

// Виды обычных элементов формы ввода
export enum FormElementTypes {
  Button = 'Button',
  Badge = 'Badge',
  Tabs = 'Tabs',
  Informer = 'Informer',
  Checkbox = 'Checkbox',
  Text = 'Text',
  TextField = 'TextField',
  HeaderWithBreadcrumbs = 'HeaderWithBreadcrumbs',
  Placeholder = 'Placeholder',
}

export interface IGroupElement extends IUnion {
  id: string
  type: FormGroupsTypes
  isOuter: boolean
  props: GroupElementProps
}

export interface ILayoutElement extends IGroupElement {
  props: LayoutElementPropsStyles
}

export interface IFormElement extends IUnion {
  id: string
  type: FormElementTypes
  props: FormElementProps
}
export interface IUnion {
  id: string
  type: FormElementTypes | FormGroupsTypes
}
export interface IFormElementButton extends IFormElement {
  props: ButtonElementProps
}

export interface ICardElement extends IGroupElement {
  props: CardElementPropsStyles
}

// Все Union пропсы для FormElement
export type FormElementProps =
  | ButtonElementProps
  | BadgeProps
  | TextElementProps
  | InformerElementProps
  | CheckboxProps
  | TabsElementProps
  | TextFieldProps

// Все Union пропсы для GroupElement
export type GroupElementProps = LayoutElementPropsStyles | CardElementPropsStyles

// По мере добавление новых обычных элементов формы сюда будем добавлять новые объединения
export type FormElementUnion =
  | IFormElementButton
  | IFormElementBadge
  | IFormElementText
  | IFormElementInformer
  | IFormElementCheckbox
  | IFormElementTabs
  | IFormElementTextField

// По мере добавление новых группирующих элементов сюда будем добавлять новые объединения
export type GroupElementUnion = ILayoutElement | ICardElement

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
  draggableElement: IGroupElement | IFormElement | null
}
