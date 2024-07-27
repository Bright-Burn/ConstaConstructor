import type { BaseProps, BrandProps, IFormElement, OmitInstanceId } from './types'

export type cardWithChartProps = {
  children?: never
} & BaseProps

export type IFormElementCardWithChart = OmitInstanceId<
  IFormElement<'CardWithBarChart'> & {
    props: BrandCardWithChartProps
  }
>
export type BrandCardWithChartProps = BrandProps<cardWithChartProps, 'CardWithBarChart'>
