import {
  comboboxItemType,
  ISelectedElement,
  ComboboxProps,
  BrandComboboxProps,
  ComboBoxElement,
} from '../../../../coreTypes'
import { setSelectedElement, useAppDispatch } from '../../../../store'
import { ValueType } from './types'

export const useItemsHandlers = (
  selectedElementProps: ComboboxProps,
  selectedElement: ComboBoxElement,
) => {
  const dispatch = useAppDispatch()
  const onDispatch = (selectedElement: ISelectedElement, newProps: BrandComboboxProps) => {
    dispatch(
      setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps: newProps,
      }),
    )
  }
  const onChangeItemsCount = ({ value }: { value: string | null }) => {
    if (value) {
      const newProps: BrandComboboxProps = {
        props: { ...selectedElementProps },
        type: 'ComboBox',
      }
      let itemsProps = [...newProps.props.items]
      const currentLength = itemsProps.length
      if (Number(value) > currentLength) {
        for (let i = currentLength; i < Number(value); i++) {
          itemsProps = [...itemsProps, { id: i, label: '' + (itemsProps.length + 1) }]
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
    if (items) {
      const newProps: BrandComboboxProps = {
        props: { ...selectedElementProps },
        type: 'ComboBox',
      }
      newProps.props.items = [...items]
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeField = (value: ValueType, field: keyof ComboboxProps) => {
    if (selectedElement) {
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
  }
  return {
    onChangeItemsCount,
    onChangeItems,
    onChangeField,
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
