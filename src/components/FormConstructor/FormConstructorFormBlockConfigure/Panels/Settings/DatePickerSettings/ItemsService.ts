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

  const onChangeItems = (items: Date[]) => {
    if (selectedElement && items) {
      const newProps: DatePickerProps = {
        ...(selectedElementProps as DatePickerProps),
      }
      newProps.events = items
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeType = (value: DatePickerPropType | null) => {
    if (selectedElement && value) {
      const newProps: DatePickerProps = {
        ...(selectedElementProps as DatePickerProps),
      }
      newProps.type = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeForm = (value: PropForm | null) => {
    if (selectedElement && value) {
      const newProps: DatePickerProps = {
        ...(selectedElementProps as DatePickerProps),
      }
      newProps.form = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeStatus = (value: TextFieldPropStatus | null) => {
    if (selectedElement && value) {
      const newProps: DatePickerProps = {
        ...(selectedElementProps as DatePickerProps),
      }
      newProps.status = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeLabelPosition = (value: 'top' | 'left' | null) => {
    if (selectedElement && value) {
      const newProps: DatePickerProps = {
        ...(selectedElementProps as DatePickerProps),
      }
      newProps.labelPosition = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeSize = (value: TextFieldPropSize | null) => {
    if (selectedElement && value) {
      const newProps: DatePickerProps = {
        ...(selectedElementProps as DatePickerProps),
      }
      newProps.size = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeView = (value: TextFieldPropView | null) => {
    if (selectedElement && value) {
      const newProps: DatePickerProps = {
        ...(selectedElementProps as DatePickerProps),
      }
      newProps.view = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeMinDate = ({ value }: { value: Date | null }) => {
    if (selectedElement && value) {
      const newProps: DatePickerProps = {
        ...(selectedElementProps as DatePickerProps),
      }
      newProps.minDate = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeMaxDate = ({ value }: { value: Date | null }) => {
    if (selectedElement && value) {
      const newProps: DatePickerProps = {
        ...(selectedElementProps as DatePickerProps),
      }
      newProps.maxDate = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeDateTimeView = (value: DatePickerPropDateTimeView | null) => {
    if (selectedElement && value) {
      const newProps: DatePickerProps = {
        ...(selectedElementProps as DatePickerProps),
      }
      newProps.dateTimeView = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeDropdownForm = (value: DatePickerPropDropdownForm | null) => {
    if (selectedElement && value) {
      const newProps: DatePickerProps = {
        ...(selectedElementProps as DatePickerProps),
      }
      newProps.dropdownForm = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeField =
    (propsName: keyof DatePickerProps) =>
    ({ value }: { value: string | null }) => {
      if (selectedElement) {
        const newProps: DatePickerProps = {
          ...(selectedElementProps as DatePickerProps),
        }
        // @ts-ignore
        newProps[propsName] = value || ''
        onDispatch(selectedElement, newProps)
      }
    }

  const onChangeSwitch =
    (propsName: keyof DatePickerProps) =>
    ({ checked }: { checked: boolean }) => {
      if (selectedElement) {
        const newProps: DatePickerProps = {
          ...(selectedElementProps as DatePickerProps),
        }
        // @ts-ignore
        newProps[propsName] = checked
        onDispatch(selectedElement, newProps)
      }
    }

  const onChangeIcon = (value: iconNames | null) => {
    if (selectedElement && value) {
      const newProps: DatePickerProps = {
        ...(selectedElementProps as DatePickerProps),
      }
      newProps.icon = value
      onDispatch(selectedElement, newProps)
    }
  }

  return {
    onChangeType,
    onChangeForm,
    onChangeStatus,
    onChangeLabelPosition,
    onChangeSize,
    onChangeView,
    onChangeMinDate,
    onChangeMaxDate,
    onChangeDateTimeView,
    onChangeDropdownForm,
    onChangeField,
    onChangeSwitch,
    onChangeIcon,
    onChangeItemsCount,
    onChangeItems,
    itemsProps: {
      type: (selectedElementProps as DatePickerProps).type,
      form: (selectedElementProps as DatePickerProps).form,
      status: (selectedElementProps as DatePickerProps).status,
      withClearButton: (selectedElementProps as DatePickerProps).withClearButton,
      withAdditionalControls: (selectedElementProps as DatePickerProps).withAdditionalControls,
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
