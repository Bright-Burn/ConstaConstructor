import {
  LayoutPropDirection,
  LayoutPropHorizontalAlign,
  LayoutPropVerticalAlign,
} from '@consta/uikit/Layout'

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
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

export interface LayoutElementStyles {
  width?: string
  height?: string
  justifyContent?: JustifyContentProps
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
}

export interface LayoutElementPropsStyles {
  constaProps: LayoutElementProps
  styles?: LayoutElementStyles
}
