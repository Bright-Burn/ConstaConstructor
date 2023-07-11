import {
  LayoutPropDirection,
  LayoutPropHorizontalAlign,
  LayoutPropVerticalAlign,
} from '@consta/uikit/Layout'
import { BaseProps } from './types'
import { ConstaColor } from '../../../ConstaPalette'

// Нет возможности использовать тип импортированный из консты, как это сделано с типом ButtonElementProps, так как нет возможности создать State, содержащий поле типа HTMLElement
// В будущем решим эту проблему, пока что описал вручную
export interface LayoutElementProps {
  flex?: number | 'none'
  fixed?: boolean
  verticalAlign?: LayoutPropVerticalAlign
  horizontalAlign?: LayoutPropHorizontalAlign
  direction?: LayoutPropDirection
}

export type BorderStyle =
  | 'none'
  | 'hidden'
  | 'dotted'
  | 'dashed'
  | 'solid'
  | 'double'
  | 'groove'
  | 'ridge'
  | 'inset'
  | 'outset'
export type BorderWidth = 'inherit' | 'initial' | 'revert' | 'unset' | 'thin' | 'medium' | 'thick'
export type BorderColor = 'red' | 'black' | 'blue' | 'yellow'
export type BorderSide = 'borderLeft' | 'borderRight' | 'borderTop' | 'borderBottom'

export type JustifyContentProps =
  | 'start'
  | 'center'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

export type AlignItems = 'normal' | 'start' | 'center' | 'end' | 'flex-start' | 'flex-end'
export interface LayoutElementStyles {
  maxWidth?: string
  minWidth?: string
  maxHeight?: string
  minHeight?: string
  justifyContent?: JustifyContentProps
  backgroundColor?: ConstaColor
  borderStyle?: BorderStyle
  borderWidth?: BorderWidth
  borderColor?: BorderColor
  alignItems?: AlignItems
  borderSide?: BorderSide
}

export interface LayoutElementPropsStyles extends BaseProps {
  constaProps: LayoutElementProps
  styles?: LayoutElementStyles
}
