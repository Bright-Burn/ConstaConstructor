import { ChoiceGroupProps } from '../../../coreTypes'
import type { ChoiceGroupProps_Deprecated } from './deprecatedTypes'
import type { GenericAdapter } from './genericAdapter'

export type ChoiceGroupAdapter = GenericAdapter<ChoiceGroupProps_Deprecated, ChoiceGroupProps>

export const choiceGroupAdapter: ChoiceGroupAdapter = (id, deprecated) => {
  console.log(`Run ChoiceGroup adapter with id=${id}`)

  return {
    baseProps: deprecated.baseProps,
    className: deprecated.className,
    styles: {},
    uiLibProps: {
      items: deprecated.items,
      name: deprecated.name,
      width: deprecated.width,
      disabled: deprecated.disabled,
      form: deprecated.form,
      multiple: deprecated.multiple,
    },
  }
}
