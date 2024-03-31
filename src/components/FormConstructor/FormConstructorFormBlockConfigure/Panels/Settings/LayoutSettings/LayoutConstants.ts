import type { IconComponent } from '@consta/icons/Icon'
import { IconAlignJustify } from '@consta/icons/IconAlignJustify'
import { IconColumns } from '@consta/icons/IconColumns'

import type {
  AlignItems,
  BorderSide,
  BorderStyle,
  BorderWidth,
  JustifyContentProps,
  LayoutPropDirection,
} from '../../../../coreTypes'

import {
  AlignPositionCenter,
  AlignPositionEnd,
  AlignPositionNormal,
  AlignPositionStart,
  BorderAll,
  BorderBottom,
  BorderDashed,
  BorderDott,
  BorderDouble,
  BorderGroove,
  BorderInset,
  BorderLeft,
  BorderNone,
  BorderOutset,
  BorderRidge,
  BorderRight,
  BorderSolid,
  BorderTop,
  JustifyPositionCenter,
  JustifyPositionEnd,
  JustifyPositionSpaceAround,
  JustifyPositionSpaceBetween,
  JustifyPositionSpaceEvenly,
  JustifyPositionStart,
} from './images'

type directionType = { name: LayoutPropDirection; icon: IconComponent }
type borderStyleType = { name: BorderStyle; icon: IconComponent }
type justifyContentType = { name: JustifyContentProps; icon: IconComponent }
type alignItemsType = { name: AlignItems; icon: IconComponent }
type borderSideType = { name: BorderSide; icon: IconComponent }

export const directionDict: Record<LayoutPropDirection, directionType> = {
  column: { name: 'column', icon: IconColumns },
  row: { name: 'row', icon: IconAlignJustify },
}

export const borderStyleDict: Record<BorderStyle, borderStyleType> = {
  hidden: { name: 'hidden', icon: BorderSolid },
  solid: { name: 'solid', icon: BorderSolid },
  dotted: { name: 'dotted', icon: BorderDott },
  dashed: { name: 'dashed', icon: BorderDashed },
  double: { name: 'double', icon: BorderDouble },
  groove: { name: 'groove', icon: BorderGroove },
  inset: { name: 'inset', icon: BorderInset },
  outset: { name: 'outset', icon: BorderOutset },
  ridge: { name: 'ridge', icon: BorderRidge },
}

export const justifyContentDict: Record<JustifyContentProps, justifyContentType> = {
  start: { name: 'start', icon: JustifyPositionStart },
  center: { name: 'center', icon: JustifyPositionCenter },
  end: { name: 'end', icon: JustifyPositionEnd },
  'space-between': { name: 'space-between', icon: JustifyPositionSpaceBetween },
  'space-around': { name: 'space-around', icon: JustifyPositionSpaceAround },
  'space-evenly': { name: 'space-evenly', icon: JustifyPositionSpaceEvenly },
}

export const alignItemsDict: Record<AlignItems, alignItemsType> = {
  normal: { name: 'normal', icon: AlignPositionNormal },
  center: { name: 'center', icon: AlignPositionCenter },
  start: { name: 'start', icon: AlignPositionStart },
  end: { name: 'end', icon: AlignPositionEnd },
}

export const borderSideDict: Record<BorderSide, borderSideType> = {
  borderNone: { name: 'borderNone', icon: BorderNone },
  borderLeft: { name: 'borderLeft', icon: BorderLeft },
  borderRight: { name: 'borderRight', icon: BorderRight },
  borderTop: { name: 'borderTop', icon: BorderTop },
  borderBottom: { name: 'borderBottom', icon: BorderBottom },
  borderAll: { name: 'borderAll', icon: BorderAll },
}

export const directions: directionType[] = [
  { name: 'column', icon: IconColumns },
  { name: 'row', icon: IconAlignJustify },
]

export const borderWidths: BorderWidth[] = [
  'inherit',
  'medium',
  'thick',
  'thin',
  'initial',
  'revert',
  'unset',
]

export const borderStyle: borderStyleType[] = [
  { name: 'hidden', icon: BorderSolid },
  { name: 'solid', icon: BorderSolid },
  { name: 'dotted', icon: BorderDott },
  { name: 'dashed', icon: BorderDashed },
  { name: 'double', icon: BorderDouble },
  { name: 'groove', icon: BorderGroove },
  { name: 'inset', icon: BorderInset },
  { name: 'outset', icon: BorderOutset },
  { name: 'ridge', icon: BorderRidge },
]

export const justifyContentProps: justifyContentType[] = [
  { name: 'start', icon: JustifyPositionStart },
  { name: 'center', icon: JustifyPositionCenter },
  { name: 'end', icon: JustifyPositionEnd },
  { name: 'space-between', icon: JustifyPositionSpaceBetween },
  { name: 'space-around', icon: JustifyPositionSpaceAround },
  { name: 'space-evenly', icon: JustifyPositionSpaceEvenly },
]

export const alignItems: alignItemsType[] = [
  { name: 'normal', icon: AlignPositionNormal },
  { name: 'center', icon: AlignPositionCenter },
  { name: 'start', icon: AlignPositionStart },
  { name: 'end', icon: AlignPositionEnd },
]

export const borderSide: borderSideType[] = [
  { name: 'borderNone', icon: BorderNone },
  { name: 'borderLeft', icon: BorderLeft },
  { name: 'borderRight', icon: BorderRight },
  { name: 'borderTop', icon: BorderTop },
  { name: 'borderBottom', icon: BorderBottom },
  { name: 'borderAll', icon: BorderAll },
]
