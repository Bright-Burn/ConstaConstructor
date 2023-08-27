import {
  BrandDatePickerProps,
  DatePickerElement,
  DatePickerProps,
  ISelectedElement,
} from '../../../../coreTypes'
import { setSelectedElement, useAppDispatch } from '../../../../store'
import { ValueType } from './fileTypes'

export const useItemsHandlers = (
  selectedElementProps: DatePickerProps,
  selectedElement: DatePickerElement,
) => {
  const dispatch = useAppDispatch()
  const onDispatch = (selectedElement: ISelectedElement, newProps: BrandDatePickerProps) => {
    dispatch(
      setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps: newProps,
      }),
    )
  }

  const onChangeItemsCount = ({ value }: { value: string | null }) => {
    if (selectedElement) {
      const newProps: BrandDatePickerProps = {
        props: { ...selectedElementProps },
        type: 'DatePicker',
      }
      let itemsProps: Date[] = newProps.props.events
      const currentLength = itemsProps.length
      if (currentLength && Number(value) > currentLength) {
        for (let i = currentLength; i < Number(value); i++) {
          itemsProps = [...itemsProps, new Date()]
        }
      } else {
        for (let i = 0; i < currentLength - Number(value); i++) {
          itemsProps = [...itemsProps.slice(0, Number(value))]
        }
      }
      if (Number(value) === 1 && itemsProps.length === 0) {
        itemsProps = [...itemsProps, new Date()]
      }
      newProps.props.events = itemsProps
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeField = (value: ValueType, field: keyof DatePickerProps) => {
    if (selectedElement) {
      const newProps: BrandDatePickerProps = {
        props: { ...selectedElementProps, [field]: value },
        type: 'DatePicker',
      }
      if (field === 'label' && value === true) {
        newProps.props.label = 'Заголовок'
      }
      if (field === 'caption' && value === true) {
        newProps.props.caption = 'Подпись'
      }
      onDispatch(selectedElement, newProps)
    }
  }
  return {
    onChangeField,
    onChangeItemsCount,
    itemsProps: {
      type: selectedElementProps.type,
      form: selectedElementProps.form,
      status: selectedElementProps.status,
      withClearButton: selectedElementProps.withClearButton,
      withAdditionalControls: selectedElementProps.withAdditionalControls,
      label: selectedElementProps.label,
      labelPosition: selectedElementProps.labelPosition,
      required: selectedElementProps.required,
      caption: selectedElementProps.caption,
      size: selectedElementProps.size,
      view: selectedElementProps.view,
      disabled: selectedElementProps.disabled,
      minDate: selectedElementProps.minDate,
      maxDate: selectedElementProps.maxDate,
      dateTimeView: selectedElementProps.dateTimeView,
      dropdownForm: selectedElementProps.dropdownForm,
      events: selectedElementProps.events,
      value: selectedElementProps.value,
    },
  }
}
