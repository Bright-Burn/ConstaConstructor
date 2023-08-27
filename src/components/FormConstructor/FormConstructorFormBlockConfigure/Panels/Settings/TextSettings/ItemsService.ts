import { setSelectedElement, useAppDispatch } from '../../../../store'
import {
  ISelectedElement,
  TextElementProps,
  BrandTextElementProps,
  TextElement,
  textDecorationType,
} from '../../../../coreTypes'
import { ValueTypes } from './fileTypes'

export const useItemsHandlers = (
  selectedElementProps: TextElementProps,
  selectedElement: TextElement,
) => {
  const dispatch = useAppDispatch()
  const onChangeField = (value: ValueTypes, field: keyof TextElementProps) => {
    if (selectedElement) {
      const newProps: BrandTextElementProps = {
        props: { ...selectedElementProps, [field]: value },
        type: 'Text',
      }
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeText =
    (propsName: keyof TextElementProps) =>
    ({ value }: { value: string | null }) => {
      if (selectedElement) {
        const newProps: BrandTextElementProps = {
          props: { ...selectedElementProps, [propsName]: value },
          type: 'Text',
        }
        onDispatch(selectedElement, newProps)
      }
    }

  const onChangeSwitch =
    (propsName: keyof TextElementProps) =>
    ({ checked }: { checked: boolean }) => {
      if (selectedElement) {
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
    }

  const onChangeItems = (items: textDecorationType[] | undefined) => {
    if (selectedElement) {
      const newProps: BrandTextElementProps = {
        props: {
          ...selectedElementProps,
          fontStyle: undefined,
          transform: undefined,
          decoration: undefined,
        },
        type: 'Text',
      }
      items?.map(arr => {
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
  }

  const onDispatch = (selectedElement: ISelectedElement, newProps: BrandTextElementProps) => {
    dispatch(
      setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps: newProps,
      }),
    )
  }
  return {
    onChangeText,
    onChangeSwitch,
    onChangeField,
    onChangeItems,
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
      type: selectedElementProps.type,
      decoration: selectedElementProps.decoration,
      fontStyle: selectedElementProps.fontStyle,
      cursor: selectedElementProps.cursor,
      transform: selectedElementProps.transform,
      truncate: selectedElementProps.truncate,
      transformText: selectedElementProps.transformText,
    },
  }
}
