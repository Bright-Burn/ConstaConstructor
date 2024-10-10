import type { DateTimePropType, DateTimePropView } from '@consta/uikit/DateTime'

import type { BaseProps } from '../../../../coreTypes'

export type DateTimeProps_Deprecated = {
  type?: DateTimePropType
  view?: DateTimePropView
  minDate?: Date | undefined
  maxDate?: Date | undefined
  currentVisibleDate?: Date
  multiplicityHours: number
  multiplicityMinutes: number
  multiplicitySeconds: number
  events: Date[]
} & BaseProps
