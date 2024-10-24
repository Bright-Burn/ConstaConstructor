import type { CardProps } from '../../../coreTypes'

import { classNameAdapter } from './classNameAdapter'
import type { CardProps_Deprecated } from './deprecatedTypes'
import type { GenericAdapter } from './genericAdapter'

export type CardAdapter = GenericAdapter<CardProps_Deprecated, CardProps>

export const cardAdapter: CardAdapter = (id, deprecated) => {
  console.info(`Run adapter for Card instance with id=${id}`)

  return {
    baseProps: deprecated.baseProps,
    className: classNameAdapter(deprecated.className),
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
