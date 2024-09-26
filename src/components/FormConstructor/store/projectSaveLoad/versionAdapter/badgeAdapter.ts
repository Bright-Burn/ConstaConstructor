import type { BadgeProps } from '../../../coreTypes'

import type { BadgeProps_Deprecated } from './deprecatedTypes'

export type BadgeAdapter = (
  buttonInstanceId: string,
  deprecated: BadgeProps_Deprecated,
) => BadgeProps

export const badgeAdapter: BadgeAdapter = (id, deprecated) => {
  console.info(`Run adapter for Button instance with id=${id}`)

  const props: BadgeProps = {
    baseProps: deprecated.baseProps,
    className: deprecated.className,
    styles: {},
    constaProps: {
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
