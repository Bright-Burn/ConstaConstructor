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
      props: {
        ...selectedViewProps,
        styles: {
          ...selectedViewProps.styles,
        },
      },
      type: 'EChart',
    }

    const newValue = Number(value)

    newProps.props.styles.height = value != null ? newValue : 1
    onDispatch(selectedViewId, newProps)
  }

  const onChangeWidth = (value: string | null) => {
    const newProps: BrandEChartProps = {
      props: {
        ...selectedViewProps,
        styles: {
          ...selectedViewProps.styles,
        },
      },
      type: 'EChart',
    }

    const newValue = Number(value)

    newProps.props.styles.width = value != null ? newValue : 1
    onDispatch(selectedViewId, newProps)
  }
  const onDownload = (event: DragEvent | React.ChangeEvent) => {
    const target = event.target as EventTarget & HTMLInputElement
    if (target.files) {
      const file = target.files[0]
      readFile(file).then(json => {
        const newProps: BrandEChartProps = {
          props: {
            ...selectedViewProps,
            uiLibProps: {
              ...selectedViewProps.uiLibProps,
              options: json,
            },
          },
          type: 'EChart',
        }
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
