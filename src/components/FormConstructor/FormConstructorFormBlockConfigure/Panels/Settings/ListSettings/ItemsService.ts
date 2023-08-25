import { ISelectedElement } from '../../../../coreTypes'
import { ItemList, ListProps } from '../../../../coreTypes'
import { ListPropForm, ListPropInnerOffset, ListPropSize } from '@consta/uikit/ListCanary'
import { setSelectedElement, useAppDispatch } from '../../../../store'
import { BrandListProps, ListElement } from '../../../../coreTypes/ListTypes'

export const useItemsHandlers = (selectedElementProps: ListProps, selectedElement: ListElement) => {
  const dispatch = useAppDispatch()

  const onChangeItemsCount = ({ value }: { value: string | null }) => {
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
            { id: i, label: '' + (itemsProps.length + 1), disabled: false },
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

  const onChangeSize = (value: ListPropSize | null) => {
    if (value) {
      const newProps: BrandListProps = {
        props: { ...selectedElementProps },
        type: 'List',
      }
      newProps.props.size = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeItems = (items: ItemList[]) => {
    if (items) {
      const newProps: BrandListProps = {
        props: { ...selectedElementProps },
        type: 'List',
      }
      newProps.props.items = [...items]
      newProps.props.value = items[0]
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeInnerOffset = (value: ListPropInnerOffset | null) => {
    if (value) {
      const newProps: BrandListProps = {
        props: { ...selectedElementProps },
        type: 'List',
      }
      newProps.props.innerOffset = value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeForm = (value: ListPropForm | null) => {
    if (value) {
      const newProps: BrandListProps = {
        props: { ...selectedElementProps },
        type: 'List',
      }
      newProps.props.form = value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeSwitch =
    (propsName: keyof ListProps) =>
    ({ checked }: { checked: boolean }) => {
      const newProps: BrandListProps = {
        props: { ...selectedElementProps },
        type: 'List',
      }
      // @ts-ignore
      newProps.props[propsName] = checked
      onDispatch(selectedElement, newProps)
    }
  const onDispatch = (selectedElement: ISelectedElement, newProps: BrandListProps) => {
    dispatch(
      setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps: newProps,
      }),
    )
  }
  return {
    onChangeSize,
    onChangeSwitch,
    onChangeInnerOffset,
    onChangeForm,
    onChangeItemsCount,
    onChangeItems,
    itemsProps: {
      activeItem: selectedElementProps.value,
      items: selectedElementProps.items,
      form: selectedElementProps.form,
      size: selectedElementProps.size,
      innerOffset: selectedElementProps.innerOffset,
    },
  }
}
