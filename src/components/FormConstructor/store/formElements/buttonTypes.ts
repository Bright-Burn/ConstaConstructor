import { BaseProps, IFormElement, IGroupElement } from './types'
import { Props } from '@consta/uikit/Button'

///  | 'RightSidebar' | 'LeftSidebar'
export type ButtonAction = 'none' | 'Modal'
export type ButtonGroupType = ButtonAction

export interface ButtonProps extends BaseProps, Props {
  action: ButtonAction
}

export const buttonActions: ButtonAction[] = ['none', 'Modal']

export interface IFormElementButton extends IFormElement {
  props: ButtonProps
}

export interface IButtonGroup extends IGroupElement {
  id: string
  connectedButtonId: string
  props: ButtonGroupProps
}

export interface ButtonGroupProps extends BaseProps {
  height: string
  width: string
  groupType: ButtonAction
}

