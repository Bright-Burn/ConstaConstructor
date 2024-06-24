import type React from 'react'
import type { TextPropView } from '@consta/uikit/Text'

import type { ConstaColor } from '../../../../../ConstaPalette'
import type {
  BrandTextElementProps,
  ISelectedElement,
  textDecorationType,
  TextElement,
  TextElementProps,
} from '../../../../coreTypes'
import { setSelectedElement, useAppDispatch } from '../../../../store'

import type { ValueTypes } from './types'

export const useItemsHandlers = (
  selectedElementProps: TextElementProps,
  selectedElement: TextElement,
) => {
  const dispatch = useAppDispatch()
  const onChangeField = (value: ValueTypes, field: keyof TextElementProps) => {
    const newProps: BrandTextElementProps = {
      props: { ...selectedElementProps, [field]: value },
      type: 'Text',
    }
    onDispatch(selectedElement, newProps)
  }
  const onChangeView = (value: TextPropView | null) => {
    const newProps: BrandTextElementProps = {
      props: { ...selectedElementProps, view: value ?? undefined },
      type: 'Text',
    }
    delete newProps.props.style
    onDispatch(selectedElement, newProps)
  }
  const onChangeColor = (value: ConstaColor | null) => {
    if (value) {
      const newProps: BrandTextElementProps = {
        props: { ...selectedElementProps },
        type: 'Text',
      }
      newProps.props.style = { ...newProps.props.style, color: value }
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeText = (propsName: keyof TextElementProps) => (value: string | null) => {
    const newProps: BrandTextElementProps = {
      props: { ...selectedElementProps, [propsName]: value },
      type: 'Text',
    }
    onDispatch(selectedElement, newProps)
  }

  const onChangeSwitch =
    (propsName: keyof TextElementProps) => (check: React.ChangeEvent<HTMLInputElement>) => {
      const checked = check.target.checked
      const newProps: BrandTextElementProps = {
        props: { ...selectedElementProps, [propsName]: checked },
        type: 'Text',
      }
      if (propsName === 'font') {
        newProps.props.font = checked ? 'mono' : 'primary'
      }
      if (propsName === 'cursor') {
        newProps.props.cursor = checked ? 'pointer' : undefined
      }

      onDispatch(selectedElement, newProps)
    }

  const onChangeItems = (items: textDecorationType[] | undefined) => {
    const newProps: BrandTextElementProps = {
      props: {
        ...selectedElementProps,
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
    onDispatch(selectedElement, newProps)
  }

  const onDispatch = (selectedElement: ISelectedElement, newProps: BrandTextElementProps) => {
    dispatch(
      setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps,
      }),
    )
  }
  return {
    onChangeText,
    onChangeSwitch,
    onChangeField,
    onChangeItems,
    onChangeColor,
    onChangeView,
    itemsProps: {
      size: selectedElementProps.size,
      view: selectedElementProps.view,
      align: selectedElementProps.align,
      content: selectedElementProps.content,
      weight: selectedElementProps.weight,
      lineHeight: selectedElementProps.lineHeight,
      spacing: selectedElementProps.spacing,
      display: selectedElementProps.display,
      font: selectedElementProps.font,
      decoration: selectedElementProps.decoration,
      fontStyle: selectedElementProps.fontStyle,
      cursor: selectedElementProps.cursor,
      transform: selectedElementProps.transform,
      truncate: selectedElementProps.truncate,
      transformText: selectedElementProps.transformText,
    },
  }
}
