import type React from 'react'

import type {
  BrandEChartProps,
  EChartFormElement,
  EChartProps,
  ISelectedElement,
} from '../../../../coreTypes'
import { setInstanceProps, useAppDispatch } from '../../../../store'
import { readFile } from '../../../../utils'

export const useItemsHandlers = (
  selectedElementProps: EChartProps,
  selectedElement: EChartFormElement,
) => {
  const dispatch = useAppDispatch()

  const onDispatch = (selectedElement: ISelectedElement, newProps: BrandEChartProps) => {
    dispatch(setInstanceProps(selectedElement.elementId, newProps))
  }
  const onChangeHeight = (value: string | null) => {
    const newProps: BrandEChartProps = {
      props: { ...selectedElementProps },
      type: 'EChart',
    }
    newProps.props = { ...newProps.props }

    const newValue = Number(value)

    newProps.props.height = value != null ? newValue : 1
    onDispatch(selectedElement, newProps)
  }

  const onChangeWidth = (value: string | null) => {
    const newProps: BrandEChartProps = {
      props: { ...selectedElementProps },
      type: 'EChart',
    }
    newProps.props = { ...newProps.props }

    const newValue = Number(value)

    newProps.props.width = value != null ? newValue : 1
    onDispatch(selectedElement, newProps)
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
        onDispatch(selectedElement, newProps)
      })
    }
  }
  return {
    onChangeHeight,
    onChangeWidth,
    onDownload,
  }
}
