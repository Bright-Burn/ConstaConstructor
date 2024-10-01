import type { CheckboxPropAlign, CheckboxPropSize, CheckboxPropView } from '@consta/uikit/Checkbox'

import type {
  BrandCheckboxProps,
  CheckboxElement,
  CheckboxProps,
  IselectedView,
} from '../../../../coreTypes'
import { setInstanceProps, useAppDispatch } from '../../../../store'

export const useItemsHandlers = (
  selectedViewProps: CheckboxProps,
  selectedView: CheckboxElement,
) => {
  const dispatch = useAppDispatch()
  const onChangeLabel = (value: string) => {
    const newProps: BrandCheckboxProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: {
          ...selectedViewProps.uiLibProps,
          label: value,
        },
      },
      type: 'Checkbox',
    }
    onDispatch(selectedView, newProps)
  }
  const onChangeField = (
    value: CheckboxPropSize | CheckboxPropView | CheckboxPropAlign | boolean | null,
    field: keyof CheckboxProps['uiLibProps'],
  ) => {
    const newProps: BrandCheckboxProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: {
          ...selectedViewProps.uiLibProps,
          [field]: value,
        },
      },
      type: 'Checkbox',
    }

    onDispatch(selectedView, newProps)
  }

  const onChangeSwitch =
    (propsName: keyof CheckboxProps['uiLibProps']) =>
    (checked: React.ChangeEvent<HTMLInputElement>) => {
      const newProps: BrandCheckboxProps = {
        props: {
          ...selectedViewProps,
          uiLibProps: {
            ...selectedViewProps.uiLibProps,
            [propsName]: checked.target.checked,
          },
        },
        type: 'Checkbox',
      }
      onDispatch(selectedView, newProps)
    }

  const onDispatch = (selectedView: IselectedView, newProps: BrandCheckboxProps) => {
    dispatch(setInstanceProps(selectedView.elementId, newProps))
  }

  return {
    onChangeField,
    onChangeSwitch,
    onChangeLabel,
    itemsProps: {
      align: selectedViewProps.uiLibProps.align,
      view: selectedViewProps.uiLibProps.view,
      checked: selectedViewProps.uiLibProps.checked,
      disabled: selectedViewProps.uiLibProps.disabled,
      label: selectedViewProps.uiLibProps.label,
      size: selectedViewProps.uiLibProps.size,
      intermediate: selectedViewProps.uiLibProps.intermediate,
    },
  }
}
