import { setSelectedElement, useAppDispatch } from '../../../../store'
import { ISelectedElement, TextElementProps, BrandTextElementProps } from '../../../../coreTypes'
import {
  TextPropSize,
  TextPropView,
  TextPropAlign,
  TextPropWeight,
  TextPropDisplay,
  TextPropFont,
  TextPropType,
} from '@consta/uikit/Text'
import { getPropsValue } from './textConstants'
import { TextElement } from '../../../../coreTypes/textTypes'

export const useItemsHandlers = (
  selectedElementProps: TextElementProps,
  selectedElement: TextElement,
) => {
  const dispatch = useAppDispatch()
  const onChangeField = (
    value:
      | TextPropSize
      | TextPropView
      | TextPropAlign
      | TextPropWeight
      | TextPropDisplay
      | TextPropFont
      | TextPropType
      | string
      | TextPropType,
    field: keyof TextElementProps,
  ) => {
    if (selectedElement) {
      const newProps: BrandTextElementProps = {
        props: { ...selectedElementProps },
        type: 'Text',
      }
      // @ts-ignore
      newProps.props[field] = value

      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeText =
    (propsName: keyof TextElementProps) =>
    ({ value }: { value: string | null }) => {
      if (selectedElement) {
        const newProps: BrandTextElementProps = {
          props: { ...selectedElementProps },
          type: 'Text',
        }
        // @ts-ignore
        newProps.props[propsName] = value || ''
        onDispatch(selectedElement, newProps)
      }
    }

  const onChangeCheckboxValues = (
    value: {
      e: React.ChangeEvent<HTMLInputElement>
      checked: boolean
    },
    field: keyof TextElementProps,
  ) => {
    if (selectedElement) {
      const newProps: BrandTextElementProps = {
        type: 'Text',
        props: { ...selectedElementProps },
      }
      const newValue = getPropsValue(field)
      // @ts-ignore
      newProps[field] = value.checked ? newValue : undefined

      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeTruncate = ({ checked }: { checked: boolean }) => {
    if (selectedElement) {
      const newProps: BrandTextElementProps = {
        type: 'Text',
        props: { ...selectedElementProps },
      }
      newProps.props.truncate = checked

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
    onChangeCheckboxValues,
    onChangeTruncate,
    onChangeField,
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
    },
  }
}
