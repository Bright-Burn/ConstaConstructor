import { BaseTypes } from './basePropsTypes'
import { BrandCardElementPropsStyles, CardElementPropsStyles } from './cardTypes'
import { BadgeProps, BrandBadgeProps, IFormElementBadge } from './badgeTypes'
import { BrandTableProps, IFormElementTable, TableProps } from './tableTypes'
import { BrandLayoutElementPropsStyles, LayoutElementPropsStyles } from './layoutTypes'
import { BrandTabsElementProps, IFormElementTabs, TabsElementProps } from './tabsTypes'
import { BrandInformerElementProps, IFormElementInformer, InformerElementProps } from './informerTypes'
import { BrandCheckboxProps, CheckboxProps, IFormElementCheckbox } from './checkboxTypes'
import { BrandTextElementProps, IFormElementText, TextElementProps } from './textTypes'
import { BrandTextFieldProps, IFormElementTextField, TextFieldProps } from './textFieldTypes'
import { Values } from '../utils'
import { BrandListProps, IFormElementList, ListProps } from './ListTypes'
import { BrandRadioButtonProps, IFormElementRadioButton, RadioButtonProps } from './radioButtonTypes'
import { BrandSwitchProps, IFormElementSwitch, SwitchProps } from './SwitchTypes'
import { BrandDatePickerProps, DatePickerProps, IFormElementDatePicker } from './datePickerTypes'
import { BrandComboboxProps, ComboboxProps, IFormElementComboBox } from './comboBoxTypes'
import { BrandSelectProps, IFormElementSelect, SelectProps } from './selectTypes'
import { BrandDataTimeProps, DataTimeProps, IFormElementDataTime } from './dataTimeTypes'
import { BrandPrototypeRectProps, BrandPrototypeTextProps, PrototypeProps } from './prototypeTypes'
import { BreadcrumbProps, IFormElementBreadcrumbs, BrandBreadcrumbsProps } from './BreadcrumbsTypes'
import { IFormElementUser, UserProps, BrandUserProps } from './userTypes'
import { IFormElementIcon, BrandIconProps, IconProps } from './iconTypes'
import {
  BrandButtonGroupProps,
  BrandButtonProps,
  ButtonGroupProps,
  ButtonProps,
  IButtonActionElement,
  IFormElementButton,
} from './buttonTypes'
import { BrandTagProps, IFormElementTagProps, TagProps } from './tagTypes'
import { OwnChoiceGroupProps, IFormElementChoiceGroup, BrandOwnChoiceGroupProps } from './ChoiceGroupTypes'
import { EntityState } from '@reduxjs/toolkit'

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
  Button: 'Button',
  Badge: 'Badge',
  Tabs: 'Tabs',
  Informer: 'Informer',
  Checkbox: 'Checkbox',
  Text: 'Text',
  TextField: 'TextField',
  ProjectGrid: 'ProjectGrid',
  HeaderWithBreadcrumbs: 'HeaderWithBreadcrumbs',
  HeaderCognitiveGeologist: 'HeaderCognitiveGeologist',
  Placeholder: 'Placeholder',
  HeaderWithStatus: 'HeaderWithStatus',
  CardWithBarChart: 'CardWithBarChart',
  CustomCards: 'CustomCards',
  Dashboard: 'Dashboard',
  SimpleForm: 'SimpleForm',
  WizardForm: 'WizardForm',
  FooterWithSwitch: 'FooterWithSwitch',
  FormWithTwoColumns: 'FormWithTwoColumns',
  Table: 'Table',
  List: 'List',
  RadioButton: 'RadioButton',
  Switch: 'Switch',
  DatePicker: 'DatePicker',
  ComboBox: 'ComboBox',
  Select: 'SelectForm',
  DataTime: 'DataTime',
  ExpertiseForm: 'ExpertiseForm',
  PrototypeTextElement: 'PrototypeTextElement',
  PrototypeRectElement: 'PrototypeRectElement',
  BreadcrumbsForm: 'BreadcrumbsFormElement',
  User: 'User',
  Icon: 'Icon',
  Tag: 'Tag',
  ChoiceGroup: 'ChoiceGroup',
} as const

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type FormElementTypes = Values<typeof FormElementDictTypes>

export interface IGroupElement extends IUnion {
  id: string
  parentId?: string
  type: FormGroupsTypes
  isOuter: boolean
  props: GroupElementProps
}

export interface ILayoutElement extends IGroupElement {
  props: BrandLayoutElementPropsStyles
}

