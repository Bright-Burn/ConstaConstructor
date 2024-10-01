import type { CardProps } from '../../../coreTypes'

import type { CardProps_Deprecated } from './deprecatedTypes'
import type { GenericAdapter } from './genericAdapter'

export type CardAdapter = GenericAdapter<CardProps_Deprecated, CardProps>

export const cardAdapter: CardAdapter = (id, deprecated) => {
  return {
    baseProps: deprecated.baseProps,
    className: deprecated.className,
    styles: deprecated.styles || {},
    uiLibProps: {
      border: deprecated.constaProps.border,
      form: deprecated.constaProps.form,
      horizontalSpace: deprecated.constaProps.horizontalSpace,
      shadow: deprecated.constaProps.shadow,
      status: deprecated.constaProps.status,
      verticalSpace: deprecated.constaProps.verticalSpace,
    },
  }
}
