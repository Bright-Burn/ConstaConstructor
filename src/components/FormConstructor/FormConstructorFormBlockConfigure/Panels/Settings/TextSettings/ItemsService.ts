import type React from 'react'
import type { TextPropView } from '@consta/uikit/Text'

import type { ConstaColor } from '../../../../../ConstaPalette'
import type {
  BrandTextElementProps,
  IselectedView,
  textDecorationType,
  TextElement,
  TextElementProps,
} from '../../../../coreTypes'
import { setInstanceProps, useAppDispatch } from '../../../../store'

import type { ValueTypes } from './types'

export const useItemsHandlers = (
  selectedViewProps: TextElementProps,
  selectedView: TextElement,
) => {
  const dispatch = useAppDispatch()
  const onChangeField = (value: ValueTypes, field: keyof TextElementProps) => {
    const newProps: BrandTextElementProps = {
      props: { ...selectedViewProps, [field]: value },
      type: 'Text',
    }
    onDispatch(selectedView, newProps)
  }
  const onChangeView = (value: TextPropView | null) => {
    const newProps: BrandTextElementProps = {
      props: { ...selectedViewProps, view: value ?? undefined },
      type: 'Text',
    }
    delete newProps.props.style
    onDispatch(selectedView, newProps)
  }
  const onChangeColor = (value: ConstaColor | null) => {
    if (value) {
      const newProps: BrandTextElementProps = {
        props: { ...selectedViewProps },
        type: 'Text',
      }
      newProps.props.style = { ...newProps.props.style, color: value }
      onDispatch(selectedView, newProps)
    }
  }

  const onChangeText = (propsName: keyof TextElementProps) => (value: string | null) => {
    const newProps: BrandTextElementProps = {
      props: { ...selectedViewProps, [propsName]: value },
      type: 'Text',
    }
    onDispatch(selectedView, newProps)
  }

  const onChangeSwitch =
    (propsName: keyof TextElementProps) => (check: React.ChangeEvent<HTMLInputElement>) => {
      const checked = check.target.checked
      const newProps: BrandTextElementProps = {
        props: { ...selectedViewProps, [propsName]: checked },
        type: 'Text',
      }
      if (propsName === 'font') {
        newProps.props.font = checked ? 'mono' : 'primary'
      }
      if (propsName === 'cursor') {
        newProps.props.cursor = checked ? 'pointer' : undefined
      }

      onDispatch(selectedView, newProps)
    }

  const onChangeItems = (items: textDecorationType[] | undefined) => {
    const newProps: BrandTextElementProps = {
      props: {
        ...selectedViewProps,
        fontStyle: undefined,
        transform: undefined,
        decoration: undefined,
      },
      type: 'Text',
    }
    items?.forEach(arr => {
      if (arr.name === 'underline') {
        newProps.props.decoration = 'underline'
      }
      if (arr.name === 'uppercase') {
        newProps.props.transform = 'uppercase'
      }
      if (arr.name === 'italic') {
        newProps.props.fontStyle = 'italic'
      }
    })
    onDispatch(selectedView, newProps)
  }

  const onDispatch = (selectedView: IselectedView, newProps: BrandTextElementProps) => {
    dispatch(setInstanceProps(selectedView.elementId, newProps))
  }
  return {
    onChangeText,
    onChangeSwitch,
    onChangeField,
    onChangeItems,
    onChangeColor,
    onChangeView,
    itemsProps: {
      size: selectedViewProps.size,
      view: selectedViewProps.view,
      align: selectedViewProps.align,
      content: selectedViewProps.content,
      weight: selectedViewProps.weight,
      lineHeight: selectedViewProps.lineHeight,
      spacing: selectedViewProps.spacing,
      display: selectedViewProps.display,
      font: selectedViewProps.font,
      decoration: selectedViewProps.decoration,
      fontStyle: selectedViewProps.fontStyle,
      cursor: selectedViewProps.cursor,
      transform: selectedViewProps.transform,
      truncate: selectedViewProps.truncate,
      transformText: selectedViewProps.transformText,
    },
  }
}
