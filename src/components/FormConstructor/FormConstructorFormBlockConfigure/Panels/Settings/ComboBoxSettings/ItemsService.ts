import type {
  BrandComboboxProps,
  ComboBoxElement,
  comboboxItemType,
  ComboboxProps,
  ISelectedElement,
} from '../../../../coreTypes'
import { useAppDispatch } from '../../../../store'
import { setInstanceProps } from '../../../../store/formElements'

import type { statusType, ValueType } from './types'

export const useItemsHandlers = (
  selectedElementProps: ComboboxProps,
  selectedElement: ComboBoxElement,
) => {
  const dispatch = useAppDispatch()
  const onDispatch = (selectedElement: ISelectedElement, newProps: BrandComboboxProps) => {
    dispatch(setInstanceProps(selectedElement.elementId, newProps))
  }
  const onChangeItemsCount = (value: string | null) => {
    if (value) {
      const newProps: BrandComboboxProps = {
        props: { ...selectedElementProps },
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
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeItems = (items: comboboxItemType[]) => {
    const newProps: BrandComboboxProps = {
      props: { ...selectedElementProps },
      type: 'ComboBox',
    }
    newProps.props.items = [...items]
    onDispatch(selectedElement, newProps)
  }
  const onChangeStatus = (status: statusType) => {
    const newProps: BrandComboboxProps = {
      props: { ...selectedElementProps, status: status === '' ? undefined : status },
      type: 'ComboBox',
    }
    onDispatch(selectedElement, newProps)
  }
  const onChangeLabel = (label: string) => {
    const newProps: BrandComboboxProps = {
      props: { ...selectedElementProps, label },
      type: 'ComboBox',
    }
    onDispatch(selectedElement, newProps)
  }
  const onChangePlaceholder = (placeholder: string) => {
    const newProps: BrandComboboxProps = {
      props: { ...selectedElementProps, placeholder },
      type: 'ComboBox',
    }
    onDispatch(selectedElement, newProps)
  }
  const onChangeCaption = (caption: string) => {
    const newProps: BrandComboboxProps = {
      props: { ...selectedElementProps, caption },
      type: 'ComboBox',
    }
    onDispatch(selectedElement, newProps)
  }
  const onChangeSwitch =
    (propsName: keyof ComboboxProps) => (checked: React.ChangeEvent<HTMLInputElement>) => {
      const newProps: BrandComboboxProps = {
        props: {
          ...selectedElementProps,
          [propsName]: checked.target.checked,
        },
        type: 'ComboBox',
      }
      onDispatch(selectedElement, newProps)
    }
  const onChangeField = (value: ValueType, field: keyof ComboboxProps) => {
    const newProps: BrandComboboxProps = {
      props: { ...selectedElementProps, [field]: value },
      type: 'ComboBox',
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
      items: selectedElementProps.items,
      value: selectedElementProps.value,
      disabled: selectedElementProps.disabled,
      size: selectedElementProps.size,
      view: selectedElementProps.view,
      form: selectedElementProps.form,
      required: selectedElementProps.required,
      caption: selectedElementProps.caption,
      label: selectedElementProps.label,
      status: selectedElementProps.status,
      labelPosition: selectedElementProps.labelPosition,
      placeholder: selectedElementProps.placeholder,
      isLoading: selectedElementProps.isLoading,
      multiple: selectedElementProps.multiple,
      groups: selectedElementProps.groups,
      groupsActive: selectedElementProps.groupsActive,
      dropdownForm: selectedElementProps.dropdownForm,
    },
  }
}
