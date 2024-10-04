import type { DatePickerProps } from '../../../coreTypes'

import type { DatePickerProps_Deprecated } from './deprecatedTypes'
import type { GenericAdapter } from './genericAdapter'

export type DatePickerAdapter = GenericAdapter<DatePickerProps_Deprecated, DatePickerProps>

export const datePickerAdapter: DatePickerAdapter = (id, deprecated) => {
  console.log(`Run DatePicker adapter with id=${id}`)

  return {
    baseProps: deprecated.baseProps,
    uiLibProps: {
      caption: deprecated.caption,
      events: deprecated.events,
      dateTimeView: deprecated.dateTimeView,
      disabled: deprecated.disabled,
      dropdownForm: deprecated.dropdownForm,
      form: deprecated.form,
      label: deprecated.label,
      labelPosition: deprecated.labelPosition,
      maxDate: deprecated.maxDate,
      minDate: deprecated.minDate,
      required: deprecated.required,
      size: deprecated.size,
      status: deprecated.status,
      type: deprecated.type,
      value: deprecated.value,
      view: deprecated.view,
      withAdditionalControls: deprecated.withAdditionalControls,
      withClearButton: deprecated.withClearButton,
    },
    className: deprecated.className,
    styles: {},
  }
}
