import type { LayoutElementPropsStyles } from '../../../coreTypes'

import { classNameAdapter } from './classNameAdapter'
import type { LayoutElementPropsStyles_Deprecated } from './deprecatedTypes'
import type { GenericAdapter } from './genericAdapter'

export type LayoutAdapter = GenericAdapter<
  LayoutElementPropsStyles_Deprecated,
  LayoutElementPropsStyles
>

export const layoutAdapter: LayoutAdapter = (id, deprecated) => {
  console.log(`Run layout adapter with id=${id}`)

  return {
    baseProps: deprecated.baseProps,
    className: classNameAdapter(deprecated.className),
    styles: deprecated.styles,
    uiLibProps: deprecated.constaProps,
  }
}
