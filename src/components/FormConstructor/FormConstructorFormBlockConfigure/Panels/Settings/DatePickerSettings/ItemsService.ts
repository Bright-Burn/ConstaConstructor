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
      props: { ...selectedViewProps, uiLibProps: { ...selectedViewProps.uiLibProps } },
      type: 'DatePicker',
    }
    let itemsProps: Date[] = newProps.props.uiLibProps.events
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
    newProps.props.uiLibProps.events = itemsProps
    onDispatch(selectedView, newProps)
  }
  const onChangeCaption = (caption: string) => {
    const newProps: BrandDatePickerProps = {
      props: { ...selectedViewProps, uiLibProps: { ...selectedViewProps.uiLibProps, caption } },
      type: 'DatePicker',
    }
    onDispatch(selectedView, newProps)
  }
  const onChangeLabel = (label: string) => {
    const newProps: BrandDatePickerProps = {
      props: { ...selectedViewProps, uiLibProps: { ...selectedViewProps.uiLibProps, label } },
      type: 'DatePicker',
    }
    onDispatch(selectedView, newProps)
  }
  const onChangeStatus = (status: statusType) => {
    const newProps: BrandDatePickerProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: { ...selectedViewProps.uiLibProps, status: status ? status : undefined },
      },
      type: 'DatePicker',
    }
    onDispatch(selectedView, newProps)
  }
  const onChangeSwitch =
    (propsName: keyof DatePickerProps['uiLibProps']) =>
    (checked: React.ChangeEvent<HTMLInputElement>) => {
      const newProps: BrandDatePickerProps = {
        props: {
          ...selectedViewProps,
          uiLibProps: { ...selectedViewProps.uiLibProps, [propsName]: checked.target.checked },
        },
        type: 'DatePicker',
      }
      onDispatch(selectedView, newProps)
    }
  const onChangeField = (value: ValueType, field: keyof DatePickerProps['uiLibProps']) => {
    let newProps: BrandDatePickerProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: { ...selectedViewProps.uiLibProps },
      },
      type: 'DatePicker',
    }
    if (field === 'label' && value === true) {
      newProps.props.uiLibProps.label = 'Заголовок'
    } else if (field === 'caption' && value === true) {
      newProps.props.uiLibProps.caption = 'Подпись'
    } else {
      newProps = {
        props: {
          ...selectedViewProps,
          uiLibProps: { ...selectedViewProps.uiLibProps, [field]: value },
        },
        type: 'DatePicker',
      }
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
      type: selectedViewProps.uiLibProps.type,
      form: selectedViewProps.uiLibProps.form,
      status: selectedViewProps.uiLibProps.status,
      withClearButton: selectedViewProps.uiLibProps.withClearButton,
      withAdditionalControls: selectedViewProps.uiLibProps.withAdditionalControls,
      label: selectedViewProps.uiLibProps.label,
      labelPosition: selectedViewProps.uiLibProps.labelPosition,
      required: selectedViewProps.uiLibProps.required,
      caption: selectedViewProps.uiLibProps.caption,
      size: selectedViewProps.uiLibProps.size,
      view: selectedViewProps.uiLibProps.view,
      disabled: selectedViewProps.uiLibProps.disabled,
      minDate: selectedViewProps.uiLibProps.minDate,
      maxDate: selectedViewProps.uiLibProps.maxDate,
      dateTimeView: selectedViewProps.uiLibProps.dateTimeView,
      dropdownForm: selectedViewProps.uiLibProps.dropdownForm,
      events: selectedViewProps.uiLibProps.events,
      value: selectedViewProps.uiLibProps.value,
    },
  }
}
