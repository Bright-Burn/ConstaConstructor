import type {
  BrandDatePickerProps,
  DatePickerElement,
  DatePickerProps,
  IselectedView,
} from '../../../../coreTypes'
import { setInstanceProps, useAppDispatch } from '../../../../store'

import type { ValueType } from './fileTypes'
import type { statusType } from './types'

export const useItemsHandlers = (
  selectedViewProps: DatePickerProps,
  selectedView: DatePickerElement,
) => {
  const dispatch = useAppDispatch()
  const onDispatch = (selectedView: IselectedView, newProps: BrandDatePickerProps) => {
    dispatch(setInstanceProps(selectedView.elementId, newProps))
  }

  const onChangeItemsCount = (value: string | null) => {
    const newProps: BrandDatePickerProps = {
      props: { ...selectedViewProps },
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
    onDispatch(selectedView, newProps)
  }
  const onChangeCaption = (caption: string) => {
    const newProps: BrandDatePickerProps = {
      props: { ...selectedViewProps, caption },
      type: 'DatePicker',
    }
    onDispatch(selectedView, newProps)
  }
  const onChangeLabel = (label: string) => {
    const newProps: BrandDatePickerProps = {
      props: { ...selectedViewProps, label },
      type: 'DatePicker',
    }
    onDispatch(selectedView, newProps)
  }
  const onChangeStatus = (status: statusType) => {
    const newProps: BrandDatePickerProps = {
      props: { ...selectedViewProps, status: status === '' ? undefined : status },
      type: 'DatePicker',
    }
    onDispatch(selectedView, newProps)
  }
  const onChangeSwitch =
    (propsName: keyof DatePickerProps) => (checked: React.ChangeEvent<HTMLInputElement>) => {
      const newProps: BrandDatePickerProps = {
        props: {
          ...selectedViewProps,
          [propsName]: checked.target.checked,
        },
        type: 'DatePicker',
      }
      onDispatch(selectedView, newProps)
    }
  const onChangeField = (value: ValueType, field: keyof DatePickerProps) => {
    const newProps: BrandDatePickerProps = {
      props: { ...selectedViewProps, [field]: value },
      type: 'DatePicker',
    }
    if (field === 'label' && value === true) {
      newProps.props.label = 'Заголовок'
    }
    if (field === 'caption' && value === true) {
      newProps.props.caption = 'Подпись'
    }
    onDispatch(selectedView, newProps)
  }
  return {
    onChangeField,
    onChangeItemsCount,
    onChangeCaption,
    onChangeLabel,
    onChangeSwitch,
    onChangeStatus,
    itemsProps: {
      type: selectedViewProps.type,
      form: selectedViewProps.form,
      status: selectedViewProps.status,
      withClearButton: selectedViewProps.withClearButton,
      withAdditionalControls: selectedViewProps.withAdditionalControls,
      label: selectedViewProps.label,
      labelPosition: selectedViewProps.labelPosition,
      required: selectedViewProps.required,
      caption: selectedViewProps.caption,
      size: selectedViewProps.size,
      view: selectedViewProps.view,
      disabled: selectedViewProps.disabled,
      minDate: selectedViewProps.minDate,
      maxDate: selectedViewProps.maxDate,
      dateTimeView: selectedViewProps.dateTimeView,
      dropdownForm: selectedViewProps.dropdownForm,
      events: selectedViewProps.events,
      value: selectedViewProps.value,
    },
  }
}
