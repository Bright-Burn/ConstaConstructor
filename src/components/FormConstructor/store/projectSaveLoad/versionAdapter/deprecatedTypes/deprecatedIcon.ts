import type { IconPropSize, IconPropView } from '@consta/icons/Icon'

import type { ConstaColor } from '../../../../../ConstaPalette'
import type { BaseProps, IconNames } from '../../../../coreTypes'

type IconElementStyles = {
  color: ConstaColor | undefined
}

export type IconProps_Deprecated = {
  size?: IconPropSize
  view?: IconPropView
  icons: IconNames
  style?: IconElementStyles
} & BaseProps
