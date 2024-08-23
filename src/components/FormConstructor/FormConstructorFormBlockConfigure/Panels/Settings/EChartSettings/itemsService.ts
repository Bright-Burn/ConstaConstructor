import type React from 'react'

import type { BrandEChartProps, EChartProps } from '../../../../coreTypes'
import { setInstanceProps, useAppDispatch } from '../../../../store'
import { readFile } from '../../../../utils'

export const useItemsHandlers = (selectedElementProps: EChartProps, selectedElementId: string) => {
  const dispatch = useAppDispatch()

  const onDispatch = (selectedElementId: string, newProps: BrandEChartProps) => {
    dispatch(setInstanceProps(selectedElementId, newProps))
  }
  const onChangeHeight = (value: string | null) => {
    const newProps: BrandEChartProps = {
      props: { ...selectedElementProps },
      type: 'EChart',
    }
    newProps.props = { ...newProps.props }

    const newValue = Number(value)

    newProps.props.height = value != null ? newValue : 1
    onDispatch(selectedElementId, newProps)
  }

  const onChangeWidth = (value: string | null) => {
    const newProps: BrandEChartProps = {
      props: { ...selectedElementProps },
      type: 'EChart',
    }
    newProps.props = { ...newProps.props }

    const newValue = Number(value)

    newProps.props.width = value != null ? newValue : 1
    onDispatch(selectedElementId, newProps)
  }
  const onDownload = (event: DragEvent | React.ChangeEvent) => {
    const target = event.target as EventTarget & HTMLInputElement
    if (target.files) {
      const file = target.files[0]
      readFile(file).then(json => {
        const newProps: BrandEChartProps = {
          props: { ...selectedElementProps },
          type: 'EChart',
        }
        newProps.props = { ...newProps.props }
        newProps.props.options = json
        onDispatch(selectedElementId, newProps)
      })
    }
  }
  return {
    onChangeHeight,
    onChangeWidth,
    onDownload,
  }
}
