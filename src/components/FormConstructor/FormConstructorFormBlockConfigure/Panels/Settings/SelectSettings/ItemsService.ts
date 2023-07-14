import { useDispatch } from 'react-redux'
import { formConstructorSlice, useAppSelector } from '../../../../store/formElements'
import { ISelectedElement } from '../../../../store/formElements/types'
import { ITEM } from '../../../../store/formElements/tabsTypes'
import { PropForm, SelectProps } from '../../../../store/formElements/selectTypes'
import { TextFieldPropSize, TextFieldPropView, TextFieldPropStatus } from '@consta/uikit/TextField'
import { DatePickerPropDropdownForm } from '@consta/uikit/DatePicker'

export const useItemsHandlers = () => {
  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)
  const dispatch = useDispatch()
  const onDispatch = (selectedElement: ISelectedElement, newProps: SelectProps) => {
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
      const newProps: SelectProps = {
        ...(selectedElementProps as SelectProps),
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
      const newProps: SelectProps = {
        ...(selectedElementProps as SelectProps),
      }
      newProps.items = [...items]
      newProps.value = items[0]
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeField = (
    value:
      | DatePickerPropDropdownForm
      | TextFieldPropView
      | TextFieldPropSize
      | PropForm
      | TextFieldPropStatus
      | ''
      | 'top'
      | 'left'
      | boolean
      | string,
    field: keyof SelectProps,
  ) => {
    if (selectedElement) {
      const newProps: SelectProps = {
        ...(selectedElementProps as SelectProps),
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
      disabled: (selectedElementProps as SelectProps).disabled,
      size: (selectedElementProps as SelectProps).size,
      view: (selectedElementProps as SelectProps).view,
      form: (selectedElementProps as SelectProps).form,
      items: (selectedElementProps as SelectProps).items,
      required: (selectedElementProps as SelectProps).required,
      status: (selectedElementProps as SelectProps).status,
      caption: (selectedElementProps as SelectProps).caption,
      label: (selectedElementProps as SelectProps).label,
      labelPosition: (selectedElementProps as SelectProps).labelPosition,
      placeholder: (selectedElementProps as SelectProps).placeholder,
      isLoading: (selectedElementProps as SelectProps).isLoading,
      groups: (selectedElementProps as SelectProps).groups,
      dropdownForm: (selectedElementProps as SelectProps).dropdownForm,
      groupsActive: (selectedElementProps as SelectProps).groupsActive,
    },
  }
}
