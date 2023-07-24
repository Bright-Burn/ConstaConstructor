import { DateTimePropType, DateTimePropView } from '@consta/uikit/DateTime'
import { BaseProps, IFormElement } from './types'

export type DataTimeProps = {
  type?: DateTimePropType
  view?: DateTimePropView
  minDate?: Date | undefined
  maxDate?: Date | undefined
  currentVisibleDate?: Date
  multiplicityHours: number
  multiplicityMinutes: number
  multiplicitySeconds: number
} & BaseProps

export interface IFormElementDataTime extends IFormElement {
  props: DataTimeProps
}
