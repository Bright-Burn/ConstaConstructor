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

export const useItemsHandlers = (
  selectedElementProps: SelectProps,
  selectedElement: SelectElement,
) => {
  const dispatch = useAppDispatch()
  const onDispatch = (selectedElement: SelectElement, newProps: BrandSelectProps) => {
    dispatch(setInstanceProps(selectedElement.elementId, newProps))
  }

  const onChangeItemsCount = (value: string | null) => {
    if (value) {
      const newProps: BrandSelectProps = {
        props: { ...selectedElementProps },
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
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeItems = (items: selectitemType[]) => {
    const newProps: BrandSelectProps = {
      props: { ...selectedElementProps },
      type: 'SelectForm',
    }
    newProps.props.items = [...items]
    onDispatch(selectedElement, newProps)
  }
  const onChangeStatus = (value: StatusType) => {
    const newProps: BrandSelectProps = {
      props: { ...selectedElementProps, status: value === '' ? undefined : value },
      type: 'SelectForm',
    }
    onDispatch(selectedElement, newProps)
  }
  const onChangeLabel = (value: string) => {
    const newProps: BrandSelectProps = {
      props: { ...selectedElementProps, label: value },
      type: 'SelectForm',
    }
    onDispatch(selectedElement, newProps)
  }
  const onChangeCaption = (value: string) => {
    const newProps: BrandSelectProps = {
      props: { ...selectedElementProps, caption: value },
      type: 'SelectForm',
    }
    onDispatch(selectedElement, newProps)
  }
  const onChangePlaceholder = (value: string) => {
    const newProps: BrandSelectProps = {
      props: { ...selectedElementProps, placeholder: value },
      type: 'SelectForm',
    }
    onDispatch(selectedElement, newProps)
  }
  const onChangeSwitch =
    (propsName: keyof SelectProps) => (checked: React.ChangeEvent<HTMLInputElement>) => {
      const newProps: BrandSelectProps = {
        props: { ...selectedElementProps, [propsName]: checked.target.checked },
        type: 'SelectForm',
      }

      onDispatch(selectedElement, newProps)
    }

  const onChangeField = (value: ValueType, field: keyof SelectProps) => {
    const newProps: BrandSelectProps = {
      props: { ...selectedElementProps, [field]: value },
      type: 'SelectForm',
    }
    if (field === 'label' && value === true) {
      newProps.props.label = 'Заголовок'
    }
    if (field === 'caption' && value === true) {
      newProps.props.caption = 'Подпись'
    }
    onDispatch(selectedElement, newProps)
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
      disabled: selectedElementProps.disabled,
      size: selectedElementProps.size,
      view: selectedElementProps.view,
      form: selectedElementProps.form,
      items: selectedElementProps.items,
      required: selectedElementProps.required,
      status: selectedElementProps.status,
      caption: selectedElementProps.caption,
      label: selectedElementProps.label,
      labelPosition: selectedElementProps.labelPosition,
      placeholder: selectedElementProps.placeholder,
      isLoading: selectedElementProps.isLoading,
      groups: selectedElementProps.groups,
      groupsActive: selectedElementProps.groupsActive,
      dropdownForm: selectedElementProps.dropdownForm,
      value: selectedElementProps.value,
    },
  }
}
