import { CheckboxProps, ISelectedElement } from '../../../../coreTypes'
import { CheckboxPropAlign, CheckboxPropSize, CheckboxPropView } from '@consta/uikit/Checkbox'
import {
  setSelectedElement,
  useAppDispatch,
  useAppFormConstructorSelector,
} from '../../../../store'

export const useItemsHandlers = () => {
  const { selectedElementProps, selectedElement } = useAppFormConstructorSelector<CheckboxProps>()

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
