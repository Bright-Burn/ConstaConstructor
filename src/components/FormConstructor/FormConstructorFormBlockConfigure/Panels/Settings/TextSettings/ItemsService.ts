import {
  setSelectedElement,
  useAppDispatch,
  useAppFormConstructorSelector,
} from '../../../../store'
import { ISelectedElement, TextElementProps } from '../../../../coreTypes'
import {
  TextPropAlign,
  TextPropDisplay,
  TextPropFont,
  TextPropSize,
  TextPropType,
  TextPropView,
  TextPropWeight,
} from '@consta/uikit/Text'
import { getPropsValue } from './textConstants'

export const useItemsHandlers = () => {
  const { selectedElementProps, selectedElement } =
    useAppFormConstructorSelector<TextElementProps>()

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
      onDispatch(selectedElement, { ...selectedElementProps, [field]: value })
    }
  }

  const onChangeText =
    (propsName: keyof TextElementProps) =>
    ({ value }: { value: string | null }) => {
      if (selectedElement) {
        onDispatch(selectedElement, { ...selectedElementProps, [propsName]: value || '' })
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
      const newValue = getPropsValue(field)

      onDispatch(selectedElement, {
        ...selectedElementProps,
        [field]: value.checked ? newValue : undefined,
      })
    }
  }
  const onChangeTruncate = ({ checked }: { checked: boolean }) => {
    if (selectedElement) {
      onDispatch(selectedElement, { ...selectedElementProps, truncate: checked })
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
