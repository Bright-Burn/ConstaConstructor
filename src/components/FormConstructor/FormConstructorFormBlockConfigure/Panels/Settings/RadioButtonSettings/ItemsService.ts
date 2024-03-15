import type { RadioPropAlign, RadioPropSize, RadioPropView } from '@consta/uikit/Radio'

import type { ISelectedElement, RadioButtonProps } from '../../../../coreTypes'
import type {
  BrandRadioButtonProps,
  RadioButtonElement,
} from '../../../../coreTypes/radioButtonTypes'
import { setSelectedElement, useAppDispatch } from '../../../../store'

export const useItemsHandlers = (
  selectedElementProps: RadioButtonProps,
  selectedElement: RadioButtonElement,
) => {
  const dispatch = useAppDispatch()

  const onDispatch = (selectedElement: ISelectedElement, newProps: BrandRadioButtonProps) => {
    dispatch(
      setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps,
      }),
    )
  }

  const onChangeView = (value: RadioPropView | null) => {
    if (value) {
      const newProps: BrandRadioButtonProps = {
        props: { ...selectedElementProps },
        type: 'RadioButton',
      }
      newProps.props.view = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeSize = (value: RadioPropSize | null) => {
    if (value) {
      const newProps: BrandRadioButtonProps = {
        props: { ...selectedElementProps },
        type: 'RadioButton',
      }
      newProps.props.size = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeAlign = (value: RadioPropAlign | null) => {
    if (value) {
      const newProps: BrandRadioButtonProps = {
        props: { ...selectedElementProps },
        type: 'RadioButton',
      }
      newProps.props.align = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeField =
    (propsName: keyof RadioButtonProps) =>
    ({ value }: { value: string | null }) => {
      const newProps: BrandRadioButtonProps = {
        props: {
          ...selectedElementProps,
          [propsName]: value,
        },
        type: 'RadioButton',
      }
      onDispatch(selectedElement, newProps)
    }

  const onChangeSwitch =
    (propsName: keyof RadioButtonProps) =>
    ({ checked }: { checked: boolean }) => {
      const newProps: BrandRadioButtonProps = {
        props: {
          ...selectedElementProps,
          [propsName]: checked,
        },
        type: 'RadioButton',
      }
      onDispatch(selectedElement, newProps)
    }
  const onChangeChacked = (checked: boolean) => {
    const newProps: BrandRadioButtonProps = {
      props: { ...selectedElementProps },
      type: 'RadioButton',
    }
    newProps.props.checked = checked
    onDispatch(selectedElement, newProps)
  }

  return {
    onChangeView,
    onChangeSize,
    onChangeAlign,
    onChangeField,
    onChangeSwitch,
    onChangeChacked,
    itemsProps: {
      checked: selectedElementProps.checked,
      size: selectedElementProps.size,
      view: selectedElementProps.view,
      align: selectedElementProps.align,
      label: selectedElementProps.label,
      disabled: selectedElementProps.disabled,
    },
  }
}
