import { DateTimePropType, DateTimePropView } from '@consta/uikit/DateTime'
import {
  BaseProps,
  BrandProps,
  ConcreteSelectedElement,
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
} & BaseProps

export type BrandDataTimeProps = BrandProps<DataTimeProps, 'DataTime'>

export type DataTimeElement = ConcreteSelectedElement<typeof FormElementDictTypes.DataTime>

export interface IFormElementDataTime extends IFormElement {
  props: BrandDataTimeProps
}
