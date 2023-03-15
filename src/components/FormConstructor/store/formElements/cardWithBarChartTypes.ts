import { BaseProps, IFormElement } from './types'

export type cardWithChartProps = {
  children?: never
} & BaseProps

export interface IFormElementCardWithChart extends IFormElement {
  props: cardWithChartProps
}
