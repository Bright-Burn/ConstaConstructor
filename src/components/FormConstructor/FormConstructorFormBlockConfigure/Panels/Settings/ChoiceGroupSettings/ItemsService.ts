import { useAppSelector } from '../../../../store'
import { ISelectedElement, OwnChoiceGroupProps } from '../../../../coreTypes'
import {
  ChoiceGroupPropForm,
  ChoiceGroupPropSize,
  ChoiceGroupPropView,
} from '@consta/uikit/ChoiceGroup'
import { Item } from './types'
import { Icons } from '../../../Elements/IconFormElement/mocks'
import { setSelectedElement, useAppDispatch } from '../../../../store'

export const useItemsHandlers = () => {
  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)
  const dispatch = useAppDispatch()

  const onDispatch = (selectedElement: ISelectedElement, newProps: OwnChoiceGroupProps) => {
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
      const newProps: OwnChoiceGroupProps = {
        ...(selectedElementProps as OwnChoiceGroupProps),
      }
      let itemsProps = [...newProps.items]
      const currentLength = itemsProps.length
      if (Number(value) > currentLength) {
        for (let i = currentLength; i < Number(value); i++) {
          itemsProps = [
            ...itemsProps,
            { icon: Icons['IconAdd'], labelIcon: 'IconAdd', label: `new ${i + 1}` },
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

  const onChangeActiveItem = ({ value }: { value: Item[] | Item | null }) => {
    if (selectedElement && value) {
      const newProps: OwnChoiceGroupProps = {
        ...(selectedElementProps as OwnChoiceGroupProps),
      }
      newProps.value = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeItems = (items: Item[]) => {
    if (selectedElement && items) {
      const newProps: OwnChoiceGroupProps = {
        ...(selectedElementProps as OwnChoiceGroupProps),
      }
      newProps.items = [...items]
      newProps.value = items[0]
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeSize = (value: ChoiceGroupPropSize | null) => {
    if (selectedElement && value) {
      const newProps: OwnChoiceGroupProps = {
        ...(selectedElementProps as OwnChoiceGroupProps),
      }
      newProps.size = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeView = (value: ChoiceGroupPropView | null) => {
    if (selectedElement && value) {
      const newProps: OwnChoiceGroupProps = {
        ...(selectedElementProps as OwnChoiceGroupProps),
      }
      newProps.view = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeForm = (value: ChoiceGroupPropForm | null) => {
    if (selectedElement && value) {
      const newProps: OwnChoiceGroupProps = {
        ...(selectedElementProps as OwnChoiceGroupProps),
      }
      newProps.form = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeSwitch =
    (propsName: keyof OwnChoiceGroupProps) =>
    ({ checked }: { checked: boolean }) => {
      if (selectedElement) {
        const newProps: OwnChoiceGroupProps = {
          ...(selectedElementProps as OwnChoiceGroupProps),
        }
        // @ts-ignore
        newProps[propsName] = checked
        onDispatch(selectedElement, newProps)
      }
    }

  return {
    onChangeItemsCount,
    onChangeItems,
    onChangeView,
    onChangeSize,
    onChangeForm,
    onChangeActiveItem,
    onChangeSwitch,
    itemsProps: {
      items: (selectedElementProps as OwnChoiceGroupProps).items,
      value: (selectedElementProps as OwnChoiceGroupProps).value,
      size: (selectedElementProps as OwnChoiceGroupProps).size,
      view: (selectedElementProps as OwnChoiceGroupProps).view,
      form: (selectedElementProps as OwnChoiceGroupProps).form,
      multiple: (selectedElementProps as OwnChoiceGroupProps).multiple,
      onlyIcon: (selectedElementProps as OwnChoiceGroupProps).onlyIcon,
      disabled: (selectedElementProps as OwnChoiceGroupProps).disabled,
    },
  }
}
