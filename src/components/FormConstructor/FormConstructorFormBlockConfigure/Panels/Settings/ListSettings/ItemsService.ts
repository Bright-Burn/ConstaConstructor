import {  useAppSelector } from '../../../../store/formElements'
import { ISelectedElement } from '../../../../store/formElements/types'
import { ItemList, ListProps } from '../../../../store/formElements/ListTypes'
import { ListPropForm, ListPropInnerOffset, ListPropSize } from '@consta/uikit/ListCanary'
import { setSelectedElement, useAppDispatch } from '../../../../store'

export const useItemsHandlers = () => {
  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)
  const dispatch = useAppDispatch()

  const onChangeItemsCount = ({ value }: { value: string | null }) => {
    if (selectedElement && value) {
      const newProps: ListProps = {
        ...(selectedElementProps as ListProps),
      }
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
        ...(selectedElementProps as ListProps),
      }
      newProps.size = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeItems = (items: ItemList[]) => {
    if (selectedElement && items) {
      const newProps: ListProps = {
        ...(selectedElementProps as ListProps),
      }
      newProps.items = [...items]
      newProps.value = items[0]
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeInnerOffset = (value: ListPropInnerOffset | null) => {
    if (selectedElement && value) {
      const newProps: ListProps = {
        ...(selectedElementProps as ListProps),
      }
      newProps.innerOffset = value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeForm = (value: ListPropForm | null) => {
    if (selectedElement && value) {
      const newProps: ListProps = {
        ...(selectedElementProps as ListProps),
      }
      newProps.form = value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeSwitch =
    (propsName: keyof ListProps) =>
    ({ checked }: { checked: boolean }) => {
      if (selectedElement) {
        const newProps: ListProps = {
          ...(selectedElementProps as ListProps),
        }
        // @ts-ignore
        newProps[propsName] = checked
        onDispatch(selectedElement, newProps)
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
      activeItem: (selectedElementProps as ListProps).value,
      items: (selectedElementProps as ListProps).items,
      form: (selectedElementProps as ListProps).form,
      size: (selectedElementProps as ListProps).size,
      innerOffset: (selectedElementProps as ListProps).innerOffset,
    },
  }
}
