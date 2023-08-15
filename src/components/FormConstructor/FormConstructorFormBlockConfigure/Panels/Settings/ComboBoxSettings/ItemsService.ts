import { comboboxItemType, ComboboxProps, ISelectedElement, PropForm } from '../../../../coreTypes'
import { TextFieldPropSize, TextFieldPropStatus, TextFieldPropView } from '@consta/uikit/TextField'
import { setSelectedElement, useAppDispatch, useAppSelector } from '../../../../store'
import { getSelectedElementProps } from '../../../../store/formElements'

export const useItemsHandlers = () => {
  const { selectedElement } = useAppSelector(state => state.formConstructor)
  const { selectedElementProps } = useAppSelector(getSelectedElementProps<ComboboxProps>)
  const dispatch = useAppDispatch()

  const onDispatch = (selectedElement: ISelectedElement, newProps: ComboboxProps) => {
    dispatch(
      setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps: newProps,
      }),
    )
  }
  const onChangeItemsCount = ({ value }: { value: string | null }) => {
    if (selectedElement && value) {
      const newProps: ComboboxProps = { ...selectedElementProps }
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
  const onChangeItems = (items: comboboxItemType[]) => {
    if (selectedElement && items) {
      onDispatch(selectedElement, { ...selectedElementProps, items: [...items], value: items[0] })
    }
  }

  const onChangeSize = (size: TextFieldPropSize | null) => {
    if (selectedElement && size) {
      onDispatch(selectedElement, { ...selectedElementProps, size })
    }
  }

  const onChangeView = (view: TextFieldPropView | null) => {
    if (selectedElement && view) {
      onDispatch(selectedElement, { ...selectedElementProps, view })
    }
  }

  const onChangeForm = (form: PropForm | null) => {
    if (selectedElement && form) {
      onDispatch(selectedElement, { ...selectedElementProps, form })
    }
  }

  const onChangeField =
    (propsName: keyof ComboboxProps) =>
    ({ value }: { value: string | null }) => {
      if (selectedElement) {
        onDispatch(selectedElement, { ...selectedElementProps, [propsName]: value || '' })
      }
    }

  const onChangeStatus = (status: TextFieldPropStatus | null) => {
    if (selectedElement && status) {
      onDispatch(selectedElement, { ...selectedElementProps, status })
    }
  }

  const onChangeLabelPosition = (labelPosition: 'top' | 'left' | null) => {
    if (selectedElement && labelPosition) {
      onDispatch(selectedElement, { ...selectedElementProps, labelPosition })
    }
  }

  const onChangeSwitch =
    (propsName: keyof ComboboxProps) =>
    ({ checked }: { checked: boolean }) => {
      if (selectedElement) {
        onDispatch(selectedElement, { ...selectedElementProps, [propsName]: checked })
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
