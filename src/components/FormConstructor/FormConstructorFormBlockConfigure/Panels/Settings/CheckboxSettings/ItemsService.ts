import { CheckboxProps, ISelectedElement } from '../../../../coreTypes'
import { CheckboxPropAlign, CheckboxPropSize, CheckboxPropView } from '@consta/uikit/Checkbox'
import { setSelectedElement, useAppDispatch, useAppSelector } from '../../../../store'
import { getSelectedElementProps } from '../../../../store/formElements'

export const useItemsHandlers = () => {
  const { selectedElement } = useAppSelector(state => state.formConstructor)
  const { selectedElementProps } = useAppSelector(getSelectedElementProps<CheckboxProps>)
  const dispatch = useAppDispatch()

  const onChangeField = (
    value: CheckboxPropSize | CheckboxPropView | CheckboxPropAlign | string | boolean,
    field: keyof CheckboxProps,
  ) => {
    if (selectedElement) {
      onDispatch(selectedElement, { ...selectedElementProps, [field]: value })
    }
  }

  const onDispatch = (selectedElement: ISelectedElement, newProps: CheckboxProps) => {
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
