import { useDispatch } from 'react-redux'
import { formConstructorSlice, useAppSelector } from '../../../../store/formElements'
import { ISelectedElement } from '../../../../store/formElements/types'
import { ITEM } from '../../../../store/formElements/tabsTypes'
import { ComboboxProps } from '../../../../store/formElements/comboBoxTypes'
import {
  PropForm,
  PropSize,
  PropStatus,
  PropView,
} from '@consta/uikit/__internal__/src/components/SelectComponents/types'

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

  const onChangeSize = (value: PropSize | null) => {
    if (selectedElement && value) {
      const newProps: ComboboxProps = {
        ...(selectedElementProps as ComboboxProps),
      }
      newProps.size = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeView = (value: PropView | null) => {
    if (selectedElement && value) {
      const newProps: ComboboxProps = {
        ...(selectedElementProps as ComboboxProps),
      }
      newProps.view = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeForm = (value: PropForm | null) => {
    if (selectedElement && value) {
      const newProps: ComboboxProps = {
        ...(selectedElementProps as ComboboxProps),
      }
      newProps.form = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeField =
    (propsName: keyof ComboboxProps) =>
    ({ value }: { value: string | null }) => {
      if (selectedElement) {
        const newProps: ComboboxProps = {
          ...(selectedElementProps as ComboboxProps),
        }
        // @ts-ignore
        newProps[propsName] = value || ''
        onDispatch(selectedElement, newProps)
      }
    }

  const onChangeStatus = (value: PropStatus | null) => {
    if (selectedElement && value) {
      const newProps: ComboboxProps = {
        ...(selectedElementProps as ComboboxProps),
      }
      newProps.status = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeLabelPosition = (value: 'top' | 'left' | null) => {
    if (selectedElement && value) {
      const newProps: ComboboxProps = {
        ...(selectedElementProps as ComboboxProps),
      }
      newProps.labelPosition = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeSwitch =
    (propsName: keyof ComboboxProps) =>
    ({ checked }: { checked: boolean }) => {
      if (selectedElement) {
        const newProps: ComboboxProps = {
          ...(selectedElementProps as ComboboxProps),
        }
        // @ts-ignore
        newProps[propsName] = checked
        onDispatch(selectedElement, newProps)
      }
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
    },
  }
}
