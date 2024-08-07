import type {
  BrandListProps,
  ISelectedElement,
  ListElement,
  ListProps,
} from '../../../../coreTypes'
import { setInstanceProps, useAppDispatch } from '../../../../store'

import type { ValueType } from './types'

export const useItemsHandlers = (selectedElementProps: ListProps, selectedElement: ListElement) => {
  const dispatch = useAppDispatch()

  const onChangeItemsCount = (value: string | null) => {
    if (value) {
      const newProps: BrandListProps = {
        props: { ...selectedElementProps },
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
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeField = (value: ValueType, field: keyof ListProps) => {
    const newProps: BrandListProps = {
      props: { ...selectedElementProps, [field]: value },
      type: 'List',
    }

    onDispatch(selectedElement, newProps)
  }

  const onChangeSwitch =
    (propsName: keyof ListProps) => (checked: React.ChangeEvent<HTMLInputElement>) => {
      const newProps: BrandListProps = {
        props: { ...selectedElementProps, [propsName]: checked },
        type: 'List',
      }

      onDispatch(selectedElement, newProps)
    }

  const onDispatch = (selectedElement: ISelectedElement, newProps: BrandListProps) => {
    dispatch(setInstanceProps(selectedElement.elementId, newProps))
  }
  return {
    onChangeField,
    onChangeSwitch,
    onChangeItemsCount,
    itemsProps: {
      activeItem: selectedElementProps.value,
      items: selectedElementProps.items,
      form: selectedElementProps.form,
      size: selectedElementProps.size,
      innerOffset: selectedElementProps.innerOffset,
      withListBox: selectedElementProps.withListBox,
    },
  }
}
