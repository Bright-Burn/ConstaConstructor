import { LayoutPropHorizontalAlign, LayoutPropVerticalAlign } from '@consta/uikit/Layout'
import { BaseProps, BrandProps, ConcreteSelectedElement, FormGroupsDictTypes } from './types'
import { ConstaColor } from '../../ConstaPalette'

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
export type BorderSide =
  | 'borderAll'
  | 'borderLeft'
  | 'borderRight'
  | 'borderTop'
  | 'borderBottom'
  | 'borderNone'

export type LayoutPropDirection = 'row' | 'column'

export type JustifyContentProps =
  | 'start'
  | 'center'
  | 'end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

export type AlignItems = 'normal' | 'start' | 'center' | 'end'

export interface LayoutElementStyles {
  maxWidth?: string
  minWidth?: string
  maxHeight?: string
  minHeight?: string
  justifyContent?: JustifyContentProps
  backgroundColor?: ConstaColor
  borderStyle?: BorderStyle
  borderWidth?: BorderWidth
  borderColor?: ConstaColor
  alignItems?: AlignItems
  borderSide?: BorderSide
}

export interface LayoutElementPropsStyles extends BaseProps {
  constaProps: LayoutElementProps
  styles?: LayoutElementStyles
}

export type BrandLayoutElementPropsStyles = BrandProps<LayoutElementPropsStyles, 'Layout'>

export type LayoutElement = ConcreteSelectedElement<typeof FormGroupsDictTypes.Layout>
