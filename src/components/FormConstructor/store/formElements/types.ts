import { Props } from '@consta/uikit/Button'
import { BaseTypes } from '../../FormConstructorFormBlockConfigure/Panels/Settings/BaseSettings/types'
import { CardElementPropsStyles } from './cardTypes'
import { BadgeProps, IFormElementBadge } from './badgeTypes'
import { IFormElementTable, TableProps } from './tableTypes'
import { LayoutElementPropsStyles } from './layoutTypes'
import { IFormElementTabs, TabsElementProps } from './tabsTypes'
import { IFormElementInformer, InformerElementProps } from './informerTypes'
import { CheckboxProps, IFormElementCheckbox } from './checkboxTypes'
import { IFormElementText, TextElementProps } from './textTypes'
import { IFormElementTextField, TextFieldProps } from './textFieldTypes'
import { Values } from '../../utils'
import { IFormElementList, ListProps } from './ListTypes'
import { IFormElementRadioButton, RadioButtonProps } from './radioButtonTypes'
import { IFormElementSwitch, SwitchProps } from './SwitchTypes'
import { DatePickerProps, IFormElementDatePicker } from './datePickerTypes'
import { ComboboxProps, IFormElementComboBox } from './comboBoxTypes'
import { IFormElementSelect, SelectProps } from './selectTypes'
import { DataTimeProps, IFormElementDataTime } from './dataTimeTypes'
import { PrototypeProps } from '../../FormConstructorFormBlockConfigure/Panels/Settings/PrototypeSettings/types'
import { IFormElementUser, UserProps } from './userTypes'

export type ButtonElementProps = Props & BaseProps

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
  User: 'User',
} as const

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type FormElementTypes = Values<typeof FormElementTypes>

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
  | TableProps
  | ListProps
  | RadioButtonProps
  | SwitchProps
  | DatePickerProps
  | ComboboxProps
  | SelectProps
  | DataTimeProps
  | PrototypeProps
  | UserProps

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
  | IFormElementTable
  | IFormElementList
  | IFormElementRadioButton
  | IFormElementSwitch
  | IFormElementDatePicker
  | IFormElementComboBox
  | IFormElementSelect
  | IFormElementDataTime
  | IFormElementUser

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
  componentsStructurePanelState: boolean
  settingsPanelState: boolean
}
