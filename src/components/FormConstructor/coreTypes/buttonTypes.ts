import type { Props } from '@consta/uikit/Button'

import type { IconNames } from './iconTypes'
import type {
  BaseProps,
  BrandProps,
  ConcreteSelectedView,
  FormElementDictTypes,
  FormGroupsDictTypes,
  IFormElement,
  IGroupElement,
  OmitInstanceId,
} from './types'

///  | 'RightSidebar' | 'LeftSidebar'
export type ButtonAction = 'none' | 'ButtonModal'

// Тип для адаптера
export interface ButtonProps_Deprecated extends BaseProps, Props {
  icon?: IconNames
  iconR?: IconNames
  filled?: boolean
}

export type ButtonProps = BaseProps & {
  // Типы дизайн системы
  constaProps: Omit<Props, 'iconLeft' | 'iconRight'> & {
    iconLeft?: IconNames
    iconRight?: IconNames
  }
  // Кастомные стили
  styles: {
    filled?: boolean
  }
}

export type BrandButtonProps = BrandProps<ButtonProps, 'Button'>

export type ButtonElement = ConcreteSelectedView<typeof FormElementDictTypes.Button>

export const buttonActions: ButtonAction[] = ['none', 'ButtonModal']
export const buttonActionsActive = ['ButtonModal']

export type IFormElementButton = OmitInstanceId<
  IFormElement & {
    props: BrandButtonProps
  }
>

export const defaultHeight = '400px'
export const defaultWidth = '400px'

export interface ButtonGroupProps extends BaseProps {
  height: string
  width: string
}

export type BrandButtonGroupProps = BrandProps<ButtonGroupProps, 'ButtonModal'>

export type ButtonGroupElement = ConcreteSelectedView<typeof FormGroupsDictTypes.ButtonModal>

export interface IButtonActionElement extends IGroupElement {
  connectedButtonId: string
}

export interface IButtonModalElement extends IButtonActionElement {
  id: string
  props: BrandButtonGroupProps
}
