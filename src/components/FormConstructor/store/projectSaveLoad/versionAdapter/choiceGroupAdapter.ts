import type {
  ChoiceGroupProps,
  MultipleChoiceGroupProps,
  SingleChoiceGroupProps,
} from '../../../coreTypes'

import type {
  ChoiceGroupProps_Deprecated,
  MultipleChoiceGroupProps_Deprecated,
} from './deprecatedTypes'
import type { GenericAdapter } from './genericAdapter'

export type ChoiceGroupAdapter = GenericAdapter<ChoiceGroupProps_Deprecated, ChoiceGroupProps>

export const choiceGroupAdapter: ChoiceGroupAdapter = (id, deprecated) => {
  console.log(`Run ChoiceGroup adapter with id=${id}`)

  let props: SingleChoiceGroupProps | MultipleChoiceGroupProps | null = null

  if (isMultiple(deprecated)) {
    props = {
      items: deprecated.items,
      view: deprecated.view,
      size: deprecated.size,
      form: deprecated.form,
      name: deprecated.name,
      multiple: true,
      value: deprecated.value,
      disabled: deprecated.disabled,
      onlyIcon: deprecated.onlyIcon,
      width: deprecated.width,
    }
  } else {
    props = {
      items: deprecated.items,
      view: deprecated.view,
      size: deprecated.size,
      form: deprecated.form,
      name: deprecated.name,
      multiple: false,
      value: deprecated.value,
      disabled: deprecated.disabled,
      onlyIcon: deprecated.onlyIcon,
      width: deprecated.width,
    }
  }

  return {
    uiLibProps: props,
    baseProps: deprecated.baseProps,
    className: deprecated.className,
    styles: {},
  }
}
const isMultiple = (
  deprecated: ChoiceGroupProps_Deprecated,
): deprecated is MultipleChoiceGroupProps_Deprecated => {
  return deprecated.multiple === true
}
