import type {
  BrandOwnChoiceGroupProps,
  ChoiceGroupElement,
  ChoiceGroupItem,
  IselectedView,
  OwnChoiceGroupProps,
} from '../../../../coreTypes'
import { setInstanceProps, useAppDispatch } from '../../../../store'

import type { ValueType } from './types'

export const useItemsHandlers = (
  selectedViewProps: OwnChoiceGroupProps,
  selectedView: ChoiceGroupElement,
) => {
  const dispatch = useAppDispatch()

  const onDispatch = (selectedView: IselectedView, newProps: BrandOwnChoiceGroupProps) => {
    dispatch(setInstanceProps(selectedView.elementId, newProps))
  }

  const onChangeItemsCount = (value: string | null) => {
    if (value) {
      const newProps: BrandOwnChoiceGroupProps = {
        props: { ...selectedViewProps },
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
      onDispatch(selectedView, newProps)
    }
  }

  const onChangeItems = (items: ChoiceGroupItem[]) => {
    const newProps: BrandOwnChoiceGroupProps = {
      props: { ...selectedViewProps },
      type: 'ChoiceGroup',
    }
    newProps.props.items = [...items]
    onDispatch(selectedView, newProps)
  }

  const onChangeField = (value: ValueType, field: keyof OwnChoiceGroupProps) => {
    const newProps: BrandOwnChoiceGroupProps = {
      props: { ...selectedViewProps, [field]: value },
      type: 'ChoiceGroup',
    }

    onDispatch(selectedView, newProps)
  }

  const onChangeSwitch =
    (propsName: keyof OwnChoiceGroupProps) => (checked: React.ChangeEvent<HTMLInputElement>) => {
      const newProps: BrandOwnChoiceGroupProps = {
        props: { ...selectedViewProps, [propsName]: checked.target.checked },
        type: 'ChoiceGroup',
      }
      onDispatch(selectedView, newProps)
    }

  return {
    onChangeItemsCount,
    onChangeItems,
    onChangeField,
    onChangeSwitch,
    itemsProps: {
      items: selectedViewProps.items,
      value: selectedViewProps.value,
      size: selectedViewProps.size,
      view: selectedViewProps.view,
      form: selectedViewProps.form,
      multiple: selectedViewProps.multiple,
      onlyIcon: selectedViewProps.onlyIcon,
      disabled: selectedViewProps.disabled,
      width: selectedViewProps.width,
    },
  }
}
