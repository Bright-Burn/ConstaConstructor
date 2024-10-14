import type React from 'react'

import type {
  BrandSelectProps,
  SelectElement,
  selectitemType,
  SelectProps,
} from '../../../../coreTypes'
import { setInstanceProps, useAppDispatch } from '../../../../store'

import type { ValueType } from './fileTypes'
import type { StatusType } from './types'

export const useItemsHandlers = (selectedViewProps: SelectProps, selectedView: SelectElement) => {
  const dispatch = useAppDispatch()
  const onDispatch = (selectedView: SelectElement, newProps: BrandSelectProps) => {
    dispatch(setInstanceProps(selectedView.elementId, newProps))
  }

  const onChangeItemsCount = (value: string | null) => {
    if (value) {
      const newProps: BrandSelectProps = {
        props: { ...selectedViewProps, uiLibProps: { ...selectedViewProps.uiLibProps } },
        type: 'SelectForm',
      }

      let itemsProps = [...newProps.props.uiLibProps.items]
      const currentLength = itemsProps.length
      if (Number(value) > currentLength) {
        for (let i = currentLength; i < Number(value); i++) {
          itemsProps = [...itemsProps, { id: i + 1, label: `${itemsProps.length + 1}` }]
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

  const onChangeItems = (items: selectitemType[]) => {
    const newProps: BrandSelectProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: {
          ...selectedViewProps.uiLibProps,
          items: [...items],
        },
      },
      type: 'SelectForm',
    }
    onDispatch(selectedView, newProps)
  }
  const onChangeStatus = (value: StatusType) => {
    const newProps: BrandSelectProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: { ...selectedViewProps.uiLibProps, status: value === '' ? undefined : value },
      },
      type: 'SelectForm',
    }
    onDispatch(selectedView, newProps)
  }
  const onChangeLabel = (value: string) => {
    const newProps: BrandSelectProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: { ...selectedViewProps.uiLibProps, label: value },
      },
      type: 'SelectForm',
    }
    onDispatch(selectedView, newProps)
  }
  const onChangeCaption = (value: string) => {
    const newProps: BrandSelectProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: { ...selectedViewProps.uiLibProps, caption: value },
      },
      type: 'SelectForm',
    }
    onDispatch(selectedView, newProps)
  }
  const onChangePlaceholder = (value: string) => {
    const newProps: BrandSelectProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: { ...selectedViewProps.uiLibProps, placeholder: value },
      },
      type: 'SelectForm',
    }
    onDispatch(selectedView, newProps)
  }
  const onChangeSwitch =
    (propsName: keyof SelectProps['uiLibProps']) =>
    (checked: React.ChangeEvent<HTMLInputElement>) => {
      const newProps: BrandSelectProps = {
        props: {
          ...selectedViewProps,
          uiLibProps: { ...selectedViewProps.uiLibProps, [propsName]: checked.target.checked },
        },
        type: 'SelectForm',
      }

      onDispatch(selectedView, newProps)
    }

  const onChangeField = (value: ValueType, field: keyof SelectProps['uiLibProps']) => {
    let newProps: BrandSelectProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: { ...selectedViewProps.uiLibProps },
      },
      type: 'SelectForm',
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
        type: 'SelectForm',
      }
    }
    onDispatch(selectedView, newProps)
  }

  const onChangeWidth = (value: string | null) => {
    const newProps: BrandSelectProps = {
      props: { ...selectedViewProps, styles: { ...selectedViewProps.styles } },
      type: 'SelectForm',
    }
    newProps.props.styles = { maxWidth: '200px', minWidth: '200px', ...newProps.props.styles }
    if (value) {
      let newValue = value
      if (value.startsWith('0')) {
        newValue = newValue.replace('0', '')
      }
      newProps.props.styles.maxWidth = `${newValue}px`
      newProps.props.styles.minWidth = `${newValue}px`
    } else {
      newProps.props.styles.maxWidth = ''
      newProps.props.styles.minWidth = ''
    }
    onDispatch(selectedView, newProps)
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
      disabled: selectedViewProps.uiLibProps.disabled,
      size: selectedViewProps.uiLibProps.size,
      view: selectedViewProps.uiLibProps.view,
      form: selectedViewProps.uiLibProps.form,
      items: selectedViewProps.uiLibProps.items,
      required: selectedViewProps.uiLibProps.required,
      status: selectedViewProps.uiLibProps.status,
      caption: selectedViewProps.uiLibProps.caption,
      label: selectedViewProps.uiLibProps.label,
      labelPosition: selectedViewProps.uiLibProps.labelPosition,
      placeholder: selectedViewProps.uiLibProps.placeholder,
      isLoading: selectedViewProps.uiLibProps.isLoading,
      groups: selectedViewProps.uiLibProps.groups,
      groupsActive: selectedViewProps.uiLibProps.groupsActive,
      dropdownForm: selectedViewProps.uiLibProps.dropdownForm,
      value: selectedViewProps.uiLibProps.value,
    },
  }
}
