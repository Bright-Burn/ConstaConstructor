import { TextFieldProps, useAppSelector } from '../../../../store/formElements'
import { setSelectedElement, useAppDispatch } from '../../../../store'
import { ISelectedElement } from '../../../../store/formElements/types'

import { useState } from 'react'

export const useItemsHandlers = () => {
  const [leftSideType, setLeftSideType] = useState('')
  const [rightSideType, setRightSideType] = useState('')

  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)

  const dispatch = useAppDispatch()

  const onChangeTextField =
    (propsName: keyof TextFieldProps) =>
    ({ value }: { value: string | null }) => {
      if (selectedElement) {
        const newProps: TextFieldProps = {
          ...(selectedElementProps as TextFieldProps),
        }
        // @ts-ignore
        newProps[propsName] = value || ''
        onDispatch(selectedElement, newProps)
      }
    }

  const onChangeSwitch =
    (propsName: keyof TextFieldProps) =>
    ({ checked }: { checked: boolean }) => {
      if (selectedElement) {
        const newProps: TextFieldProps = {
          ...(selectedElementProps as TextFieldProps),
        }
        // @ts-ignore
        newProps[propsName] = checked
        onDispatch(selectedElement, newProps)
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
      caption: (selectedElementProps as TextFieldProps).caption,
      disabled: (selectedElementProps as TextFieldProps).disabled,
      form: (selectedElementProps as TextFieldProps).form,
      incrementButtons: (selectedElementProps as TextFieldProps).incrementButtons,
      label: (selectedElementProps as TextFieldProps).label,
      labelPosition: (selectedElementProps as TextFieldProps).labelPosition,
      max: (selectedElementProps as TextFieldProps).max,
      maxLength: (selectedElementProps as TextFieldProps).maxLength,
      maxRows: (selectedElementProps as TextFieldProps).maxRows,
      min: (selectedElementProps as TextFieldProps).min,
      minRows: (selectedElementProps as TextFieldProps).minRows,
      placeholder: (selectedElementProps as TextFieldProps).placeholder,
      size: (selectedElementProps as TextFieldProps).size,
      required: (selectedElementProps as TextFieldProps).required,
      rows: (selectedElementProps as TextFieldProps).rows,
      status: (selectedElementProps as TextFieldProps).status,
      step: (selectedElementProps as TextFieldProps).step,
      type: (selectedElementProps as TextFieldProps).type,
      value: (selectedElementProps as TextFieldProps).value,
      view: (selectedElementProps as TextFieldProps).view,
      width: (selectedElementProps as TextFieldProps).width,
      withClearButton: (selectedElementProps as TextFieldProps).withClearButton,
      leftSideType,
      rightSideType,
    },
  }
}
