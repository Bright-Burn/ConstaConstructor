import type { BaseProps, BrandProps, IFormElement } from './types'

export type cardWithChartProps = {
  children?: never
} & BaseProps

export interface IFormElementCardWithChart extends IFormElement<'CardWithBarChart'> {
  props: BrandCardWithChartProps
}
export type BrandCardWithChartProps = BrandProps<cardWithChartProps, 'CardWithBarChart'>
