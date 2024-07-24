import type { DateTimePropType, DateTimePropView } from '@consta/uikit/DateTime'

import type {
  BaseProps,
  BrandProps,
  ConcreteSelectedElement,
  OmitInstanceId,
  FormElementDictTypes,
  IFormElement,
} from './types'

export type DataTimeProps = {
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

export type BrandDataTimeProps = BrandProps<DataTimeProps, 'DataTime'>

export type DataTimeElement = ConcreteSelectedElement<typeof FormElementDictTypes.DataTime>

export type IFormElementDataTime = OmitInstanceId<
  IFormElement & {
    props: BrandDataTimeProps
  }
>
