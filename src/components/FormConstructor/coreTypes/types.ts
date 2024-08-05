import type { EntityState } from '@reduxjs/toolkit'

import type { Values } from '../utils'

import type { IFormElementAvatar } from './avatartTypes'
import type { IFormElementBadge } from './badgeTypes'
import type { BaseTypes } from './basePropsTypes'
import type { IFormElementBreadcrumbs } from './BreadcrumbsTypes'
import type { IButtonActionElement, IFormElementButton } from './buttonTypes'
import type { BrandCardElementPropsStyles } from './cardTypes'
import type { IFormElementCheckbox } from './checkboxTypes'
import type { IFormElementChoiceGroup } from './ChoiceGroupTypes'
import type { IFormElementComboBox } from './comboBoxTypes'
import type { IFormElementDataTime } from './dataTimeTypes'
import type { IFormElementDatePicker } from './datePickerTypes'
import type { FormInstance, InstanceManager, UnionProps } from './formInstance'
import type { IFormElementIcon } from './iconTypes'
import type { IFormElementInformer } from './informerTypes'
import type { BrandLayoutElementPropsStyles } from './layoutTypes'
import type { IFormElementList } from './ListTypes'
import type { IFormElementRadioButton } from './radioButtonTypes'
import type { IFormElementSelect } from './selectTypes'
import type { IFormElementSwitch } from './SwitchTypes'
import type { IFormElementTabs } from './tabsTypes'
import type { IFormElementTagProps } from './tagTypes'
import type { IFormElementTextField } from './textFieldTypes'
import type { IFormElementText } from './textTypes'
import type { IFormElementUser } from './userTypes'

// Существует два типа элементов, элементы формы и группирующие панели
// например Layout - пока только один, но если в консте будет что еще группирующие, то будем расширять FormGroupsType
export const ElementTypes = {
  FormGroups: 'FormGroups',
  FormElement: 'FormElement',
} as const

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type ElementTypes = Values<typeof ElementTypes>

// Виды группирующих панелей
export const FormGroupsDictTypes = {
  Layout: 'Layout',
  Card: 'Card',
  ButtonModal: 'ButtonModal',
} as const

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type FormGroupsTypes = Values<typeof FormGroupsDictTypes>

// Виды обычных элементов формы ввода
export const FormElementDictTypes = {
  Avatar: 'Avatar',
  AvatarGroup: 'AvatarGroup',
  Button: 'Button',
  Badge: 'Badge',
  Tabs: 'Tabs',
  Informer: 'Informer',
  Checkbox: 'Checkbox',
  Text: 'Text',
  TextField: 'TextField',
  List: 'List',
  RadioButton: 'RadioButton',
  Switch: 'Switch',
  DatePicker: 'DatePicker',
  ComboBox: 'ComboBox',
  Select: 'SelectForm',
  DataTime: 'DataTime',
  BreadcrumbsForm: 'BreadcrumbsFormElement',
  User: 'User',
  Icon: 'Icon',
  Tag: 'Tag',
  ChoiceGroup: 'ChoiceGroup',
} as const

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type FormElementTypes = Values<typeof FormElementDictTypes>

export type ILayoutElement = OmitInstanceId<
  IGroupElement & {
    props: BrandLayoutElementPropsStyles
  }
>

export type IGroupElement<T extends FormGroupsTypes = FormGroupsTypes> = IUnion & {
  id: string
  instanceId: string
  parentId?: string
  type: T
  isOuter: boolean
}
export type IFormElement<T extends FormElementTypes = FormElementTypes> = IUnion & {
  id: string
  parentId?: string
  type: T
  instanceId: string
}

export type OmitInstanceId<T> = Omit<T, 'instanceId'>

export interface IUnion {
  id: string
  type: FormElementTypes | FormGroupsTypes
  order: number
}

export type ICardElement = OmitInstanceId<
  IGroupElement & {
    props: BrandCardElementPropsStyles
  }
>

export type AllElementTypes = FormElementTypes | FormGroupsTypes

// export type AllElementProps = FormElementProps | GroupElementProps

export type BrandProps<T, ElementTypes extends AllElementTypes> = {
  type: ElementTypes
  props: T
}

export type ConcreteSelectedElement<ElementTypes extends AllElementTypes> = {
  elementId: string
  elementType: ElementTypes
}

// По мере добавление новых обычных элементов формы сюда будем добавлять новые объединения
export type FormElementUnion =
  | IFormElementButton
  | IFormElementBadge
  | IFormElementText
  | IFormElementInformer
  | IFormElementCheckbox
  | IFormElementTabs
  | IFormElementTextField
  | IFormElementList
  | IFormElementRadioButton
  | IFormElementSwitch
  | IFormElementDatePicker
  | IFormElementComboBox
  | IFormElementSelect
  | IFormElementDataTime
  | IFormElementBreadcrumbs
  | IFormElementUser
  | IFormElementIcon
  | IFormElementTagProps
  | IFormElementChoiceGroup
  | IFormElementAvatar

// По мере добавление новых группирующих элементов сюда будем добавлять новые объединения
export type GroupElementUnion = ILayoutElement | ICardElement | IButtonActionElement

// /// По мере расширения сюда подем дописывать новые объединения
// export type UnionProps = FormElementProps | GroupElementProps
export interface BaseProps {
  className: string
  baseProps: BaseTypes
}

export interface ISelectedElement {
  elementId: string
  elementType: AllElementTypes
}

export interface IPageOfLayout {
  id: string
  name: string
}

export type DraggbleElement<T extends IFormElement | IGroupElement> = OmitInstanceId<T> & {
  props: UnionProps
}

export interface IFormConstructor extends IHistory {
  allElements: EntityState<IFormElement | IGroupElement>
  elementInstances: EntityState<FormInstance<AllElementTypes>>
  instanceManager: InstanceManager
  selectedElement: ISelectedElement | null
  draggableElement: DraggbleElement<IFormElement | IGroupElement> | null

  pages: IPageOfLayout[]
  numberOfPages: number
  selectedPageId: string
}

//TODO определить ипнтерфейс
interface IHistory {
  history: any
}

export type DeepWriteable<T> = { -readonly [P in keyof T]: DeepWriteable<T[P]> }
