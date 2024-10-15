import type { Props } from '@consta/uikit/Button'

import type { IconNames } from './iconTypes'
import type { BaseProps, InstanceProps } from './instanceProps'
import type {
  BrandProps,
  ConcreteSelectedView,
  FormElementDictTypes,
  IFormElement,
  OmitInstanceId,
} from './types'

type UiLibProps = Omit<Props, 'iconLeft' | 'iconRight'> & {
  iconLeft?: IconNames
  iconRight?: IconNames
}
type CustomStyles = {
  filled?: boolean
}

export type ButtonProps = InstanceProps<UiLibProps, CustomStyles>

export type BrandButtonProps = BrandProps<ButtonProps, 'Button'>

export type ButtonElement = ConcreteSelectedView<typeof FormElementDictTypes.Button>

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
