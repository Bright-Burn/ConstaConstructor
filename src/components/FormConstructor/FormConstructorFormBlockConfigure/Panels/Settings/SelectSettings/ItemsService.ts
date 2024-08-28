import type React from 'react'

import type {
  BrandSelectProps,
  SelectElement,
  selectitemType,
  SelectProps,
} from '../../../../coreTypes'
import { setInstanceProps, useAppDispatch } from '../../../../store'

import type { ValueType } from './fileTypes'
import type { StatusType } from './types'

export const useItemsHandlers = (selectedViewProps: SelectProps, selectedView: SelectElement) => {
  const dispatch = useAppDispatch()
  const onDispatch = (selectedView: SelectElement, newProps: BrandSelectProps) => {
    dispatch(setInstanceProps(selectedView.elementId, newProps))
  }

  const onChangeItemsCount = (value: string | null) => {
    if (value) {
      const newProps: BrandSelectProps = {
        props: { ...selectedViewProps },
        type: 'SelectForm',
      }

      let itemsProps = [...newProps.props.items]
      const currentLength = itemsProps.length
      if (Number(value) > currentLength) {
        for (let i = currentLength; i < Number(value); i++) {
          itemsProps = [...itemsProps, { id: i + 1, label: `${itemsProps.length + 1}` }]
        }
      } else {
        for (let i = 0; i < currentLength - Number(value); i++) {
          itemsProps.pop()
        }
      }
      newProps.props.items = itemsProps
      onDispatch(selectedView, newProps)
    }
  }

  const onChangeItems = (items: selectitemType[]) => {
    const newProps: BrandSelectProps = {
      props: { ...selectedViewProps },
      type: 'SelectForm',
    }
    newProps.props.items = [...items]
    onDispatch(selectedView, newProps)
  }
  const onChangeStatus = (value: StatusType) => {
    const newProps: BrandSelectProps = {
      props: { ...selectedViewProps, status: value === '' ? undefined : value },
      type: 'SelectForm',
    }
    onDispatch(selectedView, newProps)
  }
  const onChangeLabel = (value: string) => {
    const newProps: BrandSelectProps = {
      props: { ...selectedViewProps, label: value },
      type: 'SelectForm',
    }
    onDispatch(selectedView, newProps)
  }
  const onChangeCaption = (value: string) => {
    const newProps: BrandSelectProps = {
      props: { ...selectedViewProps, caption: value },
      type: 'SelectForm',
    }
    onDispatch(selectedView, newProps)
  }
  const onChangePlaceholder = (value: string) => {
    const newProps: BrandSelectProps = {
      props: { ...selectedViewProps, placeholder: value },
      type: 'SelectForm',
    }
    onDispatch(selectedView, newProps)
  }
  const onChangeSwitch =
    (propsName: keyof SelectProps) => (checked: React.ChangeEvent<HTMLInputElement>) => {
      const newProps: BrandSelectProps = {
        props: { ...selectedViewProps, [propsName]: checked.target.checked },
        type: 'SelectForm',
      }

      onDispatch(selectedView, newProps)
    }

  const onChangeField = (value: ValueType, field: keyof SelectProps) => {
    const newProps: BrandSelectProps = {
      props: { ...selectedViewProps, [field]: value },
      type: 'SelectForm',
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
    onChangeItemsCount,
    onChangeItems,
    onChangeField,
    onChangeStatus,
    onChangeLabel,
    onChangeCaption,
    onChangePlaceholder,
    onChangeSwitch,
    itemsProps: {
      disabled: selectedViewProps.disabled,
      size: selectedViewProps.size,
      view: selectedViewProps.view,
      form: selectedViewProps.form,
      items: selectedViewProps.items,
      required: selectedViewProps.required,
      status: selectedViewProps.status,
      caption: selectedViewProps.caption,
      label: selectedViewProps.label,
      labelPosition: selectedViewProps.labelPosition,
      placeholder: selectedViewProps.placeholder,
      isLoading: selectedViewProps.isLoading,
      groups: selectedViewProps.groups,
      groupsActive: selectedViewProps.groupsActive,
      dropdownForm: selectedViewProps.dropdownForm,
      value: selectedViewProps.value,
    },
  }
}
