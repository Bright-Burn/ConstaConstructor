import { AlignItems, JustifyContentProps } from '../../../../coreTypes'
import { LayoutPropHorizontalAlign, LayoutPropVerticalAlign } from '@consta/uikit/Layout'
import { BorderSide, BorderStyle, LayoutPropDirection } from '../../../../coreTypes/layoutTypes'
import { IconColumns } from '@consta/uikit/IconColumns'
import { IconAlignJustify } from '@consta/uikit/IconAlignJustify'

import {
  BorderDashed,
  BorderDott,
  BorderDouble,
  BorderGroove,
  BorderInset,
  BorderOutset,
  BorderRidge,
  BorderSolid,
} from './images/BorderStyle'
import {
  BorderAll,
  BorderNone,
  BorderLeft,
  BorderRight,
  BorderTop,
  BorderBottom,
} from './images/Border'
import {
  JustifyPositionStart,
  JustifyPositionCenter,
  JustifyPositionEnd,
  JustifyPositionSpaceBetween,
  JustifyPositionSpaceAround,
  JustifyPositionSpaceEvenly,
} from './images/JustifyContent'
import { AlignPositionStart, AlignPositionCenter, AlignPositionEnd } from './images/AlignItems'

export const directions: LayoutPropDirection[] = [
  { name: 'column', icon: IconColumns },
  { name: 'row', icon: IconAlignJustify },
]

export const borderWidths = ['', 'inherit', 'medium', 'thick', 'thin', 'initial', 'revert', 'unset']

export const borderStyle: BorderStyle[] = [
  { name: 'hidden' },
  { name: 'solid', icon: BorderSolid },
  { name: 'dotted', icon: BorderDott },
  { name: 'dashed', icon: BorderDashed },
  { name: 'double', icon: BorderDouble },
  { name: 'groove', icon: BorderGroove },
  { name: 'inset', icon: BorderInset },
  { name: 'outset', icon: BorderOutset },
  { name: 'ridge', icon: BorderRidge },
]
export const verticalAligns: LayoutPropVerticalAlign[] = ['top', 'bottom']
export const horizontalAligns: LayoutPropHorizontalAlign[] = ['left', 'right']

export const justifyContentProps: JustifyContentProps[] = [
  { name: 'start', icon: JustifyPositionStart },
  { name: 'center', icon: JustifyPositionCenter },
  { name: 'end', icon: JustifyPositionEnd },
  { name: 'space-between', icon: JustifyPositionSpaceBetween },
  { name: 'space-around', icon: JustifyPositionSpaceAround },
  { name: 'space-evenly', icon: JustifyPositionSpaceEvenly },
]

export const alignItems: AlignItems[] = [
  { name: 'normal', icon: JustifyPositionCenter },
  { name: 'center', icon: AlignPositionCenter },
  { name: 'start', icon: AlignPositionStart },
  { name: 'end', icon: AlignPositionEnd },
]

export const borderSide: BorderSide[] = [
  { name: '', icon: BorderNone },
  { name: 'borderLeft', icon: BorderLeft },
  { name: 'borderRight', icon: BorderRight },
  { name: 'borderTop', icon: BorderTop },
  { name: 'borderBottom', icon: BorderBottom },
  { name: ' ', icon: BorderAll },
]
