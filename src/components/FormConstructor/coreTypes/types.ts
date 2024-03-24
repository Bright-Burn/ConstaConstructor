import type { EntityState } from '@reduxjs/toolkit'

import type { Values } from '../utils'

import type { BrandBadgeProps, IFormElementBadge } from './badgeTypes'
import type { BaseTypes } from './basePropsTypes'
import type { BrandBreadcrumbsProps, IFormElementBreadcrumbs } from './BreadcrumbsTypes'
import type {
  BrandButtonGroupProps,
  BrandButtonProps,
  IButtonActionElement,
  IFormElementButton,
} from './buttonTypes'
import type { BrandCardElementPropsStyles } from './cardTypes'
import type { BrandCheckboxProps, IFormElementCheckbox } from './checkboxTypes'
import type { BrandOwnChoiceGroupProps, IFormElementChoiceGroup } from './ChoiceGroupTypes'
import type { BrandComboboxProps, IFormElementComboBox } from './comboBoxTypes'
import type { BrandDataTimeProps, IFormElementDataTime } from './dataTimeTypes'
import type { BrandDatePickerProps, IFormElementDatePicker } from './datePickerTypes'
import type { BrandIconProps, IFormElementIcon } from './iconTypes'
import type { BrandInformerElementProps, IFormElementInformer } from './informerTypes'
import type { BrandLayoutElementPropsStyles } from './layoutTypes'
import type { BrandListProps, IFormElementList } from './ListTypes'
import type { BrandPrototypeRectangleProps, BrandPrototypeTextProps } from './prototypeTypes'
import type { BrandRadioButtonProps, IFormElementRadioButton } from './radioButtonTypes'
import type { BrandSelectProps, IFormElementSelect } from './selectTypes'
import type { BrandSwitchProps, IFormElementSwitch } from './SwitchTypes'
import type { BrandTableProps, IFormElementTable } from './tableTypes'
import type { BrandTabsElementProps, IFormElementTabs } from './tabsTypes'
import type { BrandTagProps, IFormElementTagProps } from './tagTypes'
import type { BrandTextFieldProps, IFormElementTextField } from './textFieldTypes'
import type { BrandTextElementProps, IFormElementText } from './textTypes'
import type { BrandUserProps, IFormElementUser } from './userTypes'

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
    ? BrandButtonProps
    : {} & T extends 'Badge'
      ? BrandBadgeProps
      : {} & T extends 'Tabs'
        ? BrandTabsElementProps
        : {} & T extends 'Informer'
          ? BrandInformerElementProps
          : {} & T extends 'Checkbox'
            ? BrandCheckboxProps
            : {} & T extends 'Text'
              ? BrandTextElementProps
              : {} & T extends 'TextField'
                ? BrandTextFieldProps
                : {} & T extends 'Table'
                  ? BrandTableProps
                  : {} & T extends 'List'
                    ? BrandListProps
                    : {} & T extends 'RadioButton'
                      ? BrandRadioButtonProps
                      : {} & T extends 'Switch'
                        ? BrandSwitchProps
                        : {} & T extends 'DatePicker'
                          ? BrandDatePickerProps
                          : {} & T extends 'ComboBox'
                            ? BrandComboboxProps
                            : {} & T extends 'Select'
                              ? BrandSelectProps
                              : {} & T extends 'DataTime'
                                ? BrandDataTimeProps
                                : {} & T extends 'User'
                                  ? BrandUserProps
                                  : {} & T extends 'Icon'
                                    ? BrandIconProps
                                    : {} & T extends 'Tag'
                                      ? BrandTagProps
                                      : {} & T extends 'BreadcrumbsFormElement'
                                        ? BrandBreadcrumbsProps
                                        : {} & T extends 'ChoiceGroup'
                                          ? BrandOwnChoiceGroupProps
                                          : {} & T extends 'ProjectGrid'
                                            ? {}
                                            : {} & T extends 'Placeholder'
                                              ? {}
                                              : {} & T extends 'CardWithBarChart'
                                                ? {}
                                                : {} & T extends 'Dashboard'
                                                  ? {}
                                                  : {} & T extends 'SimpleForm'
                                                    ? {}
                                                    : {} & T extends 'WizardForm'
                                                      ? {}
                                                      : {} & T extends 'FooterWithSwitch'
                                                        ? {}
                                                        : {} & T extends 'PrototypeTextElement'
                                                          ? {}
                                                          : {} & T extends 'PrototypeRectangleElement'
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
  | BrandPrototypeRectangleProps
  | BrandBreadcrumbsProps
  | BrandUserProps
  | BrandIconProps
  | BrandTagProps
  | BrandOwnChoiceGroupProps

// Все Union пропсы для GroupElement
export type GroupElementProps =
  | BrandLayoutElementPropsStyles
  | BrandCardElementPropsStyles
  | BrandButtonGroupProps

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
export type UnionProps = FormElementProps | GroupElementProps
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

export type DeepWriteable<T> = { -readonly [P in keyof T]: DeepWriteable<T[P]> }
