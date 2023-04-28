import { useDispatch } from 'react-redux'
import { formConstructorSlice, useAppSelector } from '../../../../store/formElements'
import { ISelectedElement } from '../../../../store/formElements/types'
import {
  ItemList,
  ListElementProps,
  ListElementPropsStyles,
} from '../../../../store/formElements/ListTypes'
import { ListPropForm, ListPropInnerOffset, ListPropSize } from '@consta/uikit/ListCanary'

export const useItemsHandlers = () => {
  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)
  const dispatch = useDispatch()

  const onChangeItemsCount = ({ value }: { value: string | null }) => {
    if (selectedElement && value) {
      const newProps: ListElementProps = {
        ...(selectedElementProps as ListElementProps),
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
      const newProps: ListElementProps = {
        ...(selectedElementProps as ListElementProps),
      }
      newProps.size = value
      debugger
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeItems = (items: ItemList[]) => {
    if (selectedElement && items) {
      const newProps: ListElementProps = {
        ...(selectedElementProps as ListElementProps),
      }
      newProps.items = [...items]
      newProps.value = items[0]
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeInnerOffset = (value: ListPropInnerOffset | null) => {
    if (selectedElement && value) {
      const newProps: ListElementProps = {
        ...(selectedElementProps as ListElementProps),
      }
      newProps.innerOffset = value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeForm = (value: ListPropForm | null) => {
    if (selectedElement && value) {
      const newProps: ListElementProps = {
        ...(selectedElementProps as ListElementProps),
      }
      newProps.form = value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeSwitch =
    (propsName: keyof ListElementProps) =>
    ({ checked }: { checked: boolean }) => {
      if (selectedElement) {
        const newProps: ListElementProps = {
          ...(selectedElementProps as ListElementProps),
        }
        // @ts-ignore
        newProps[propsName] = checked
        onDispatch(selectedElement, newProps)
      }
    }
  const onDispatch = (selectedElement: ISelectedElement, newProps: ListElementProps) => {
    dispatch(
      formConstructorSlice.actions.setSelectedElement({
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
      activeItem: (selectedElementProps as ListElementProps).value,
      items: (selectedElementProps as ListElementProps).items,
      form: (selectedElementProps as ListElementProps).form,
      size: (selectedElementProps as ListElementProps).size,
      innerOffset: (selectedElementProps as ListElementProps).innerOffset,
    },
  }
}
