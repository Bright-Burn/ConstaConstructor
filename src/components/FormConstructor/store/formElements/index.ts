import {
  formConstructorSlice,
  formConstructorReducer,
  useAppDispatch,
  useAppSelector,
} from './slices'
import {
  UnionProps,
  FormElementUnion,
  GroupElementUnion,
  IFormElement,
  IGroupElement,
  FormElementTypes,
  ICardElement,
  FormGroupsTypes,
  ILayoutElement,
  ElementTypes,
} from './types'

import { IFormElementTextField, TextFieldProps } from './textFieldTypes'

import { IFormElementBadge, BadgeProps } from './badgeTypes'

import { LayoutElementProps, LayoutElementPropsStyles, LayoutElementStyles } from './layoutTypes'

import {
  AddNewElementPayload,
  SetNewSelectedElement,
  DeleteElementPayload,
  LoadProjectFromStorage,
  SaveNewProject,
  ShowGrid,
} from './payload'

import { CardElementPropsStyles } from './cardTypes'

import { IFormElementText, TextElementProps } from './textTypes'
import { IFormElementInformer, InformerElementProps } from './informerTypes'
import { IFormElementCheckbox, CheckboxProps } from './checkboxTypes'

export type {
  IFormElementHeaderWithBreadcrumbs,
  headerWithBreadcrumbsProps,
} from './headerWithBreadcrumbsTypes'
export type { IFormElementHeaderWithStatus, headerWithStatusProps } from './headerWithStatusTypes'
export * from './buttonTypes'

export {
  formConstructorReducer,
  formConstructorSlice,
  useAppSelector,
  useAppDispatch,
  FormElementTypes,
  FormGroupsTypes,
  ElementTypes,
  type IFormElementTextField,
  type TextFieldProps,
  type ICardElement,
  type ILayoutElement,
  type IFormElement,
  type IGroupElement,
  type BadgeProps,
  type IFormElementBadge,
  type LayoutElementPropsStyles,
  type LayoutElementStyles,
  type UnionProps,
  type LayoutElementProps,
  type FormElementUnion,
  type GroupElementUnion,
  type SetNewSelectedElement,
  type AddNewElementPayload,
  type DeleteElementPayload,
  type LoadProjectFromStorage,
  type SaveNewProject,
  type ShowGrid,
  type CardElementPropsStyles,
  type IFormElementText,
  type TextElementProps,
  type IFormElementInformer,
  type InformerElementProps,
  type CheckboxProps,
  type IFormElementCheckbox,
}
