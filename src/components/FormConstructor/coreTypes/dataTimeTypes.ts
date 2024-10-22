import type { DateTimePropType, DateTimePropView } from '@consta/uikit/DateTime'

import type { InstanceProps } from './instanceProps'
import type {
  BrandProps,
  ConcreteSelectedView,
  FormElementDictTypes,
  IFormElement,
  OmitInstanceId,
} from './types'

type UiLibProps = {
  type?: DateTimePropType
  view?: DateTimePropView
  minDate?: Date | undefined
  maxDate?: Date | undefined
  currentVisibleDate?: Date
  multiplicityHours: number
  multiplicityMinutes: number
  multiplicitySeconds: number
  events: Date[]
}

export type DateTimeProps = InstanceProps<UiLibProps, Record<string, never>>

export type BrandDateTimeProps = BrandProps<DateTimeProps, 'DataTime'>

export type DataTimeElement = ConcreteSelectedView<typeof FormElementDictTypes.DataTime>

export type IFormElementDataTime = OmitInstanceId<
  IFormElement & {
    props: BrandDateTimeProps
  }
>
