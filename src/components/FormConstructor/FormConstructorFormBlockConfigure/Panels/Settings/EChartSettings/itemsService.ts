import type React from 'react'

import type { BrandEChartProps, EChartProps } from '../../../../coreTypes'
import { setInstanceProps, useAppDispatch } from '../../../../store'
import { readFile } from '../../../../utils'

export const useItemsHandlers = (selectedViewProps: EChartProps, selectedViewId: string) => {
  const dispatch = useAppDispatch()

  const onDispatch = (selectedViewId: string, newProps: BrandEChartProps) => {
    dispatch(setInstanceProps(selectedViewId, newProps))
  }
  const onChangeHeight = (value: string | null) => {
    const newProps: BrandEChartProps = {
      props: { ...selectedViewProps },
      type: 'EChart',
    }
    newProps.props = { ...newProps.props }

    const newValue = Number(value)

    newProps.props.height = value != null ? newValue : 1
    onDispatch(selectedViewId, newProps)
  }

  const onChangeWidth = (value: string | null) => {
    const newProps: BrandEChartProps = {
      props: { ...selectedViewProps },
      type: 'EChart',
    }
    newProps.props = { ...newProps.props }

    const newValue = Number(value)

    newProps.props.width = value != null ? newValue : 1
    onDispatch(selectedViewId, newProps)
  }
  const onDownload = (event: DragEvent | React.ChangeEvent) => {
    const target = event.target as EventTarget & HTMLInputElement
    if (target.files) {
      const file = target.files[0]
      readFile(file).then(json => {
        const newProps: BrandEChartProps = {
          props: { ...selectedViewProps },
          type: 'EChart',
        }
        newProps.props = { ...newProps.props }
        newProps.props.options = json
        onDispatch(selectedViewId, newProps)
      })
    }
  }
  return {
    onChangeHeight,
    onChangeWidth,
    onDownload,
  }
}
