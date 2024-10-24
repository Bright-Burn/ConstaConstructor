import type { ComboboxProps } from '../../../coreTypes'

import { classNameAdapter } from './classNameAdapter'
import type { ComboboxProps_Deprecated } from './deprecatedTypes'
import type { GenericAdapter } from './genericAdapter'

export type ComboboxAdaper = GenericAdapter<ComboboxProps_Deprecated, ComboboxProps>
export const comboboxAdapter: ComboboxAdaper = (id, deprecated) => {
  console.log(`Run adapter for ComboBox instance with ${id}`)
  return {
    baseProps: deprecated.baseProps,
    className: classNameAdapter(deprecated.className),
    styles: {
      filled: deprecated.filled,
      maxWidth: deprecated.filled ? undefined : deprecated.style?.maxWidth,
      minWidth: deprecated.filled ? undefined : deprecated.style?.minWidth,
    },
    uiLibProps: {
      groups: deprecated.groups,
      items: deprecated.items,
      caption: deprecated.caption,
      disabled: deprecated.disabled,
      dropdownForm: deprecated.dropdownForm,
      form: deprecated.form,
      groupsActive: deprecated.groupsActive,
      isLoading: deprecated.isLoading,
      label: deprecated.label,
      labelPosition: deprecated.labelPosition,
      multiple: deprecated.multiple,
      placeholder: deprecated.placeholder,
      required: deprecated.required,
      size: deprecated.size,
      status: deprecated.status,
      value: deprecated.value,
      view: deprecated.view,
    },
  }
}
