import { useDispatch } from 'react-redux'
import {
  TextFieldProps,
  formConstructorSlice,
  useAppSelector,
} from '../../../../store/formElements'
import { ISelectedElement } from '../../../../store/formElements/types'
import { IconPhoto } from '@consta/uikit/IconPhoto'
import { useState } from 'react'

export const useItemsHandlers = () => {
  const [leftSideType, setLeftSideType] = useState('')
  const [rightSideType, setRightSideType] = useState('')

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

  const onChangeLeftSideType = ({ value }: { value: string | null }) => {
    if (selectedElement) {
      const newProps: TextFieldProps = {
        ...(selectedElementProps as TextFieldProps),
      }

      if (value === 'icon') {
        newProps.leftSide = IconPhoto
      } else if (value === 'text') {
        newProps.leftSide = 'form'
      } else {
        newProps.leftSide = ''
      }
      setLeftSideType(value || '')
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeRightSideType = ({ value }: { value: string | null }) => {
    if (selectedElement) {
      const newProps: TextFieldProps = {
        ...(selectedElementProps as TextFieldProps),
      }

      if (value === 'icon') {
        newProps.rightSide = IconPhoto
      } else if (value === 'text') {
        newProps.rightSide = 'm'
      } else {
        newProps.rightSide = ''
      }
      setRightSideType(value || '')
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
    onChangeRightSideType,
    onChangeLeftSideType,
    itemsProps: {
      caption: (selectedElementProps as TextFieldProps).caption,
      disabled: (selectedElementProps as TextFieldProps).disabled,
      form: (selectedElementProps as TextFieldProps).form,
      incrementButtons: (selectedElementProps as TextFieldProps).incrementButtons,
      label: (selectedElementProps as TextFieldProps).label,
      labelPosition: (selectedElementProps as TextFieldProps).labelPosition,
      leftSide: (selectedElementProps as TextFieldProps).leftSide,
      max: (selectedElementProps as TextFieldProps).max,
      maxLength: (selectedElementProps as TextFieldProps).maxLength,
      maxRows: (selectedElementProps as TextFieldProps).maxRows,
      min: (selectedElementProps as TextFieldProps).min,
      minRows: (selectedElementProps as TextFieldProps).minRows,
      placeholder: (selectedElementProps as TextFieldProps).placeholder,
      size: (selectedElementProps as TextFieldProps).size,
      required: (selectedElementProps as TextFieldProps).required,
      rightSide: (selectedElementProps as TextFieldProps).rightSide,
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
