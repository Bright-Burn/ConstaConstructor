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
      props: { ...selectedViewProps, label: value },
      type: 'Checkbox',
    }
    onDispatch(selectedView, newProps)
  }
  const onChangeField = (
    value: CheckboxPropSize | CheckboxPropView | CheckboxPropAlign | boolean | null,
    field: keyof CheckboxProps,
  ) => {
    const newProps: BrandCheckboxProps = {
      props: { ...selectedViewProps, [field]: value },
      type: 'Checkbox',
    }

    onDispatch(selectedView, newProps)
  }

  const onChangeSwitch =
    (propsName: keyof CheckboxProps) => (checked: React.ChangeEvent<HTMLInputElement>) => {
      const newProps: BrandCheckboxProps = {
        props: { ...selectedViewProps, [propsName]: checked.target.checked },
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
      align: selectedViewProps.align,
      view: selectedViewProps.view,
      checked: selectedViewProps.checked,
      disabled: selectedViewProps.disabled,
      label: selectedViewProps.label,
      size: selectedViewProps.size,
      intermediate: selectedViewProps.intermediate,
    },
  }
}
