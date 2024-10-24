import type { InformerElementProps } from '../../../coreTypes'

import { classNameAdapter } from './classNameAdapter'
import type { InformerElementProps_Deprecated } from './deprecatedTypes'
import type { GenericAdapter } from './genericAdapter'

export type InformerAdapter = GenericAdapter<InformerElementProps_Deprecated, InformerElementProps>

export const informerAdapter: InformerAdapter = (id, deprecated) => {
  console.log(`Run Informer adapter with id=${id}`)

  return {
    baseProps: deprecated.baseProps,
    className: classNameAdapter(deprecated.className),
    styles: {},
    uiLibProps: {
      // В текущих настройках informer, не предусмотрена установка иконки, нужно будет доделать
      icon: undefined,
      label: deprecated.label,
      size: deprecated.size,
      status: deprecated.status,
      title: deprecated.title,
      view: deprecated.view,
    },
  }
}
