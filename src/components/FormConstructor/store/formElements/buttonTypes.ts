import { iconNames } from './iconTypes'
import { BaseProps, IFormElement, IGroupElement } from './types'
import { Props } from '@consta/uikit/Button'

///  | 'RightSidebar' | 'LeftSidebar'
export type ButtonAction = 'none' | 'ButtonModal'

export interface ButtonProps extends BaseProps, Props {
  action: ButtonAction
  icon?: iconNames
}

export const buttonActions: ButtonAction[] = ['none', 'ButtonModal']
export const buttonActionsActive = ['ButtonModal']

export interface IFormElementButton extends IFormElement {
  props: ButtonProps
}

export const defaultHeight = '400px'
export const defaultWidth = '400px'

export interface ButtonGroupProps extends BaseProps {
  height: string
  width: string
}

export interface IButtonActionElement extends IGroupElement {
  connectedButtonId: string
}

export interface IButtonModalElement extends IButtonActionElement {
  id: string
  props: ButtonGroupProps
}
