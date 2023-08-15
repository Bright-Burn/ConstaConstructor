import {
  setSelectedElement,
  useAppDispatch,
  useAppFormConstructorSelector,
} from '../../../../store'
import { ISelectedElement, OwnChoiceGroupProps } from '../../../../coreTypes'
import {
  ChoiceGroupPropForm,
  ChoiceGroupPropSize,
  ChoiceGroupPropView,
} from '@consta/uikit/ChoiceGroup'
import { Item } from './types'
import { Icons } from '../../../Elements/IconFormElement/mocks'

export const useItemsHandlers = () => {
  const { selectedElementProps, selectedElement } =
    useAppFormConstructorSelector<OwnChoiceGroupProps>()

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
      const newProps: OwnChoiceGroupProps = { ...selectedElementProps }
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
        ...selectedElementProps,
      }
      newProps.value = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeItems = (items: Item[]) => {
    if (selectedElement && items) {
      const newProps: OwnChoiceGroupProps = {
        ...selectedElementProps,
      }
      newProps.items = [...items]
      newProps.value = items[0]
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeSize = (value: ChoiceGroupPropSize | null) => {
    if (selectedElement && value) {
      onDispatch(selectedElement, { ...selectedElementProps, size: value })
    }
  }

  const onChangeView = (value: ChoiceGroupPropView | null) => {
    if (selectedElement && value) {
      onDispatch(selectedElement, { ...selectedElementProps, view: value })
    }
  }

  const onChangeForm = (value: ChoiceGroupPropForm | null) => {
    if (selectedElement && value) {
      onDispatch(selectedElement, { ...selectedElementProps, form: value })
    }
  }

  const onChangeSwitch =
    (propsName: keyof OwnChoiceGroupProps) =>
    ({ checked }: { checked: boolean }) => {
      if (selectedElement) {
        onDispatch(selectedElement, { ...selectedElementProps, [propsName]: checked })
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
      items: selectedElementProps.items,
      value: selectedElementProps.value,
      size: selectedElementProps.size,
      view: selectedElementProps.view,
      form: selectedElementProps.form,
      multiple: selectedElementProps.multiple,
      onlyIcon: selectedElementProps.onlyIcon,
      disabled: selectedElementProps.disabled,
    },
  }
}
