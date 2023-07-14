import { useDispatch } from 'react-redux'
import { formConstructorSlice, useAppSelector } from '../../../../store/formElements'
import { ISelectedElement } from '../../../../store/formElements/types'
import { DatePickerProps } from '../../../../store/formElements/datePickerTypes'
import {
  DatePickerPropDateTimeView,
  DatePickerPropDropdownForm,
  DatePickerPropType,
} from '@consta/uikit/DatePicker'
import { TextFieldPropSize, TextFieldPropStatus, TextFieldPropView } from '@consta/uikit/TextField'
import { PropForm } from '../../../../store/formElements/selectTypes'
import { iconNames } from '../../../../store/formElements/iconTypes'

export const useItemsHandlers = () => {
  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)
  const dispatch = useDispatch()
  const onDispatch = (selectedElement: ISelectedElement, newProps: DatePickerProps) => {
    dispatch(
      formConstructorSlice.actions.setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps: newProps,
      }),
    )
  }

  const onChangeItemsCount = ({ value }: { value: string | null }) => {
    if (selectedElement && value) {
      const newProps: DatePickerProps = {
        ...(selectedElementProps as DatePickerProps),
      }
      let itemsProps: Date[] = newProps.events
      const currentLength = itemsProps.length
      if (currentLength && Number(value) > currentLength) {
        for (let i = currentLength; i < Number(value); i++) {
          itemsProps = [...itemsProps, new Date(2023, 6, 1)]
        }
      } else {
        for (let i = 0; i < currentLength - Number(value); i++) {
          itemsProps = [...itemsProps.slice(0, Number(value))]
        }
      }
      newProps.events = itemsProps
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeField = (
    value:
      | DatePickerPropDropdownForm
      | DatePickerPropDateTimeView
      | Date
      | TextFieldPropView
      | TextFieldPropSize
      | PropForm
      | DatePickerPropType
      | TextFieldPropStatus
      | ''
      | 'top'
      | 'left'
      | boolean
      | string
      | Date[]
      | iconNames,
    field: keyof DatePickerProps,
  ) => {
    if (selectedElement) {
      const newProps: DatePickerProps = {
        ...(selectedElementProps as DatePickerProps),
        [field]: value,
      }
      onDispatch(selectedElement, newProps)
    }
  }

  return {
    onChangeField,
    onChangeItemsCount,
    itemsProps: {
      type: (selectedElementProps as DatePickerProps).type,
      form: (selectedElementProps as DatePickerProps).form,
      status: (selectedElementProps as DatePickerProps).status,
      withClearButton: (selectedElementProps as DatePickerProps).withClearButton,
      label: (selectedElementProps as DatePickerProps).label,
      labelPosition: (selectedElementProps as DatePickerProps).labelPosition,
      required: (selectedElementProps as DatePickerProps).required,
      caption: (selectedElementProps as DatePickerProps).caption,
      size: (selectedElementProps as DatePickerProps).size,
      view: (selectedElementProps as DatePickerProps).view,
      disabled: (selectedElementProps as DatePickerProps).disabled,
      minDate: (selectedElementProps as DatePickerProps).minDate,
      maxDate: (selectedElementProps as DatePickerProps).maxDate,
      dateTimeView: (selectedElementProps as DatePickerProps).dateTimeView,
      dropdownForm: (selectedElementProps as DatePickerProps).dropdownForm,
      withIconActive: (selectedElementProps as DatePickerProps).withIconActive,
      icon: (selectedElementProps as DatePickerProps).icon,
      events: (selectedElementProps as DatePickerProps).events,
    },
  }
}
