import type {
  BrandComboboxProps,
  ComboBoxElement,
  ComboboxItemType,
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
        props: { ...selectedViewProps, uiLibProps: { ...selectedViewProps.uiLibProps } },
        type: 'ComboBox',
      }
      let itemsProps = [...newProps.props.uiLibProps.items]
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
      newProps.props.uiLibProps.items = itemsProps
      onDispatch(selectedView, newProps)
    }
  }

  const onChangeItems = (items: ComboboxItemType[]) => {
    const newProps: BrandComboboxProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: { ...selectedViewProps.uiLibProps, items: [...items] },
      },
      type: 'ComboBox',
    }
    onDispatch(selectedView, newProps)
  }
  const onChangeStatus = (status: statusType) => {
    const newProps: BrandComboboxProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: { ...selectedViewProps.uiLibProps, status: status === '' ? undefined : status },
      },
      type: 'ComboBox',
    }
    onDispatch(selectedView, newProps)
  }

  const onChangeLabel = (label: string) => {
    const newProps: BrandComboboxProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: { ...selectedViewProps.uiLibProps, label },
      },
      type: 'ComboBox',
    }
    onDispatch(selectedView, newProps)
  }

  const onChangePlaceholder = (placeholder: string) => {
    const newProps: BrandComboboxProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: { ...selectedViewProps.uiLibProps, placeholder },
      },
      type: 'ComboBox',
    }
    onDispatch(selectedView, newProps)
  }

  const onChangeCaption = (caption: string) => {
    const newProps: BrandComboboxProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: { ...selectedViewProps.uiLibProps, caption },
      },
      type: 'ComboBox',
    }
    onDispatch(selectedView, newProps)
  }

  const onChangeSwitch =
    (propsName: keyof ComboboxProps['uiLibProps']) =>
    (checked: React.ChangeEvent<HTMLInputElement>) => {
      const newProps: BrandComboboxProps = {
        props: {
          ...selectedViewProps,
          uiLibProps: { ...selectedViewProps.uiLibProps, [propsName]: checked.target.checked },
        },
        type: 'ComboBox',
      }
      onDispatch(selectedView, newProps)
    }

  const onChangeField = (value: ValueType, field: keyof ComboboxProps['uiLibProps']) => {
    let newProps: BrandComboboxProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: { ...selectedViewProps.uiLibProps },
      },
      type: 'ComboBox',
    }
    if (field === 'label' && value === true) {
      newProps.props.uiLibProps.label = 'Заголовок'
    } else if (field === 'caption' && value === true) {
      newProps.props.uiLibProps.caption = 'Подпись'
    } else {
      newProps = {
        props: {
          ...selectedViewProps,
          uiLibProps: { ...selectedViewProps.uiLibProps, [field]: value },
        },
        type: 'ComboBox',
      }
    }
    onDispatch(selectedView, newProps)
  }

  const onChangeWidth = (value: string | null) => {
    const newProps: BrandComboboxProps = {
      props: {
        ...selectedViewProps,
        styles: { maxWidth: '200px', minWidth: '200px', ...selectedViewProps.styles },
      },
      type: 'ComboBox',
    }
    if (value) {
      let newValue = value
      if (value.startsWith('0')) {
        newValue = newValue.replace('0', '')
      }
      newProps.props.styles.maxWidth = `${newValue}px`
      newProps.props.styles.minWidth = `${newValue}px`
      newProps.props.styles.filled = undefined
      onDispatch(selectedView, newProps)
    } else {
      newProps.props.styles.maxWidth = undefined
      newProps.props.styles.minWidth = ''
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
      items: selectedViewProps.uiLibProps.items,
      value: selectedViewProps.uiLibProps.value,
      disabled: selectedViewProps.uiLibProps.disabled,
      size: selectedViewProps.uiLibProps.size,
      view: selectedViewProps.uiLibProps.view,
      form: selectedViewProps.uiLibProps.form,
      required: selectedViewProps.uiLibProps.required,
      caption: selectedViewProps.uiLibProps.caption,
      label: selectedViewProps.uiLibProps.label,
      status: selectedViewProps.uiLibProps.status,
      labelPosition: selectedViewProps.uiLibProps.labelPosition,
      placeholder: selectedViewProps.uiLibProps.placeholder,
      isLoading: selectedViewProps.uiLibProps.isLoading,
      multiple: selectedViewProps.uiLibProps.multiple,
      groups: selectedViewProps.uiLibProps.groups,
      groupsActive: selectedViewProps.uiLibProps.groupsActive,
      dropdownForm: selectedViewProps.uiLibProps.dropdownForm,
    },
  }
}
