import type { CheckboxPropAlign, CheckboxPropSize, CheckboxPropView } from '@consta/uikit/Checkbox'

import type {
  BrandCheckboxProps,
  CheckboxElement,
  CheckboxProps,
  ISelectedElement,
} from '../../../../coreTypes'
import { setInstanceProps, useAppDispatch } from '../../../../store'

export const useItemsHandlers = (
  selectedElementProps: CheckboxProps,
  selectedElement: CheckboxElement,
) => {
  const dispatch = useAppDispatch()
  const onChangeLabel = (value: string) => {
    const newProps: BrandCheckboxProps = {
      props: { ...selectedElementProps, label: value },
      type: 'Checkbox',
    }
    onDispatch(selectedElement, newProps)
  }
  const onChangeField = (
    value: CheckboxPropSize | CheckboxPropView | CheckboxPropAlign | boolean | null,
    field: keyof CheckboxProps,
  ) => {
    const newProps: BrandCheckboxProps = {
      props: { ...selectedElementProps, [field]: value },
      type: 'Checkbox',
    }

    onDispatch(selectedElement, newProps)
  }

  const onChangeSwitch =
    (propsName: keyof CheckboxProps) => (checked: React.ChangeEvent<HTMLInputElement>) => {
      const newProps: BrandCheckboxProps = {
        props: { ...selectedElementProps, [propsName]: checked.target.checked },
        type: 'Checkbox',
      }
      onDispatch(selectedElement, newProps)
    }

  const onDispatch = (selectedElement: ISelectedElement, newProps: BrandCheckboxProps) => {
    dispatch(setInstanceProps(selectedElement.elementId, newProps))
  }

  return {
    onChangeField,
    onChangeSwitch,
    onChangeLabel,
    itemsProps: {
      align: selectedElementProps.align,
      view: selectedElementProps.view,
      checked: selectedElementProps.checked,
      disabled: selectedElementProps.disabled,
      label: selectedElementProps.label,
      size: selectedElementProps.size,
      intermediate: selectedElementProps.intermediate,
    },
  }
}