export type IFormElement<T extends FormElementTypes = FormElementTypes> = IUnion & {
  id: string
  parentId?: string
  type: T
  props: T extends 'Button'
    ? ButtonProps
    : {} & T extends 'Badge'
    ? BadgeProps
    : {} & T extends 'Tabs'
    ? TabsElementProps
    : {} & T extends 'Informer'
    ? InformerElementProps
    : {} & T extends 'Checkbox'
    ? CheckboxProps
    : {} & T extends 'Text'
    ? TextElementProps
    : {} & T extends 'TextField'
    ? TextFieldProps
    : {} & T extends 'Table'
    ? TableProps
    : {} & T extends 'List'
    ? ListProps
    : {} & T extends 'RadioButton'
    ? RadioButtonProps
    : {} & T extends 'Switch'
    ? SwitchProps
    : {} & T extends 'DatePicker'
    ? DatePickerProps
    : {} & T extends 'ComboBox'
    ? ComboboxProps
    : {} & T extends 'Select'
    ? SelectProps
    : {} & T extends 'DataTime'
    ? DataTimeProps
    : {} & T extends 'User'
    ? UserProps
    : {} & T extends 'Icon'
    ? IconProps
    : {} & T extends 'Tag'
    ? TagProps
    : {} & T extends 'BreadcrumbsFormElement'
    ? BreadcrumbProps
    : {} & T extends 'ChoiceGroup'
    ? OwnChoiceGroupProps
    : {} & T extends 'ProjectGrid'
    ? {}
    : {} & T extends 'HeaderWithBreadcrumbs'
    ? {}
    : {} & T extends 'HeaderCognitiveGeologist'
    ? {}
    : {} & T extends 'Placeholder'
    ? {}
    : {} & T extends 'HeaderWithStatus'
    ? {}
    : {} & T extends 'CardWithBarChart'
    ? {}
    : {} & T extends 'CustomCards'
    ? {}
    : {} & T extends 'Dashboard'
    ? {}
    : {} & T extends 'SimpleForm'
    ? {}
    : {} & T extends 'WizardForm'
    ? {}
    : {} & T extends 'FooterWithSwitch'
    ? {}
    : {} & T extends 'FormWithTwoColumns'
    ? {}
    : {} & T extends 'ExpertiseForm'
    ? {}
    : {} & T extends 'PrototypeTextElement'
    ? {}
    : {} & T extends 'PrototypeRectElement'
    ? {}
    : {}
}

export interface IUnion {
  id: string
  type: FormElementTypes | FormGroupsTypes
}

export interface ICardElement extends IGroupElement {
  props: BrandCardElementPropsStyles
}

export type AllElementTypes = FormElementTypes | FormGroupsTypes

export type AllElementProps = FormElementProps | GroupElementProps

export type BrandProps<T, ElementTypes extends AllElementTypes> = {
  type: ElementTypes
  props: T
}

export type ConcreteSelectedElement<ElementTypes extends AllElementTypes> = {
  elementId: string
  elementType: ElementTypes
}

// Все Union пропсы для FormElement
export type FormElementProps =
  | BrandButtonProps
  | BrandBadgeProps
  | BrandTextElementProps
  | BrandInformerElementProps
  | BrandCheckboxProps
  | BrandTabsElementProps
  | BrandTextFieldProps
  | BrandTableProps
  | BrandListProps
  | BrandRadioButtonProps
  | BrandSwitchProps
  | BrandDatePickerProps
  | BrandComboboxProps
  | BrandSelectProps
  | BrandDataTimeProps
  | BrandPrototypeTextProps
  | BrandPrototypeRectProps
  | BrandBreadcrumbsProps
  | BrandUserProps
  | BrandIconProps
  | BrandTagProps
  | BrandOwnChoiceGroupProps

// Все Union пропсы для GroupElement
export type GroupElementProps = BrandLayoutElementPropsStyles | BrandCardElementPropsStyles | BrandButtonGroupProps

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

// По мере добавление новых группирующих элементов сюда будем добавлять новые объединения
export type GroupElementUnion = ILayoutElement | ICardElement | IButtonActionElement

/// По мере расширения сюда подем дописывать новые объединения
export type UnionProps = (FormElementProps | GroupElementProps) & { filled?: boolean }
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
  selectedElement: ISelectedElement | null
  selectedElementProps: UnionProps | null
  draggableElement: IFormElement | IGroupElement | null

  pages: IPageOfLayout[]
  numberOfPages: number
  selectedPageId: string
}

//TODO определить ипнтерфейс
interface IHistory {
  history: any
}
