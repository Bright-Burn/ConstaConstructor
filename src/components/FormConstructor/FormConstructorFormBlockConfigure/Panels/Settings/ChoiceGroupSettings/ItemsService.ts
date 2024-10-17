import type {
  BrandOwnChoiceGroupProps,
  ChoiceGroupElement,
  ChoiceGroupItem,
  ChoiceGroupProps,
  IselectedView,
} from '../../../../coreTypes'
import { setInstanceProps, useAppDispatch } from '../../../../store'

import type { ValueType } from './types'

export const useItemsHandlers = (
  selectedViewProps: ChoiceGroupProps,
  selectedView: ChoiceGroupElement,
) => {
  const dispatch = useAppDispatch()

  const onDispatch = (selectedView: IselectedView, newProps: BrandOwnChoiceGroupProps) => {
    dispatch(setInstanceProps(selectedView.elementId, newProps))
  }

  const onChangeItemsCount = (value: string | null) => {
    if (value) {
      let itemsProps = [...selectedViewProps.uiLibProps.items]
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
      const newProps: BrandOwnChoiceGroupProps = {
        props: {
          ...selectedViewProps,
          uiLibProps: { ...selectedViewProps.uiLibProps, items: itemsProps },
        },
        type: 'ChoiceGroup',
      }
      onDispatch(selectedView, newProps)
    }
  }

  const onChangeItems = (items: ChoiceGroupItem[]) => {
    const newProps: BrandOwnChoiceGroupProps = {
      props: { ...selectedViewProps },
      type: 'ChoiceGroup',
    }
    newProps.props.uiLibProps.items = [...items]
    onDispatch(selectedView, newProps)
  }

  const onChangeField = (value: ValueType, field: keyof ChoiceGroupProps['uiLibProps']) => {
    const newProps: BrandOwnChoiceGroupProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: {
          ...selectedViewProps.uiLibProps,
          [field]: value,
        },
      },
      type: 'ChoiceGroup',
    }

    onDispatch(selectedView, newProps)
  }

  const onChangeSwitch =
    (propsName: keyof ChoiceGroupProps['uiLibProps']) =>
    (checked: React.ChangeEvent<HTMLInputElement>) => {
      const newProps: BrandOwnChoiceGroupProps = {
        props: {
          ...selectedViewProps,
          uiLibProps: { ...selectedViewProps.uiLibProps, [propsName]: checked.target.checked },
        },
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
      items: selectedViewProps.uiLibProps.items,
      value: selectedViewProps.uiLibProps.value,
      size: selectedViewProps.uiLibProps.size,
      view: selectedViewProps.uiLibProps.view,
      form: selectedViewProps.uiLibProps.form,
      multiple: selectedViewProps.uiLibProps.multiple,
      onlyIcon: selectedViewProps.uiLibProps.onlyIcon,
      disabled: selectedViewProps.uiLibProps.disabled,
      width: selectedViewProps.uiLibProps.width,
    },
  }
}
