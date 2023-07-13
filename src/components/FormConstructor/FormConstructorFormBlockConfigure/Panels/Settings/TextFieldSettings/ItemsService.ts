import { useDispatch } from 'react-redux'
import {
  TextFieldProps,
  formConstructorSlice,
  useAppSelector,
} from '../../../../store/formElements'
import { ISelectedElement } from '../../../../store/formElements/types'
import { IconPhoto } from '@consta/uikit/IconPhoto'
import { useState } from 'react'
import { iconNames } from '../../../../store/formElements/iconTypes'

export const useItemsHandlers = () => {
  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)

  const dispatch = useDispatch()

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

  const onChangeIconLeft = (value: iconNames | null) => {
    if (selectedElement && value) {
      const newProps: TextFieldProps = {
        ...(selectedElementProps as TextFieldProps),
      }
      newProps.leftSideIcon = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeIconRight = (value: iconNames | null) => {
    if (selectedElement && value) {
      const newProps: TextFieldProps = {
        ...(selectedElementProps as TextFieldProps),
      }
      newProps.rightSideIcon = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onDispatch = (selectedElement: ISelectedElement, newProps: TextFieldProps) => {
    dispatch(
      formConstructorSlice.actions.setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps: newProps,
      }),
    )
  }
  return {
    onChangeTextField,
    onChangeSwitch,
    onChangeIconLeft,
    onChangeIconRight,
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
      leftSideText: (selectedElementProps as TextFieldProps).leftSideText,
      leftSideType: (selectedElementProps as TextFieldProps).leftSideType,
      leftSideIcon: (selectedElementProps as TextFieldProps).leftSideIcon,
      rightSideText: (selectedElementProps as TextFieldProps).rightSideText,
      rightSideType: (selectedElementProps as TextFieldProps).rightSideType,
      rightSideIcon: (selectedElementProps as TextFieldProps).rightSideIcon,
    },
  }
}
