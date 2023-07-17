import { AlignItems, JustifyContentProps } from '../../../../store/formElements/layoutTypes'
import {
  LayoutPropDirection,
  LayoutPropHorizontalAlign,
  LayoutPropVerticalAlign,
} from '@consta/uikit/Layout'

export const directions: LayoutPropDirection[] = ['row', 'column']

export const borderWidths = ['', 'inherit', 'medium', 'thick', 'thin', 'initial', 'revert', 'unset']

export const borderStyle = [
  '',
  'dotted',
  'dashed',
  'double',
  'groove',
  'hidden',
  'inset',
  'outset',
  'ridge',
  'solid',
]
export const verticalAligns: LayoutPropVerticalAlign[] = ['top', 'bottom']
export const horizontalAligns: LayoutPropHorizontalAlign[] = ['left', 'right']

export const justifyContentProps: JustifyContentProps[] = [
  'start',
  'center',
  'end',
  'space-between',
  'space-around',
  'space-evenly',
]

export const alignItems: AlignItems[] = [
  'normal',
  'center',
  'start',
  'end',
  'flex-end',
  'flex-start',
]

export const borderSide = ['', 'borderLeft', 'borderRight', 'borderTop', 'borderBottom']
