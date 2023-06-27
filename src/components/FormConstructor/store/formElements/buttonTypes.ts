import { BaseTypes } from '../../FormConstructorFormBlockConfigure/Panels/Settings/BaseSettings/types'
import {
  BaseProps,
  FormElementTypes,
  FormGroupsTypes,
  GroupElementProps,
  IFormElement,
  IGroupElement,
} from './types'
import { Props } from '@consta/uikit/Button'

///  | 'RightSidebar' | 'LeftSidebar'
export type ButtonAction = 'none' | 'ButtonModal'

export interface ButtonProps extends BaseProps, Props {
  action: ButtonAction
}

export const buttonActions: ButtonAction[] = ['none', 'ButtonModal']
export const buttonActionsActive = ['ButtonModal']

export interface IFormElementButton extends IFormElement {
  props: ButtonProps
}

export class FormElementButton implements IFormElementButton {
  id: string
  props: ButtonProps
  type: FormElementTypes = 'Button'

  constructor(id: string, props: ButtonProps) {
    this.id = id
    this.props = props
  }
}

export const defaultHeight = '400px'
export const defaultWidth = '400px'

export interface IButtonGroupProps extends BaseProps {
  height: string
  width: string
}

export interface IButtonActionElement extends IGroupElement {
  connectedButtonId: string
}

export interface IButtonModalElement extends IButtonActionElement {
  id: string
  props: IButtonGroupProps
}

export class ButtonGroupProps implements IButtonGroupProps {
  baseProps: BaseTypes
  className: string
  height: string
  width: string

  constructor(height: string, width: string, className: string, baseProps: BaseTypes) {
    this.baseProps = baseProps
    this.className = className
    this.height = height
    this.width = width
  }
}

export abstract class ButtonActionElement implements IButtonActionElement {
  connectedButtonId: string
  id: string
  isOuter: boolean = false
  props: GroupElementProps
  type: FormGroupsTypes

  constructor(
    id: string,
    connectedButtonId: string,
    props: GroupElementProps,
    type: FormGroupsTypes,
  ) {
    this.id = id
    this.connectedButtonId = connectedButtonId
    this.props = props
    this.type = type
  }
}

export class ButtonModalElement extends ButtonActionElement {
  constructor(id: string, connectedButtonId: string, props: GroupElementProps) {
    super(id, connectedButtonId, props, 'ButtonModal')
  }
}

