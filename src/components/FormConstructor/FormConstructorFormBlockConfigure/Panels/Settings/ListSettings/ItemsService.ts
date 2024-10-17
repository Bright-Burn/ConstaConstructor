import type { BrandListProps, IselectedView, ListElement, ListProps } from '../../../../coreTypes'
import { setInstanceProps, useAppDispatch } from '../../../../store'

import type { ValueType } from './types'

export const useItemsHandlers = (selectedViewProps: ListProps, selectedView: ListElement) => {
  const dispatch = useAppDispatch()

  const onChangeItemsCount = (value: string | null) => {
    if (value) {
      const newProps: BrandListProps = {
        props: { ...selectedViewProps, uiLibProps: { ...selectedViewProps.uiLibProps } },
        type: 'List',
      }
      let itemsProps = [...newProps.props.uiLibProps.items]
      const currentLength = itemsProps.length
      if (Number(value) > currentLength) {
        for (let i = currentLength; i < Number(value); i++) {
          itemsProps = [
            ...itemsProps,
            { id: i, label: `${itemsProps.length + 1}`, disabled: false },
          ]
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

  const onChangeField = (value: ValueType, field: keyof ListProps['uiLibProps']) => {
    const newProps: BrandListProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: { ...selectedViewProps.uiLibProps, [field]: value },
      },
      type: 'List',
    }

    onDispatch(selectedView, newProps)
  }

  const onChangeSwitch =
    (propsName: keyof ListProps['uiLibProps']) =>
    (checked: React.ChangeEvent<HTMLInputElement>) => {
      const newProps: BrandListProps = {
        props: {
          ...selectedViewProps,
          uiLibProps: { ...selectedViewProps.uiLibProps, [propsName]: checked },
        },
        type: 'List',
      }

      onDispatch(selectedView, newProps)
    }

  const onDispatch = (selectedView: IselectedView, newProps: BrandListProps) => {
    dispatch(setInstanceProps(selectedView.elementId, newProps))
  }
  return {
    onChangeField,
    onChangeSwitch,
    onChangeItemsCount,
    itemsProps: {
      activeItem: selectedViewProps.uiLibProps.value,
      items: selectedViewProps.uiLibProps.items,
      form: selectedViewProps.uiLibProps.form,
      size: selectedViewProps.uiLibProps.size,
      innerOffset: selectedViewProps.uiLibProps.innerOffset,
      withListBox: selectedViewProps.uiLibProps.withListBox,
    },
  }
}
