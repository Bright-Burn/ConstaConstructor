import { ISelectedElement, CheckboxProps } from '../../../../coreTypes'
import { CheckboxPropSize, CheckboxPropView, CheckboxPropAlign } from '@consta/uikit/Checkbox'
import { setSelectedElement, useAppDispatch } from '../../../../store'
import { BrandCheckboxProps, CheckboxElement } from '../../../../coreTypes/checkboxTypes'

export const useItemsHandlers = (
  selectedElementProps: CheckboxProps,
  selectedElement: CheckboxElement,
) => {
  const dispatch = useAppDispatch()

  const onChangeField = (
    value: CheckboxPropSize | CheckboxPropView | CheckboxPropAlign | string | boolean,
    field: keyof CheckboxProps,
  ) => {
    if (selectedElement) {
      const newProps: BrandCheckboxProps = {
        props: { ...selectedElementProps },
        type: 'Checkbox',
      }

      // @ts-ignore
      newProps.props[field] = value

      onDispatch(selectedElement, newProps)
    }
  }

  const onDispatch = (selectedElement: ISelectedElement, newProps: BrandCheckboxProps) => {
    dispatch(
      setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps: newProps,
      }),
    )
  }

  return {
    onChangeField,
    itemsProps: {
      align: selectedElementProps.align,
      view: selectedElementProps.view,
      checked: selectedElementProps.checked,
      disabled: selectedElementProps.disabled,
      label: selectedElementProps.label,
      size: selectedElementProps.size,
    },
  }
}
