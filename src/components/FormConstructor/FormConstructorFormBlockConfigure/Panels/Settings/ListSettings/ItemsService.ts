import {
  setSelectedElement,
  useAppDispatch,
  useAppFormConstructorSelector,
} from '../../../../store'
import { ISelectedElement, ItemList, ListProps } from '../../../../coreTypes'
import { ListPropForm, ListPropInnerOffset, ListPropSize } from '@consta/uikit/ListCanary'

export const useItemsHandlers = () => {
  const { selectedElementProps, selectedElement } = useAppFormConstructorSelector<ListProps>()
  const dispatch = useAppDispatch()

  const onChangeItemsCount = ({ value }: { value: string | null }) => {
    if (selectedElement && value) {
      const newProps: ListProps = { ...selectedElementProps }
      let itemsProps = [...newProps.items]
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
      newProps.items = itemsProps
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeSize = (value: ListPropSize | null) => {
    if (selectedElement && value) {
      const newProps: ListProps = {
        ...selectedElementProps,
      }
      newProps.size = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeItems = (items: ItemList[]) => {
    if (selectedElement && items) {
      onDispatch(selectedElement, { ...selectedElementProps, items: [...items], value: items[0] })
    }
  }

  const onChangeInnerOffset = (innerOffset: ListPropInnerOffset | null) => {
    if (selectedElement && innerOffset) {
      onDispatch(selectedElement, { ...selectedElementProps, innerOffset })
    }
  }
  const onChangeForm = (form: ListPropForm | null) => {
    if (selectedElement && form) {
      onDispatch(selectedElement, { ...selectedElementProps, form })
    }
  }
  const onChangeSwitch =
    (propsName: keyof ListProps) =>
    ({ checked }: { checked: boolean }) => {
      if (selectedElement) {
        onDispatch(selectedElement, { ...selectedElementProps, [propsName]: checked })
      }
    }
  const onDispatch = (selectedElement: ISelectedElement, newProps: ListProps) => {
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
