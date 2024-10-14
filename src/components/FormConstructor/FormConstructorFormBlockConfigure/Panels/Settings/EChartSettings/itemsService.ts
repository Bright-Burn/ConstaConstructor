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
    newProps.props.styles = { ...newProps.props.styles }

    if (value && value !== '0') {
      let newValue = value
      if (value.startsWith('0')) {
        newValue = newValue.replace('0', '')
      }
      newProps.props.styles.height = `${newValue}px`
      onDispatch(selectedViewId, newProps)
    } else {
      newProps.props.styles.height = undefined
      onDispatch(selectedViewId, newProps)
    }
  }

  const onChangeWidth = (value: string | null) => {
    const newProps: BrandEChartProps = {
      props: { ...selectedViewProps },
      type: 'EChart',
    }
    newProps.props.styles = { ...newProps.props.styles }

    if (value && value !== '0') {
      let newValue = value
      if (value.startsWith('0')) {
        newValue = newValue.replace('0', '')
      }
      newProps.props.styles.width = `${newValue}px`
      onDispatch(selectedViewId, newProps)
    } else {
      newProps.props.styles.width = undefined
      onDispatch(selectedViewId, newProps)
    }
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
