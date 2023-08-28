import { LayoutPropHorizontalAlign, LayoutPropVerticalAlign } from '@consta/uikit/Layout'
import { BaseProps, BrandProps, ConcreteSelectedElement, FormGroupsDictTypes } from './types'
import { ConstaColor } from '../../ConstaPalette'
import { IconComponent } from '@consta/uikit/Icon'

// Нет возможности использовать тип импортированный из консты, как это сделано с типом ButtonElementProps, так как нет возможности создать State, содержащий поле типа HTMLElement
// В будущем решим эту проблему, пока что описал вручную
export interface LayoutElementProps {
  flex?: number | 'none'
  fixed?: boolean
  verticalAlign?: LayoutPropVerticalAlign
  horizontalAlign?: LayoutPropHorizontalAlign
  direction?: LayoutPropDirection
}

export type BorderStyle = {
  name:
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
  icon?: IconComponent
}

export type BorderWidth = 'inherit' | 'initial' | 'revert' | 'unset' | 'thin' | 'medium' | 'thick'
export type BorderSide = {
  name: ' ' | 'borderLeft' | 'borderRight' | 'borderTop' | 'borderBottom' | ''
  icon?: IconComponent
}

export type LayoutPropDirection = {
  name: 'row' | 'column'
  icon?: IconComponent
}

export type JustifyContentProps = {
  name:
    | 'start'
    | 'center'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  icon?: IconComponent
}

export type AlignItems = {
  name: 'normal' | 'start' | 'center' | 'end' | 'flex-start' | 'flex-end'
  icon?: IconComponent
}
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
