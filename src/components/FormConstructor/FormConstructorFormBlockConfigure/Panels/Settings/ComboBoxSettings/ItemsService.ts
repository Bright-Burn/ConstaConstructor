import { comboboxItemType, ISelectedElement, ComboboxProps, PropForm } from '../../../../coreTypes'
import { TextFieldPropSize, TextFieldPropStatus, TextFieldPropView } from '@consta/uikit/TextField'
import { setSelectedElement, useAppDispatch } from '../../../../store'
import { BrandComboboxProps, ComboBoxElement } from '../../../../coreTypes/comboBoxTypes'

export const useItemsHandlers = (selectedElementProps: ComboboxProps, selectedElement: ComboBoxElement) => {
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
        props: {...selectedElementProps},
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
        props: {...selectedElementProps},
        type: 'ComboBox',
      }
      newProps.props.items = [...items]
      newProps.props.value = items[0]
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeSize = (value: TextFieldPropSize | null) => {
    if (value) {
      const newProps: BrandComboboxProps = {
        props: {...selectedElementProps},
        type: 'ComboBox',
      }
      newProps.props.size = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeView = (value: TextFieldPropView | null) => {
    if (value) {
      const newProps: BrandComboboxProps = {
        props: {...selectedElementProps},
        type: 'ComboBox',
      }
      newProps.props.view = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeForm = (value: PropForm | null) => {
    if (value) {
      const newProps: BrandComboboxProps = {
        props: {...selectedElementProps},
        type: 'ComboBox',
      }
      newProps.props.form = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeField =
    (propsName: keyof ComboboxProps) =>
    ({ value }: { value: string | null }) => {
        const newProps: BrandComboboxProps = {
          props: {
            ...selectedElementProps,
            [propsName]: value || '',
          },
          type: 'ComboBox',
        }
        onDispatch(selectedElement, newProps)
    }

  const onChangeStatus = (value: TextFieldPropStatus | null) => {
    if (value) {
      const newProps: BrandComboboxProps = {
        props: {...selectedElementProps},
        type: 'ComboBox',
      }
      newProps.props.status = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeLabelPosition = (value: 'top' | 'left' | null) => {
    if (value) {
      const newProps: BrandComboboxProps = {
        props: {...selectedElementProps},
        type: 'ComboBox',
      }
      newProps.props.labelPosition = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeSwitch =
    (propsName: keyof ComboboxProps) =>
    ({ checked }: { checked: boolean }) => {
        const newProps: BrandComboboxProps = {
          props: {
            ...selectedElementProps,
            [propsName]: checked,
          },
          type: 'ComboBox',
        }
        // @tsignore[propsName] = checked
        onDispatch(selectedElement, newProps)
    }
  return {
    onChangeItemsCount,
    onChangeLabelPosition,
    onChangeStatus,
    onChangeItems,
    onChangeField,
    onChangeView,
    onChangeSize,
    onChangeForm,
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
    },
  }
}
