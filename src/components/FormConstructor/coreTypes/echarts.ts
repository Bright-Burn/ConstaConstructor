import type { InstanceProps } from './instanceProps'
import type {
  BrandProps,
  ConcreteSelectedView,
  FormElementDictTypes,
  IFormElement,
  OmitInstanceId,
} from './types'

type UiLibProps = {
  options: string
}

type Styles = {
  width: number
  height: number
}

export type EChartProps = InstanceProps<UiLibProps, Styles>

export type BrandEChartProps = BrandProps<EChartProps, 'EChart'>

export type EChartFormElement = ConcreteSelectedView<typeof FormElementDictTypes.EChart>

export type IFormElementEChart = OmitInstanceId<
  IFormElement & {
    props: BrandEChartProps
  }
>
