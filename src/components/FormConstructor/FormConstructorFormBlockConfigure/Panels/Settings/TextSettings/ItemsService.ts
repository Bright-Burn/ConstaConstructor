import { setSelectedElement, useAppDispatch, useAppSelector } from '../../../../store'
import { ISelectedElement, TextElementProps } from '../../../../coreTypes'
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

export const useItemsHandlers = () => {
  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)
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
      const newProps: TextElementProps = {
        ...(selectedElementProps as TextElementProps),
      }
      // @ts-ignore
      newProps[field] = value

      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeText =
    (propsName: keyof TextElementProps) =>
    ({ value }: { value: string | null }) => {
      if (selectedElement) {
        const newProps: TextElementProps = {
          ...(selectedElementProps as TextElementProps),
        }
        // @ts-ignore
        newProps[propsName] = value || ''
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
      const newProps: TextElementProps = {
        ...(selectedElementProps as TextElementProps),
      }
      const newValue = getPropsValue(field)
      // @ts-ignore
      newProps[field] = value.checked ? newValue : undefined

      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeTruncate = ({ checked }: { checked: boolean }) => {
    if (selectedElement) {
      const newProps: TextElementProps = {
        ...(selectedElementProps as TextElementProps),
      }
      newProps.truncate = checked

      onDispatch(selectedElement, newProps)
    }
  }

  const onDispatch = (selectedElement: ISelectedElement, newProps: TextElementProps) => {
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
      size: (selectedElementProps as TextElementProps).size,
      view: (selectedElementProps as TextElementProps).view,
      align: (selectedElementProps as TextElementProps).align,
      content: (selectedElementProps as TextElementProps).content,
      weight: (selectedElementProps as TextElementProps).weight,
      lineHeight: (selectedElementProps as TextElementProps).lineHeight,
      spacing: (selectedElementProps as TextElementProps).spacing,
      display: (selectedElementProps as TextElementProps).display,
      font: (selectedElementProps as TextElementProps).font,
      type: (selectedElementProps as TextElementProps).type,
      decoration: (selectedElementProps as TextElementProps).decoration,
      fontStyle: (selectedElementProps as TextElementProps).fontStyle,
      cursor: (selectedElementProps as TextElementProps).cursor,
      transform: (selectedElementProps as TextElementProps).transform,
      truncate: (selectedElementProps as TextElementProps).truncate,
    },
  }
}
