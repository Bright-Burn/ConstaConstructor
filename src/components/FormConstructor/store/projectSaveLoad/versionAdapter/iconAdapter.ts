import type { IconProps } from '../../../coreTypes'

import type { IconProps_Deprecated } from './deprecatedTypes'
import type { GenericAdapter } from './genericAdapter'

export type IconAdapter = GenericAdapter<IconProps_Deprecated, IconProps>

export const iconAdapter: IconAdapter = (id, deprecated) => {
  console.info(`Run adapter for Icon instance with id=${id}`)

  return {
    baseProps: deprecated.baseProps,
    className: deprecated.className,
    styles: {
      color: deprecated.style?.color,
    },
    uiLibProps: {
      icons: deprecated.icons,
      size: deprecated.size,
      view: deprecated.view,
    },
  }
}
