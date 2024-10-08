import type { SelectProps } from '../../../coreTypes'

import type { SelectProps_Deprecated } from './deprecatedTypes'
import type { GenericAdapter } from './genericAdapter'

export type SelectAdapter = GenericAdapter<SelectProps_Deprecated, SelectProps>

export const selectAdapter: SelectAdapter = (id, deprecated) => {
  return {
    baseProps: deprecated.baseProps,
    className: deprecated.className,
    styles: {
      filled: deprecated.filled,
      maxWidth: deprecated.style?.maxWidth,
      minWidth: deprecated.style?.minWidth,
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
      placeholder: deprecated.placeholder,
      required: deprecated.required,
      size: deprecated.size,
      status: deprecated.status,
      value: deprecated.value,
      view: deprecated.view,
    },
  }
}
