import { useDispatch } from 'react-redux'
import { formConstructorSlice, useAppSelector } from '../../../../store/formElements'
import { ISelectedElement } from '../../../../store/formElements/types'
import { ITEM } from '../../../../store/formElements/tabsTypes'
import { ComboboxProps } from '../../../../store/formElements/comboBoxTypes'
import { TextFieldPropSize, TextFieldPropStatus, TextFieldPropView } from '@consta/uikit/TextField'
import { PropForm } from '../../../../store/formElements/selectTypes'
import { DatePickerPropDropdownForm } from '@consta/uikit/DatePicker'

export const useItemsHandlers = () => {
  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)
  const dispatch = useDispatch()

  const onDispatch = (selectedElement: ISelectedElement, newProps: ComboboxProps) => {
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
      const newProps: ComboboxProps = {
        ...(selectedElementProps as ComboboxProps),
      }
      let itemsProps = [...newProps.items]
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
      newProps.items = itemsProps
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeItems = (items: ITEM[]) => {
    if (selectedElement && items) {
      const newProps: ComboboxProps = {
        ...(selectedElementProps as ComboboxProps),
      }
      newProps.items = [...items]
      newProps.value = items[0]
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeField = (
    value:
      | DatePickerPropDropdownForm
      | TextFieldPropStatus
      | PropForm
      | TextFieldPropView
      | TextFieldPropSize
      | 'top'
      | 'left'
      | boolean
      | string,
    field: keyof ComboboxProps,
  ) => {
    if (selectedElement) {
      const newProps: ComboboxProps = {
        ...(selectedElementProps as ComboboxProps),
        [field]: value,
      }
      onDispatch(selectedElement, newProps)
    }
  }

  return {
    onChangeItemsCount,
    onChangeItems,
    onChangeField,
    itemsProps: {
      items: (selectedElementProps as ComboboxProps).items,
      value: (selectedElementProps as ComboboxProps).value,
      disabled: (selectedElementProps as ComboboxProps).disabled,
      size: (selectedElementProps as ComboboxProps).size,
      view: (selectedElementProps as ComboboxProps).view,
      form: (selectedElementProps as ComboboxProps).form,
      required: (selectedElementProps as ComboboxProps).required,
      caption: (selectedElementProps as ComboboxProps).caption,
      label: (selectedElementProps as ComboboxProps).label,
      status: (selectedElementProps as ComboboxProps).status,
      labelPosition: (selectedElementProps as ComboboxProps).labelPosition,
      placeholder: (selectedElementProps as ComboboxProps).placeholder,
      isLoading: (selectedElementProps as ComboboxProps).isLoading,
      multiple: (selectedElementProps as ComboboxProps).multiple,
      dropdownForm: (selectedElementProps as ComboboxProps).dropdownForm,
      groups: (selectedElementProps as ComboboxProps).groups,
      groupsActive: (selectedElementProps as ComboboxProps).groupsActive,
    },
  }
}
