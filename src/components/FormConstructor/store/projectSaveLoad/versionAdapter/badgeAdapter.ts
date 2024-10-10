import type { BadgeProps } from '../../../coreTypes'

import type { BadgeProps_Deprecated } from './deprecatedTypes'
import type { GenericAdapter } from './genericAdapter'

export type BadgeAdapter = GenericAdapter<BadgeProps_Deprecated, BadgeProps>

export const badgeAdapter: BadgeAdapter = (id, deprecated) => {
  console.info(`Run adapter for Badge instance with id=${id}`)

  const props: BadgeProps = {
    baseProps: deprecated.baseProps,
    className: deprecated.className,
    styles: {},
    uiLibProps: {
      form: deprecated.form,
      iconLeft: deprecated.iconLeft,
      iconRight: deprecated.iconRight,
      label: deprecated.label,
      minified: deprecated.minified,
      size: deprecated.size,
      status: deprecated.status,
      view: deprecated.view,
    },
  }
  return props
}
