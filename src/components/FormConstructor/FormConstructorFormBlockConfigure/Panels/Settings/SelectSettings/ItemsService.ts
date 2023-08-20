import { PropForm, SelectProps, ISelectedElement, selectitemType, BrandSelectProps, SelectElement  } from '../../../../coreTypes'
import { TextFieldPropSize, TextFieldPropView, TextFieldPropStatus } from '@consta/uikit/TextField'
import { setSelectedElement, useAppDispatch, useAppSelector } from '../../../../store'

export const useItemsHandlers = (selectedElementProps: SelectProps, selectedElement: SelectElement) => {
  const dispatch = useAppDispatch()
  const onDispatch = (selectedElement: SelectElement, newProps: BrandSelectProps) => {
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
      const newProps: BrandSelectProps = {
        props: {...selectedElementProps},
        type: 'SelectForm',
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
  const onChangeItems = (items: selectitemType[]) => {
    if (selectedElement && items) {
      const newProps: BrandSelectProps = {
        props: {...selectedElementProps},
        type: 'SelectForm',
      }

      newProps.props.items = [...items]
      newProps.props.value = items[0]
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeSize = (value: TextFieldPropSize | null) => {
    if (selectedElement && value) {
      const newProps: BrandSelectProps = {
        props: {...selectedElementProps},
        type: 'SelectForm',
      }

      newProps.props.size = value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeView = (value: TextFieldPropView | null) => {
    if (selectedElement && value) {
      const newProps: BrandSelectProps = {
        props: {...selectedElementProps},
        type: 'SelectForm',
      }

      newProps.props.view = value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeForm = (value: PropForm | null) => {
    if (selectedElement && value) {
      const newProps: BrandSelectProps = {
        props: {...selectedElementProps},
        type: 'SelectForm',
      }

      newProps.props.form = value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeStatus = (value: TextFieldPropStatus | null) => {
    if (selectedElement && value) {
      const newProps: BrandSelectProps = {
        props: {...selectedElementProps},
        type: 'SelectForm',
      }

      newProps.props.status = value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeLabelPosition = (value: 'top' | 'left' | null) => {
    if (selectedElement && value) {
      const newProps: BrandSelectProps = {
        props: {...selectedElementProps},
        type: 'SelectForm',
      }

      newProps.props.labelPosition = value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeField =
    (propsName: keyof SelectProps) =>
    ({ value }: { value: string | null }) => {
      if (selectedElement) {
        const newProps: BrandSelectProps = {
          props: {
            ...selectedElementProps,
            [propsName]: value || '',
          },
          type: 'SelectForm',
        }
        onDispatch(selectedElement, newProps)
      }
    }
  const onChangeSwitch =
    (propsName: keyof SelectProps) =>
    ({ checked }: { checked: boolean }) => {
      if (selectedElement) {
        const newProps: BrandSelectProps = {
          props: {
            ...selectedElementProps,
            [propsName]: checked,
          },
          type: 'SelectForm',
        }
        onDispatch(selectedElement, newProps)
      }
    }
  return {
    onChangeItemsCount,
    onChangeForm,
    onChangeLabelPosition,
    onChangeItems,
    onChangeStatus,
    onChangeView,
    onChangeSize,
    onChangeField,
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
    },
  }
}
