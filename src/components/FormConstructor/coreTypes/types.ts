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
import type { IFormElementIcon } from './iconTypes'
import type { IFormElementInformer } from './informerTypes'
import type { BrandLayoutElementPropsStyles } from './layoutTypes'
import type { IFormElementList } from './ListTypes'
import type { IFormElementRadioButton } from './radioButtonTypes'
import type { IFormElementSelect } from './selectTypes'
import type { IFormElementSwitch } from './SwitchTypes'
import type { IFormElementTable } from './tableTypes'
import type { IFormElementTabs } from './tabsTypes'
import type { IFormElementTagProps } from './tagTypes'
import type { IFormElementTextField } from './textFieldTypes'
import type { IFormElementText } from './textTypes'
import type { IFormElementUser } from './userTypes'
import { FormInstance, InstanceManager } from './formInstance'

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
  ProjectGrid: 'ProjectGrid',
  Placeholder: 'Placeholder',
  CardWithBarChart: 'CardWithBarChart',
  Dashboard: 'Dashboard',
  SimpleForm: 'SimpleForm',
  WizardForm: 'WizardForm',
  FooterWithSwitch: 'FooterWithSwitch',
  Table: 'Table',
  List: 'List',
  RadioButton: 'RadioButton',
  Switch: 'Switch',
  DatePicker: 'DatePicker',
  ComboBox: 'ComboBox',
  Select: 'SelectForm',
  DataTime: 'DataTime',
  PrototypeTextElement: 'PrototypeTextElement',
  PrototypeRectangleElement: 'PrototypeRectangleElement',
  BreadcrumbsForm: 'BreadcrumbsFormElement',
  User: 'User',
  Icon: 'Icon',
  Tag: 'Tag',
  ChoiceGroup: 'ChoiceGroup',
} as const

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type FormElementTypes = Values<typeof FormElementDictTypes>

// export interface IGroupElement extends IUnion {
//   id: string
//   parentId?: string
//   type: FormGroupsTypes
//   isOuter: boolean
//   props: GroupElementProps
// }

export interface ILayoutElement extends IGroupElement {
  props: BrandLayoutElementPropsStyles
}

type emptyObj = Record<string, never>
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

export interface IUnion {
  id: string
  type: FormElementTypes | FormGroupsTypes
  order: number
}

export interface ICardElement extends IGroupElement {
  props: BrandCardElementPropsStyles
}

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

// Все Union пропсы для FormElement
// export type FormElementProps = IFormElement['props']
// export type FormElementProps =
//   | BrandButtonProps
//   | BrandBadgeProps
//   | BrandTextElementProps
//   | BrandInformerElementProps
//   | BrandCheckboxProps
//   | BrandTabsElementProps
//   | BrandTextFieldProps
//   | BrandTableProps
//   | BrandListProps
//   | BrandRadioButtonProps
//   | BrandSwitchProps
//   | BrandDatePickerProps
//   | BrandComboboxProps
//   | BrandSelectProps
//   | BrandDataTimeProps
//   | BrandPrototypeTextProps
//   | BrandPrototypeRectangleProps
//   | BrandBreadcrumbsProps
//   | BrandUserProps
//   | BrandIconProps
//   | BrandTagProps
//   | BrandOwnChoiceGroupProps
//   | BrandPlaceholderProps

// Все Union пропсы для GroupElement
// export type GroupElementProps = IGroupElement['props']
// export type GroupElementProps =
//   | BrandLayoutElementPropsStyles
//   | BrandCardElementPropsStyles
//   | BrandButtonGroupProps

// По мере добавление новых обычных элементов формы сюда будем добавлять новые объединения
export type FormElementUnion =
  | IFormElementButton
  | IFormElementBadge
  | IFormElementText
  | IFormElementInformer
  | IFormElementCheckbox
  | IFormElementTabs
  | IFormElementTextField
  | IFormElementTable
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
  elementType: FormGroupsTypes | FormElementTypes
}

export interface IPageOfLayout {
  id: string
  name: string
}

export interface IFormConstructor extends IHistory {
  allElements: EntityState<IFormElement | IGroupElement>
  elmentInstances: EntityState<FormInstance<FormElementTypes>>
  instanceManager: InstanceManager
  selectedElement: ISelectedElement | null
  selectedElementProps:
    | FormInstance<FormElementTypes>['props']
    | FormInstance<FormGroupsTypes>['props']
    | emptyObj
    | null
  draggableElement: IFormElement | IGroupElement | null

  pages: IPageOfLayout[]
  numberOfPages: number
  selectedPageId: string
}

//TODO определить ипнтерфейс
interface IHistory {
  history: any
}

export type DeepWriteable<T> = { -readonly [P in keyof T]: DeepWriteable<T[P]> }
