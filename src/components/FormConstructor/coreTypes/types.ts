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
import type { BrandCardWithChartProps } from './cardWithBarChartTypes'
import type { BrandCheckboxProps, IFormElementCheckbox } from './checkboxTypes'
import type { BrandOwnChoiceGroupProps, IFormElementChoiceGroup } from './ChoiceGroupTypes'
import type { BrandComboboxProps, IFormElementComboBox } from './comboBoxTypes'
import type { BrandDashboardProps } from './dashboardTypes'
import type { BrandDataTimeProps, IFormElementDataTime } from './dataTimeTypes'
import type { BrandDatePickerProps, IFormElementDatePicker } from './datePickerTypes'
import type { BrandFooterWithSwitchProps } from './footerWithSwitchTypes'
import type { BrandIconProps, IFormElementIcon } from './iconTypes'
import type { BrandInformerElementProps, IFormElementInformer } from './informerTypes'
import type { BrandLayoutElementPropsStyles } from './layoutTypes'
import type { BrandListProps, IFormElementList } from './ListTypes'
import type { BrandPlaceholderProps } from './placeholderTypes'
import type { BrandPrototypeRectangleProps, BrandPrototypeTextProps } from './prototypeTypes'
import type { BrandRadioButtonProps, IFormElementRadioButton } from './radioButtonTypes'
import type { BrandSelectProps, IFormElementSelect } from './selectTypes'
import type { BrandSimpleFormProps } from './simpleFormTypes'
import type { BrandSwitchProps, IFormElementSwitch } from './SwitchTypes'
import type { BrandTableProps, IFormElementTable } from './tableTypes'
import type { BrandTabsElementProps, IFormElementTabs } from './tabsTypes'
import type { BrandTagProps, IFormElementTagProps } from './tagTypes'
import type { BrandTextFieldProps, IFormElementTextField } from './textFieldTypes'
import type { BrandTextElementProps, IFormElementText } from './textTypes'
import type { BrandUserProps, IFormElementUser } from './userTypes'
import type { BrandWizardFromProps } from './wizardFormTypes'

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
  parentId?: string
  type: T
  isOuter: boolean
  props: T extends 'Layout'
    ? BrandLayoutElementPropsStyles
    : emptyObj & T extends 'Card'
      ? BrandCardElementPropsStyles
      : emptyObj & T extends 'ButtonModal'
        ? BrandButtonGroupProps
        : never
}
export type IFormElement<T extends FormElementTypes = FormElementTypes> = IUnion & {
  id: string
  parentId?: string
  type: T
  props: T extends 'Button'
    ? BrandButtonProps
    : emptyObj & T extends 'Badge'
      ? BrandBadgeProps
      : emptyObj & T extends 'Tabs'
        ? BrandTabsElementProps
        : emptyObj & T extends 'Informer'
          ? BrandInformerElementProps
          : emptyObj & T extends 'Checkbox'
            ? BrandCheckboxProps
            : emptyObj & T extends 'Text'
              ? BrandTextElementProps
              : emptyObj & T extends 'TextField'
                ? BrandTextFieldProps
                : emptyObj & T extends 'Table'
                  ? BrandTableProps
                  : emptyObj & T extends 'List'
                    ? BrandListProps
                    : emptyObj & T extends 'RadioButton'
                      ? BrandRadioButtonProps
                      : emptyObj & T extends 'Switch'
                        ? BrandSwitchProps
                        : emptyObj & T extends 'DatePicker'
                          ? BrandDatePickerProps
                          : emptyObj & T extends 'ComboBox'
                            ? BrandComboboxProps
                            : emptyObj & T extends 'SelectForm'
                              ? BrandSelectProps
                              : emptyObj & T extends 'DataTime'
                                ? BrandDataTimeProps
                                : emptyObj & T extends 'User'
                                  ? BrandUserProps
                                  : emptyObj & T extends 'Icon'
                                    ? BrandIconProps
                                    : emptyObj & T extends 'Tag'
                                      ? BrandTagProps
                                      : emptyObj & T extends 'BreadcrumbsFormElement'
                                        ? BrandBreadcrumbsProps
                                        : emptyObj & T extends 'ChoiceGroup'
                                          ? BrandOwnChoiceGroupProps
                                          : emptyObj & T extends 'ProjectGrid'
                                            ? emptyObj
                                            : emptyObj & T extends 'Placeholder'
                                              ? BrandPlaceholderProps
                                              : emptyObj & T extends 'CardWithBarChart'
                                                ? BrandCardWithChartProps
                                                : emptyObj & T extends 'Dashboard'
                                                  ? BrandDashboardProps
                                                  : emptyObj & T extends 'SimpleForm'
                                                    ? BrandSimpleFormProps
                                                    : emptyObj & T extends 'WizardForm'
                                                      ? BrandWizardFromProps
                                                      : emptyObj & T extends 'FooterWithSwitch'
                                                        ? BrandFooterWithSwitchProps
                                                        : emptyObj &
                                                              T extends 'PrototypeTextElement'
                                                          ? BrandPrototypeTextProps
                                                          : emptyObj &
                                                                T extends 'PrototypeRectangleElement'
                                                            ? BrandPrototypeRectangleProps
                                                            : never
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
export type FormElementProps = IFormElement['props']
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
export type GroupElementProps = IGroupElement['props']
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
  selectedElementProps: UnionProps | emptyObj | null
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
