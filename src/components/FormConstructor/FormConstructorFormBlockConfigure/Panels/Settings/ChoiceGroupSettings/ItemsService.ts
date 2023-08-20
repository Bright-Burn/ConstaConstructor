import {
  BrandOwnChoiceGroupProps,
  ChoiceGroupElement,
  ISelectedElement,
  OwnChoiceGroupProps,
  DeepWriteable,
} from '../../../../coreTypes'
import {
  ChoiceGroupPropForm,
  ChoiceGroupPropSize,
  ChoiceGroupPropView,
} from '@consta/uikit/ChoiceGroup'
import { Item } from './types'
import { Icons } from '../../../Elements/IconFormElement/mocks'
import { setSelectedElement, useAppDispatch } from '../../../../store'

export const useItemsHandlers = (
  selectedElementProps: DeepWriteable<OwnChoiceGroupProps>,
  selectedElement: ChoiceGroupElement,
) => {
  const dispatch = useAppDispatch()

  const onDispatch = (selectedElement: ISelectedElement, newProps: BrandOwnChoiceGroupProps) => {
    dispatch(
      setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps: newProps,
      }),
    )
  }

  const onChangeItemsCount = ({ value }: { value: string | null }) => {
    if (value) {
      const newProps: BrandOwnChoiceGroupProps = {
        props: { ...selectedElementProps },
        type: 'ChoiceGroup',
      }
      let itemsProps = [...newProps.props.items]
      const currentLength = itemsProps.length
      if (Number(value) > currentLength) {
        for (let i = currentLength; i < Number(value); i++) {
          itemsProps = [
            ...itemsProps,
            {
              icon: Icons['IconAdd'],
              labelIcon: 'IconAdd',
              label: `new ${i + 1}`,
            } as DeepWriteable<Item>,
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

  const onChangeActiveItem = ({
    value,
  }: {
    value: DeepWriteable<Item[]> | DeepWriteable<Item> | null
  }) => {
    if (value) {
      const newProps: BrandOwnChoiceGroupProps = {
        props: { ...selectedElementProps },
        type: 'ChoiceGroup',
      }
      newProps.props.value = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeItems = (items: DeepWriteable<Item[]>) => {
    if (items) {
      const newProps: BrandOwnChoiceGroupProps = {
        props: { ...selectedElementProps },
        type: 'ChoiceGroup',
      }
      newProps.props.items = [...items]
      newProps.props.value = items[0]
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeSize = (value: ChoiceGroupPropSize | null) => {
    if (value) {
      const newProps: BrandOwnChoiceGroupProps = {
        props: { ...selectedElementProps },
        type: 'ChoiceGroup',
      }
      newProps.props.size = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeView = (value: ChoiceGroupPropView | null) => {
    if (value) {
      const newProps: BrandOwnChoiceGroupProps = {
        props: { ...selectedElementProps },
        type: 'ChoiceGroup',
      }
      newProps.props.view = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeForm = (value: ChoiceGroupPropForm | null) => {
    if (value) {
      const newProps: BrandOwnChoiceGroupProps = {
        props: { ...selectedElementProps },
        type: 'ChoiceGroup',
      }
      newProps.props.form = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeSwitch =
    (propsName: keyof OwnChoiceGroupProps) =>
    ({ checked }: { checked: boolean }) => {
      const newProps: BrandOwnChoiceGroupProps = {
        props: { ...selectedElementProps },
        type: 'ChoiceGroup',
      }
      // @ts-ignore
      newProps.props[propsName] = checked
      onDispatch(selectedElement, newProps)
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
