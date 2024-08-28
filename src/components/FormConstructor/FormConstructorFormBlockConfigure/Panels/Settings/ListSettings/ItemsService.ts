import type { BrandListProps, IselectedView, ListElement, ListProps } from '../../../../coreTypes'
import { setInstanceProps, useAppDispatch } from '../../../../store'

import type { ValueType } from './types'

export const useItemsHandlers = (selectedViewProps: ListProps, selectedView: ListElement) => {
  const dispatch = useAppDispatch()

  const onChangeItemsCount = (value: string | null) => {
    if (value) {
      const newProps: BrandListProps = {
        props: { ...selectedViewProps },
        type: 'List',
      }
      let itemsProps = [...newProps.props.items]
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
      newProps.props.items = itemsProps
      onDispatch(selectedView, newProps)
    }
  }

  const onChangeField = (value: ValueType, field: keyof ListProps) => {
    const newProps: BrandListProps = {
      props: { ...selectedViewProps, [field]: value },
      type: 'List',
    }

    onDispatch(selectedView, newProps)
  }

  const onChangeSwitch =
    (propsName: keyof ListProps) => (checked: React.ChangeEvent<HTMLInputElement>) => {
      const newProps: BrandListProps = {
        props: { ...selectedViewProps, [propsName]: checked },
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
      activeItem: selectedViewProps.value,
      items: selectedViewProps.items,
      form: selectedViewProps.form,
      size: selectedViewProps.size,
      innerOffset: selectedViewProps.innerOffset,
      withListBox: selectedViewProps.withListBox,
    },
  }
}
