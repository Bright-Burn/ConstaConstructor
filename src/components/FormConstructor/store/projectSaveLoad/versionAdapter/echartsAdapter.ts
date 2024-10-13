import type { EChartProps } from '../../../coreTypes'

import type { EChartProps_Deprecated } from './deprecatedTypes'
import type { GenericAdapter } from './genericAdapter'

export type EchartsAdapter = GenericAdapter<EChartProps_Deprecated, EChartProps>

export const echartAdapter: EchartsAdapter = (id, deprecated) => {
  console.log(`Run Echarts adapter with id=${id}`)

  return {
    baseProps: deprecated.baseProps,
    className: deprecated.className,
    styles: {
      height: deprecated.height,
      width: deprecated.width,
    },
    uiLibProps: {
      options: deprecated.options,
    },
  }
}
