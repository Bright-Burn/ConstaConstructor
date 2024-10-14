import type React from 'react'
import type { TextPropView } from '@consta/uikit/Text'

import type { ConstaColor } from '../../../../../ConstaPalette'
import type {
  BrandTextProps,
  IselectedView,
  TextDecorationType,
  TextElement,
  TextProps,
} from '../../../../coreTypes'
import { setInstanceProps, useAppDispatch } from '../../../../store'

import type { ValueTypes } from './types'

export const useItemsHandlers = (selectedViewProps: TextProps, selectedView: TextElement) => {
  const dispatch = useAppDispatch()
  const onChangeField = (value: ValueTypes, field: keyof TextProps['uiLibProps']) => {
    const newProps: BrandTextProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: {
          ...selectedViewProps.uiLibProps,
          [field]: value,
        },
      },
      type: 'Text',
    }
    onDispatch(selectedView, newProps)
  }
  const onChangeView = (value: TextPropView | null) => {
    const newProps: BrandTextProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: {
          ...selectedViewProps.uiLibProps,
          view: value ?? undefined,
        },
        styles: {
          color: undefined,
        },
      },
      type: 'Text',
    }
    onDispatch(selectedView, newProps)
  }
  const onChangeColor = (value: ConstaColor | null) => {
    if (value) {
      const newProps: BrandTextProps = {
        props: {
          ...selectedViewProps,
          styles: { ...selectedViewProps.styles, color: value == 'Null' ? undefined : value },
          uiLibProps: {
            ...selectedViewProps.uiLibProps,
            view: value == 'Null' ? selectedViewProps.uiLibProps.view : undefined,
          },
        },
        type: 'Text',
      }
      onDispatch(selectedView, newProps)
    }
  }

  const onChangeText = (propsName: keyof TextProps['uiLibProps']) => (value: string | null) => {
    const newProps: BrandTextProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: {
          ...selectedViewProps.uiLibProps,
          [propsName]: value,
        },
      },
      type: 'Text',
    }
    onDispatch(selectedView, newProps)
  }

  const onChangeSwitch =
    (propsName: keyof TextProps['uiLibProps']) => (check: React.ChangeEvent<HTMLInputElement>) => {
      const checked = check.target.checked
      const newProps: BrandTextProps = {
        props: {
          ...selectedViewProps,
          uiLibProps: {
            ...selectedViewProps.uiLibProps,
            [propsName]: checked,
          },
        },
        type: 'Text',
      }
      if (propsName === 'font') {
        newProps.props.uiLibProps.font = checked ? 'mono' : 'primary'
      }
      if (propsName === 'cursor') {
        newProps.props.uiLibProps.cursor = checked ? 'pointer' : undefined
      }

      onDispatch(selectedView, newProps)
    }

  const onChangeItems = (items: TextDecorationType[] | undefined) => {
    const newProps: BrandTextProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: {
          ...selectedViewProps.uiLibProps,
          fontStyle: undefined,
          transform: undefined,
          decoration: undefined,
        },
      },
      type: 'Text',
    }
    items?.forEach(arr => {
      if (arr.name === 'underline') {
        newProps.props.uiLibProps.decoration = 'underline'
      }
      if (arr.name === 'uppercase') {
        newProps.props.uiLibProps.transform = 'uppercase'
      }
      if (arr.name === 'italic') {
        newProps.props.uiLibProps.fontStyle = 'italic'
      }
    })
    onDispatch(selectedView, newProps)
  }

  const onDispatch = (selectedView: IselectedView, newProps: BrandTextProps) => {
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
      size: selectedViewProps.uiLibProps.size,
      view: selectedViewProps.uiLibProps.view,
      align: selectedViewProps.uiLibProps.align,
      content: selectedViewProps.uiLibProps.content,
      weight: selectedViewProps.uiLibProps.weight,
      lineHeight: selectedViewProps.uiLibProps.lineHeight,
      spacing: selectedViewProps.uiLibProps.spacing,
      display: selectedViewProps.uiLibProps.display,
      font: selectedViewProps.uiLibProps.font,
      decoration: selectedViewProps.uiLibProps.decoration,
      fontStyle: selectedViewProps.uiLibProps.fontStyle,
      cursor: selectedViewProps.uiLibProps.cursor,
      transform: selectedViewProps.uiLibProps.transform,
      truncate: selectedViewProps.uiLibProps.truncate,
      transformText: selectedViewProps.uiLibProps.transformText,
    },
  }
}
