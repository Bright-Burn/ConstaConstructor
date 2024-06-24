import type { IconComponent, IconPropSize, IconPropView } from '@consta/icons/Icon'

import type { ConstaColor } from '../../ConstaPalette'

import {
  ActionIcon,
  ChartIcon,
  ColoredIcons,
  CommunicationIcon,
  CursorIcon,
  DirectionIcon,
  FilesIcon,
  FormattingIcons,
  GeoIcons,
  GeologyIcon,
  IndicesIcon,
  MenuIcon,
  NatureIcon,
  ObjectsIcon,
  SeismicIcon,
  SocialIcon,
  SortFilterIcon,
  TextIcon,
  WeatherIcon,
} from './icons'
import type {
  BaseProps,
  BrandProps,
  ConcreteSelectedElement,
  FormElementDictTypes,
  IFormElement,
} from './types'

export type IconNames = string

export type IconProps = {
  size?: IconPropSize
  view?: IconPropView
  icons: IconNames
  style?: IconElementStyles
} & BaseProps

export interface IFormElementIcon extends IFormElement {
  props: BrandIconProps
}

export type BrandIconProps = BrandProps<IconProps, 'Icon'>

export type IconElement = ConcreteSelectedElement<typeof FormElementDictTypes.Icon>

export const Icons: Record<string, IconComponent> = {
  ...ActionIcon,
  ...ChartIcon,
  ...ColoredIcons,
  ...CommunicationIcon,
  ...CursorIcon,
  ...DirectionIcon,
  ...FilesIcon,
  ...FormattingIcons,
  ...GeoIcons,
  ...GeologyIcon,
  ...IndicesIcon,
  ...MenuIcon,
  ...NatureIcon,
  ...ObjectsIcon,
  ...SeismicIcon,
  ...SocialIcon,
  ...SortFilterIcon,
  ...TextIcon,
  ...WeatherIcon,
} as const
export const icons = Object.keys(Icons)

export const IconsGroup: Record<string, string[]> = {
  ActionIcon: Object.keys(ActionIcon),
  ChartIcon: Object.keys(ChartIcon),
  ColoredIcons: Object.keys(ColoredIcons),
  CommunicationIcon: Object.keys(CommunicationIcon),
  CursorIcon: Object.keys(CursorIcon),
  DirectionIcon: Object.keys(DirectionIcon),
  FilesIcon: Object.keys(FilesIcon),
  FormattingIcons: Object.keys(FormattingIcons),
  GeoIcons: Object.keys(GeoIcons),
  GeologyIcon: Object.keys(GeologyIcon),
  IndicesIcon: Object.keys(IndicesIcon),
  MenuIcon: Object.keys(MenuIcon),
  NatureIcon: Object.keys(NatureIcon),
  ObjectsIcon: Object.keys(ObjectsIcon),
  SeismicIcon: Object.keys(SeismicIcon),
  SocialIcon: Object.keys(SocialIcon),
  SortFilterIcon: Object.keys(SortFilterIcon),
  TextIcon: Object.keys(TextIcon),
  WeatherIcon: Object.keys(WeatherIcon),
} as const

export type IconElementStyles = {
  color: ConstaColor | undefined
}
