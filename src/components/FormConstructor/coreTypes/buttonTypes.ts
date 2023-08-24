import { IconComponent } from '@consta/uikit/Icon'
import { iconNames } from './iconTypes'
import {
  BaseProps,
  BrandProps,
  ConcreteSelectedElement,
  FormElementDictTypes,
  FormGroupsDictTypes,
  IFormElement,
  IGroupElement,
} from './types'
import { Props } from '@consta/uikit/Button'

///  | 'RightSidebar' | 'LeftSidebar'
export type ButtonAction = 'none' | 'ButtonModal'

export interface ButtonProps extends BaseProps, Props {
  action: ButtonAction
  activeAction?: boolean
  icon?: iconNames
  iconR?: iconNames
  filled?: boolean
}

export type BrandButtonProps = BrandProps<ButtonProps, 'Button'> & { filled?: boolean }

export type ButtonElement = ConcreteSelectedElement<typeof FormElementDictTypes.Button>

export const buttonActions: ButtonAction[] = ['none', 'ButtonModal']
export const buttonActionsActive = ['ButtonModal']

export interface IFormElementButton extends IFormElement {
  props: BrandButtonProps
}

export const defaultHeight = '400px'
export const defaultWidth = '400px'

export interface ButtonGroupProps extends BaseProps {
  height: string
  width: string
}

export type BrandButtonGroupProps = BrandProps<ButtonGroupProps, 'ButtonModal'>

export type ButtonGroupElement = ConcreteSelectedElement<typeof FormGroupsDictTypes.ButtonModal>

export interface IButtonActionElement extends IGroupElement {
  connectedButtonId: string
}

export interface IButtonModalElement extends IButtonActionElement {
  id: string
  props: BrandButtonGroupProps
}
