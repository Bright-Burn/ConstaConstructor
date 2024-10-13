import type { InstanceProps } from './instanceProps'
import type {
  BaseProps,
  BrandProps,
  ConcreteSelectedView,
  FormElementDictTypes,
  IFormElement,
  OmitInstanceId,
} from './types'

type UiLibProps = {
  options: string
}

export type EChartProps = InstanceProps<
  UiLibProps,
  {
    width: number
    height: number
  }
>

export type BrandEChartProps = BrandProps<EChartProps, 'EChart'>

export type EChartFormElement = ConcreteSelectedView<typeof FormElementDictTypes.EChart>

export type IFormElementEChart = OmitInstanceId<
  IFormElement & {
    props: BrandEChartProps
  }
>
