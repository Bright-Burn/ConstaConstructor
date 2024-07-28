import type {
  BrandOwnChoiceGroupProps,
  ChoiceGroupElement,
  ChoiceGroupItem,
  ISelectedElement,
  OwnChoiceGroupProps,
} from '../../../../coreTypes'
import { setInstanceProps, useAppDispatch } from '../../../../store'

import type { ValueType } from './types'

export const useItemsHandlers = (
  selectedElementProps: OwnChoiceGroupProps,
  selectedElement: ChoiceGroupElement,
) => {
  const dispatch = useAppDispatch()

  const onDispatch = (selectedElement: ISelectedElement, newProps: BrandOwnChoiceGroupProps) => {
    dispatch(setInstanceProps(selectedElement.elementId, newProps))
  }

  const onChangeItemsCount = (value: string | null) => {
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
              label: `Вариант ${i + 1}`,
            } satisfies ChoiceGroupItem,
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

  const onChangeItems = (items: ChoiceGroupItem[]) => {
    const newProps: BrandOwnChoiceGroupProps = {
      props: { ...selectedElementProps },
      type: 'ChoiceGroup',
    }
    newProps.props.items = [...items]
    onDispatch(selectedElement, newProps)
  }

  const onChangeField = (value: ValueType, field: keyof OwnChoiceGroupProps) => {
    const newProps: BrandOwnChoiceGroupProps = {
      props: { ...selectedElementProps, [field]: value },
      type: 'ChoiceGroup',
    }

    onDispatch(selectedElement, newProps)
  }

  const onChangeSwitch =
    (propsName: keyof OwnChoiceGroupProps) => (checked: React.ChangeEvent<HTMLInputElement>) => {
      const newProps: BrandOwnChoiceGroupProps = {
        props: { ...selectedElementProps, [propsName]: checked.target.checked },
        type: 'ChoiceGroup',
      }
      onDispatch(selectedElement, newProps)
    }

  return {
    onChangeItemsCount,
    onChangeItems,
    onChangeField,
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
      width: selectedElementProps.width,
    },
  }
}
