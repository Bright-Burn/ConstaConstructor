import {
  LayoutPropDirection,
  LayoutPropHorizontalAlign,
  LayoutPropVerticalAlign,
} from '@consta/uikit/Layout'
import { BaseProps } from './types'

// Нет возможности использовать тип импортированный из консты, как это сделано с типом ButtonElementProps, так как нет возможности создать State, содержащий поле типа HTMLElement
// В будущем решим эту проблему, пока что описал вручную
export interface LayoutElementProps {
  flex?: number | 'none'
  fixed?: boolean
  verticalAlign?: LayoutPropVerticalAlign
  horizontalAlign?: LayoutPropHorizontalAlign
  direction?: LayoutPropDirection
}

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
  alignItems?: AlignItems
}

export interface LayoutElementPropsStyles extends BaseProps {
  constaProps: LayoutElementProps
  styles?: LayoutElementStyles
}
