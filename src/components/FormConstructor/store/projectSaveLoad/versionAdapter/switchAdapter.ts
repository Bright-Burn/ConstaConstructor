import type { SwitchProps } from '../../../coreTypes'

import type { SwitchProps_Deprecated } from './deprecatedTypes'
import type { GenericAdapter } from './genericAdapter'

export type SwitchAdapter = GenericAdapter<SwitchProps_Deprecated, SwitchProps>

export const switchAdapter: SwitchAdapter = (id, deprecated) => {
  console.log(`Run Switch adapter with id=${id}`)

  return {
    baseProps: deprecated.baseProps,
    className: deprecated.className,
    styles: {},
    uiLibProps: {
      align: deprecated.align,
      checked: deprecated.checked,
      disabled: deprecated.disabled,
      label: deprecated.label,
      size: deprecated.size,
      view: deprecated.view,
    },
  }
}
