import { TextFieldProps, ISelectedElement } from '../../../../coreTypes'
import { setSelectedElement, useAppDispatch, useAppSelector } from '../../../../store'

import { useState } from 'react'
import { BrandTextFieldProps, TextFieldElement } from '../../../../coreTypes/textFieldTypes'

export const useItemsHandlers = (
  selectedElementProps: TextFieldProps,
  selectedElement: TextFieldElement,
) => {
  const [leftSideType, setLeftSideType] = useState('')
  const [rightSideType, setRightSideType] = useState('')

  const dispatch = useAppDispatch()

  const onChangeTextField =
    (propsName: keyof TextFieldProps) =>
    ({ value }: { value: string | null }) => {
      if (selectedElement) {
        const newProps: BrandTextFieldProps = {
          props: { ...selectedElementProps, [propsName]: value },
          type: 'TextField',
        }

        onDispatch(selectedElement, newProps)
      }
    }

  const onChangeSwitch =
    (propsName: keyof TextFieldProps) =>
    ({ checked }: { checked: boolean }) => {
      if (selectedElement) {
        const newProps: BrandTextFieldProps = {
          props: { ...selectedElementProps, [propsName]: checked },
          type: 'TextField',
        }
        if (propsName === 'label' && checked === true) {
          newProps.props.label = 'Заголовок'
        }
        if (propsName === 'caption' && checked === true) {
          newProps.props.caption = 'Подпись'
        }
        if (propsName === 'maxLength' && checked === true) {
          newProps.props.maxLength = 1
        }

        onDispatch(selectedElement, newProps)
      }
    }
  const onDispatch = (selectedElement: ISelectedElement, newProps: BrandTextFieldProps) => {
    dispatch(
      setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps: newProps,
      }),
    )
  }
  return {
    onChangeTextField,
    onChangeSwitch,
    itemsProps: {
      caption: selectedElementProps.caption,
      disabled: selectedElementProps.disabled,
      form: selectedElementProps.form,
      incrementButtons: selectedElementProps.incrementButtons,
      label: selectedElementProps.label,
      labelPosition: selectedElementProps.labelPosition,
      max: selectedElementProps.max,
      maxLength: selectedElementProps.maxLength,
      maxRows: selectedElementProps.maxRows,
      min: selectedElementProps.min,
      minRows: selectedElementProps.minRows,
      placeholder: selectedElementProps.placeholder,
      size: selectedElementProps.size,
      required: selectedElementProps.required,
      rows: selectedElementProps.rows,
      status: selectedElementProps.status,
      step: selectedElementProps.step,
      type: selectedElementProps.type,
      value: selectedElementProps.value,
      view: selectedElementProps.view,
      width: selectedElementProps.width,
      withClearButton: selectedElementProps.withClearButton,
      leftSideType,
      rightSideType,
    },
  }
}
