import { BaseTypes } from './basePropsTypes'
import { CardElementPropsStyles } from './cardTypes'
import { BadgeProps, IFormElementBadge } from './badgeTypes'
import { IFormElementTable, TableProps } from './tableTypes'
import { LayoutElementPropsStyles } from './layoutTypes'
import { IFormElementTabs, TabsElementProps } from './tabsTypes'
import { IFormElementInformer, InformerElementProps } from './informerTypes'
import { CheckboxProps, IFormElementCheckbox } from './checkboxTypes'
import { IFormElementText, TextElementProps } from './textTypes'
import { IFormElementTextField, TextFieldProps } from './textFieldTypes'
import { Values } from '../utils'
import { IFormElementList, ListProps } from './ListTypes'
import { IFormElementRadioButton, RadioButtonProps } from './radioButtonTypes'
import { IFormElementSwitch, SwitchProps } from './SwitchTypes'
import { DatePickerProps, IFormElementDatePicker } from './datePickerTypes'
import { ComboboxProps, IFormElementComboBox } from './comboBoxTypes'
import { IFormElementSelect, SelectProps } from './selectTypes'
import { DataTimeProps, IFormElementDataTime } from './dataTimeTypes'
import { PrototypeProps } from './prototypeTypes'
import { BreadcrumbProps, IFormElementBreadcrumbs } from './BreadcrumbsTypes'
import { IFormElementUser, UserProps } from './userTypes'
import { IFormElementIcon, IconProps } from './iconTypes'
import {
  ButtonGroupProps,
  ButtonProps,
  IButtonActionElement,
  IFormElementButton,
} from './buttonTypes'
import { IFormElementTagProps, TagProps } from './tagTypes'
import { OwnChoiceGroupProps, IFormElementChoiceGroup } from './ChoiceGroupTypes'
import { EntityState } from '@reduxjs/toolkit'
import { FillType } from '../FormConstructorFormBlockConfigure/Panels/Settings/FilledSettings/FilledSettings'

// Существует два типа элементов, элементы формы и группирующие панели
// например Layout - пока только один, но если в консте будет что еще группирующие, то будем расширять FormGroupsType
export const ElementTypes = {
  FormGroups: 'FormGroups',
  FormElement: 'FormElement',
} as const

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type ElementTypes = Values<typeof ElementTypes>

// Виды группирующих панелей
export const FormGroupsTypes = {
  Layout: 'Layout',
  Card: 'Card',
  ButtonModal: 'ButtonModal',
} as const

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type FormGroupsTypes = Values<typeof FormGroupsTypes>

// Виды обычных элементов формы ввода
export const FormElementTypes = {
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
export type FormElementTypes = Values<typeof FormElementTypes>

export interface IGroupElement extends IUnion {
  id: string
  parentId?: string
  type: FormGroupsTypes
  isOuter: boolean
  props: GroupElementProps
}

export interface ILayoutElement extends IGroupElement {
  props: LayoutElementPropsStyles
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
  props: CardElementPropsStyles
}

// Все Union пропсы для FormElement
export type FormElementProps =
  | ButtonProps
  | BadgeProps
  | TextElementProps
  | InformerElementProps
  | CheckboxProps
  | TabsElementProps
  | TextFieldProps
  | TableProps
  | ListProps
  | RadioButtonProps
  | SwitchProps
  | DatePickerProps
  | ComboboxProps
  | SelectProps
  | DataTimeProps
  | PrototypeProps
  | BreadcrumbProps
  | UserProps
  | IconProps
  | TagProps
  | OwnChoiceGroupProps

// Все Union пропсы для GroupElement
export type GroupElementProps = LayoutElementPropsStyles | CardElementPropsStyles | ButtonGroupProps

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
export type UnionProps = (FormElementProps | GroupElementProps) & { filled?: FillType }

export type fillType = 'default' | 'filled'
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
