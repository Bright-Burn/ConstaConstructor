import type {
  BrandComboboxProps,
  ComboBoxElement,
  comboboxItemType,
  ComboboxProps,
  IselectedView,
} from '../../../../coreTypes'
import { setInstanceProps, useAppDispatch } from '../../../../store'

import type { statusType, ValueType } from './types'

export const useItemsHandlers = (
  selectedViewProps: ComboboxProps,
  selectedView: ComboBoxElement,
) => {
  const dispatch = useAppDispatch()
  const onDispatch = (selectedView: IselectedView, newProps: BrandComboboxProps) => {
    dispatch(setInstanceProps(selectedView.elementId, newProps))
  }
  const onChangeItemsCount = (value: string | null) => {
    if (value) {
      const newProps: BrandComboboxProps = {
        props: { ...selectedViewProps },
        type: 'ComboBox',
      }
      let itemsProps = [...newProps.props.items]
      const currentLength = itemsProps.length
      if (Number(value) > currentLength) {
        for (let i = currentLength; i < Number(value); i++) {
          itemsProps = [...itemsProps, { id: i, label: `${itemsProps.length + 1}` }]
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
  const onChangeItems = (items: comboboxItemType[]) => {
    const newProps: BrandComboboxProps = {
      props: { ...selectedViewProps },
      type: 'ComboBox',
    }
    newProps.props.items = [...items]
    onDispatch(selectedView, newProps)
  }
  const onChangeStatus = (status: statusType) => {
    const newProps: BrandComboboxProps = {
      props: { ...selectedViewProps, status: status === '' ? undefined : status },
      type: 'ComboBox',
    }
    onDispatch(selectedView, newProps)
  }
  const onChangeLabel = (label: string) => {
    const newProps: BrandComboboxProps = {
      props: { ...selectedViewProps, label },
      type: 'ComboBox',
    }
    onDispatch(selectedView, newProps)
  }
  const onChangePlaceholder = (placeholder: string) => {
    const newProps: BrandComboboxProps = {
      props: { ...selectedViewProps, placeholder },
      type: 'ComboBox',
    }
    onDispatch(selectedView, newProps)
  }
  const onChangeCaption = (caption: string) => {
    const newProps: BrandComboboxProps = {
      props: { ...selectedViewProps, caption },
      type: 'ComboBox',
    }
    onDispatch(selectedView, newProps)
  }
  const onChangeSwitch =
    (propsName: keyof ComboboxProps) => (checked: React.ChangeEvent<HTMLInputElement>) => {
      const newProps: BrandComboboxProps = {
        props: {
          ...selectedViewProps,
          [propsName]: checked.target.checked,
        },
        type: 'ComboBox',
      }
      onDispatch(selectedView, newProps)
    }
  const onChangeField = (value: ValueType, field: keyof ComboboxProps) => {
    const newProps: BrandComboboxProps = {
      props: { ...selectedViewProps, [field]: value },
      type: 'ComboBox',
    }
    if (field === 'label' && value === true) {
      newProps.props.label = 'Заголовок'
    }
    if (field === 'caption' && value === true) {
      newProps.props.caption = 'Подпись'
    }
    onDispatch(selectedView, newProps)
  }
  const onChangeWidth = (value: string | null) => {
    const newProps: BrandComboboxProps = {
      props: { ...selectedViewProps },
      type: 'ComboBox',
    }
    newProps.props.style = { maxWidth: '200px', minWidth: '200px', ...newProps.props.style }
    if (value) {
      let newValue = value
      if (value.startsWith('0')) {
        newValue = newValue.replace('0', '')
      }
      newProps.props.style.maxWidth = `${newValue}px`
      newProps.props.style.minWidth = `${newValue}px`
      onDispatch(selectedView, newProps)
    } else {
      newProps.props.style.maxWidth = ''
      newProps.props.style.minWidth = ''
      onDispatch(selectedView, newProps)
    }
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
    onChangeWidth,
    itemsProps: {
      items: selectedViewProps.items,
      value: selectedViewProps.value,
      disabled: selectedViewProps.disabled,
      size: selectedViewProps.size,
      view: selectedViewProps.view,
      form: selectedViewProps.form,
      required: selectedViewProps.required,
      caption: selectedViewProps.caption,
      label: selectedViewProps.label,
      status: selectedViewProps.status,
      labelPosition: selectedViewProps.labelPosition,
      placeholder: selectedViewProps.placeholder,
      isLoading: selectedViewProps.isLoading,
      multiple: selectedViewProps.multiple,
      groups: selectedViewProps.groups,
      groupsActive: selectedViewProps.groupsActive,
      dropdownForm: selectedViewProps.dropdownForm,
    },
  }
}
