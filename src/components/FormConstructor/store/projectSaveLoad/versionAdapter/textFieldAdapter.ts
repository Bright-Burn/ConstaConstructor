import type { TextFieldProps } from '../../../coreTypes'

import { classNameAdapter } from './classNameAdapter'
import type { TextFieldProps_Deprecated } from './deprecatedTypes'
import type { GenericAdapter } from './genericAdapter'

export type TextFieldAdapter = GenericAdapter<TextFieldProps_Deprecated, TextFieldProps>

export const textFieldAdapter: TextFieldAdapter = (id, deprecated) => {
  console.log(`Run TextField adapter with id=${id}`)

  return {
    baseProps: deprecated.baseProps,
    className: classNameAdapter(deprecated.className),
    styles: {
      filled: deprecated.filled,
    },
    uiLibProps: {
      caption: deprecated.caption,
      disabled: deprecated.disabled,
      form: deprecated.form,
      incrementButtons: deprecated.incrementButtons,
      label: deprecated.label,
      labelPosition: deprecated.labelPosition,
      max: deprecated.max,
      maxLength: deprecated.maxLength,
      maxRows: deprecated.maxRows,
      min: deprecated.min,
      minRows: deprecated.minRows,
      placeholder: deprecated.placeholder,
      required: deprecated.required,
      rows: deprecated.rows,
      size: deprecated.size,
      status: deprecated.status,
      step: deprecated.step,
      type: deprecated.type,
      value: deprecated.value,
      view: deprecated.view,
      withClearButton: deprecated.withClearButton,
    },
  }
}
