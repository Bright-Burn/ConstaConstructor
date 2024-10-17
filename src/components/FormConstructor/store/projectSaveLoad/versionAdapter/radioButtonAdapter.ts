import type { RadioButtonProps } from '../../../coreTypes'

import { classNameAdapter } from './classNameAdapter'
import type { RadioButtonProps_Deprecated } from './deprecatedTypes'
import type { GenericAdapter } from './genericAdapter'

export type RadioButtonAdapter = GenericAdapter<RadioButtonProps_Deprecated, RadioButtonProps>

export const radioButtonAdapter: RadioButtonAdapter = (id, deprecated) => {
  console.log(`Run adapter for RadioButton instance with ${id}`)

  return {
    baseProps: deprecated.baseProps,
    className: classNameAdapter(deprecated.className),
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
