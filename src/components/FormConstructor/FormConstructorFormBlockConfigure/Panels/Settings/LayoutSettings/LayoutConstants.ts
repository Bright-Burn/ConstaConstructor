import type { IconComponent } from '@consta/icons/Icon'
import { IconEyeClose } from '@consta/icons/IconEyeClose'

import type {
  AlignItems,
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
  BorderDashed,
  BorderDott,
  BorderDouble,
  BorderGroove,
  BorderInset,
  BorderOutset,
  BorderRidge,
  BorderSolid,
  JustifyPositionCenter,
  JustifyPositionEnd,
  JustifyPositionSpaceAround,
  JustifyPositionSpaceBetween,
  JustifyPositionSpaceEvenly,
  JustifyPositionStart,
} from './images'

type directionType = { name: LayoutPropDirection }
type borderStyleType = { name: BorderStyle; icon: IconComponent }
type justifyContentType = { name: JustifyContentProps; icon: IconComponent }
type alignItemsType = { name: AlignItems; icon: IconComponent }

export const directionDict: Record<LayoutPropDirection, directionType> = {
  column: { name: 'column' },
  row: { name: 'row' },
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

export const directions: directionType[] = [{ name: 'column' }, { name: 'row' }]

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
  { name: 'hidden', icon: IconEyeClose },
  { name: 'solid', icon: BorderSolid },
  { name: 'dotted', icon: BorderDott },
  { name: 'dashed', icon: BorderDashed },
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

export type overflowType = 'inherit' | 'scroll' | 'hidden' | 'auto'
export const overflow: overflowType[] = ['inherit', 'scroll', 'hidden', 'auto']
