import type {
  BaseProps,
  BrandProps,
  ConcreteSelectedElement,
  FormElementDictTypes,
  IFormElement,
  OmitInstanceId,
} from './types'

export type EChartProps = {
  options: string
  width: number
  height: number
} & BaseProps
export type BrandEChartProps = BrandProps<EChartProps, 'EChart'>

export type EChartFormElement = ConcreteSelectedElement<typeof FormElementDictTypes.EChart>

export type IFormElementEChart = OmitInstanceId<
  IFormElement & {
    props: BrandEChartProps
  }
>
