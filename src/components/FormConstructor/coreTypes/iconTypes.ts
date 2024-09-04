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
  HumanIcons,
  IndicesIcon,
  MapIcon,
  MediaIcon,
  MenuIcon,
  NatureIcon,
  ObjectsIcon,
  SeismicIcon,
  SocialIcon,
  SolverIcon,
  SortFilterIcon,
  TextIcon,
  ToolsIcon,
  WeatherIcon,
  WellIcon,
} from './icons'
import type {
  BaseProps,
  BrandProps,
  ConcreteSelectedView,
  FormElementDictTypes,
  IFormElement,
  OmitInstanceId,
} from './types'

export type IconNames = string

export type IconProps = {
  size?: IconPropSize
  view?: IconPropView
  icons: IconNames
  style?: IconElementStyles
} & BaseProps

export type IFormElementIcon = OmitInstanceId<
  IFormElement & {
    props: BrandIconProps
  }
>

export type BrandIconProps = BrandProps<IconProps, 'Icon'>

export type IconElement = ConcreteSelectedView<typeof FormElementDictTypes.Icon>

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
  ...HumanIcons,
  ...IndicesIcon,
  ...MapIcon,
  ...MediaIcon,
  ...MenuIcon,
  ...NatureIcon,
  ...ObjectsIcon,
  ...SeismicIcon,
  ...SocialIcon,
  ...SolverIcon,
  ...SortFilterIcon,
  ...TextIcon,
  ...ToolsIcon,
  ...WeatherIcon,
  ...WellIcon,
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
  HumanIcons: Object.keys(HumanIcons),
  IndicesIcon: Object.keys(IndicesIcon),
  MapIcon: Object.keys(MapIcon),
  MediaIcon: Object.keys(MediaIcon),
  MenuIcon: Object.keys(MenuIcon),
  NatureIcon: Object.keys(NatureIcon),
  ObjectsIcon: Object.keys(ObjectsIcon),
  SeismicIcon: Object.keys(SeismicIcon),
  SocialIcon: Object.keys(SocialIcon),
  SolverIcon: Object.keys(SolverIcon),
  SortFilterIcon: Object.keys(SortFilterIcon),
  TextIcon: Object.keys(TextIcon),
  ToolsIcon: Object.keys(ToolsIcon),
  WeatherIcon: Object.keys(WeatherIcon),
  WellIcon: Object.keys(WellIcon),
} as const

export type IconElementStyles = {
  color: ConstaColor | undefined
}
