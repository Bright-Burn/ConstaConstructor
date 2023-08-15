import { ISelectedElement, TextFieldProps } from '../../../../coreTypes'
import { setSelectedElement, useAppDispatch, useAppSelector } from '../../../../store'

import { useState } from 'react'
import { getSelectedElementProps } from '../../../../store/formElements'

export const useItemsHandlers = () => {
  const [leftSideType, setLeftSideType] = useState('')
  const [rightSideType, setRightSideType] = useState('')

  const { selectedElement } = useAppSelector(state => state.formConstructor)
  const { selectedElementProps } = useAppSelector(getSelectedElementProps<TextFieldProps>)
  const dispatch = useAppDispatch()

  const onChangeTextField =
    (propsName: keyof TextFieldProps) =>
    ({ value }: { value: string | null }) => {
      if (selectedElement) {
        onDispatch(selectedElement, { ...selectedElementProps, [propsName]: value || '' })
      }
    }

  const onChangeSwitch =
    (propsName: keyof TextFieldProps) =>
    ({ checked }: { checked: boolean }) => {
      if (selectedElement) {
        onDispatch(selectedElement, { ...selectedElementProps, [propsName]: checked })
      }
    }
  const onDispatch = (selectedElement: ISelectedElement, newProps: TextFieldProps) => {
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
