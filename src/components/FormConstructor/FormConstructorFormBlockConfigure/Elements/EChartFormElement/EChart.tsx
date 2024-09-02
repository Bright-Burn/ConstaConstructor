import type { FC } from 'react'
import React, { useEffect } from 'react'
import type { EChartsType } from 'echarts'
import { init, registerTheme } from 'echarts'

import { ElementTypes, FormElementDictTypes } from '../../../coreTypes'
import { formInstancePropsSelector, useAppSelector } from '../../../store'
import { SelectableLayer } from '../../SelectableLayer'

import { defaultTheme } from './defaultTheme'
import type { IEChartFormElement } from './types'
//регисрация темы для чарта
registerTheme('default', defaultTheme)

export const EChartFormElement: FC<IEChartFormElement> = ({ element }) => {
  const props = useAppSelector(formInstancePropsSelector(element.instanceId, element.type))?.props
  const width = props?.width
  const height = props?.height
  const ref = React.useRef(null)
  const chartRef = React.useRef<EChartsType | null>(null)
  useEffect(() => {
    //TODO при смене темы надо прописывать название в init
    const myChart = init(ref.current, 'default')
    chartRef.current = myChart
    myChart.setOption({
      title: {
        text: 'ECharts Getting Started Example',
      },
      tooltip: {},
      xAxis: {
        data: ['shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks', 'box'],
      },
      yAxis: {},
      series: [
        {
          name: 'sales',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20, 30],
        },
      ],
    })
    myChart.resize({
      width: 400,
      height: 400,
    })
  }, [])

  useEffect(() => {
    chartRef.current?.resize({
      width: props?.width ?? 400,
      height: props?.height ?? 400,
    })
  }, [props?.height, props?.width])
  useEffect(() => {
    if (props?.options) {
      try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const options = JSON.parse(props.options)
        chartRef.current?.clear()
        chartRef.current?.setOption(options)
      } catch (e) {
        console.log('L61  === невалидный Options в Echart')
      }
    }
  }, [props?.options])
  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementDictTypes.EChart}>
      <div ref={ref} style={{ width: width ?? '400px', height: height ?? '400px' }} />
    </SelectableLayer>
  )
}
