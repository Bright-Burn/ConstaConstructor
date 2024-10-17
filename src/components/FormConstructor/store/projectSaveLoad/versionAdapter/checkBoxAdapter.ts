import type { CheckboxProps } from '../../../coreTypes'

import { classNameAdapter } from './classNameAdapter'
import type { CheckboxProps_Deprecated } from './deprecatedTypes'
import type { GenericAdapter } from './genericAdapter'

export type CheckBoxAdapter = GenericAdapter<CheckboxProps_Deprecated, CheckboxProps>

export const checkBoxAdapter: CheckBoxAdapter = (id, deprecated) => {
  console.info(`Run adapter for CheckBox instance with id=${id}`)
  return {
    baseProps: deprecated.baseProps,
    className: classNameAdapter(deprecated.className),
    styles: {},
    uiLibProps: {
      checked: deprecated.checked,
      align: deprecated.align,
      disabled: deprecated.disabled,
      intermediate: deprecated.intermediate,
      label: deprecated.label,
      size: deprecated.size,
      view: deprecated.view,
    },
  }
}
