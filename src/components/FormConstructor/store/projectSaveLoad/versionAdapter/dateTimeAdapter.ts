import type { DateTimeProps } from '../../../coreTypes'

import { classNameAdapter } from './classNameAdapter'
import type { DateTimeProps_Deprecated } from './deprecatedTypes'
import type { GenericAdapter } from './genericAdapter'

export type DateTimeAdapter = GenericAdapter<DateTimeProps_Deprecated, DateTimeProps>

export const dateTimeAdapter: DateTimeAdapter = (id, deprecated) => {
  console.log(`Run DateTime adapter with id=${id}`)

  return {
    baseProps: deprecated.baseProps,
    className: classNameAdapter(deprecated.className),
    styles: {},
    uiLibProps: {
      events: deprecated.events,
      multiplicityHours: deprecated.multiplicityHours,
      multiplicityMinutes: deprecated.multiplicityMinutes,
      multiplicitySeconds: deprecated.multiplicitySeconds,
      currentVisibleDate: deprecated.currentVisibleDate,
      maxDate: deprecated.maxDate,
      minDate: deprecated.minDate,
      type: deprecated.type,
      view: deprecated.view,
    },
  }
}
