import { CheckboxProps, useAppSelector } from '../../../../store/formElements'
import { ISelectedElement } from '../../../../store/formElements/types'
import { CheckboxPropSize, CheckboxPropView, CheckboxPropAlign } from '@consta/uikit/Checkbox'
import { setSelectedElement, useAppDispatch } from '../../../../store'

export const useItemsHandlers = () => {
  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)
  const dispatch = useAppDispatch()

  const onChangeField = (
    value: CheckboxPropSize | CheckboxPropView | CheckboxPropAlign | string | boolean,
    field: keyof CheckboxProps,
  ) => {
    if (selectedElement) {
      const newProps: CheckboxProps = {
        ...(selectedElementProps as CheckboxProps),
      }

      // @ts-ignore
      newProps[field] = value

      onDispatch(selectedElement, newProps)
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
      align: (selectedElementProps as CheckboxProps).align,
      view: (selectedElementProps as CheckboxProps).view,
      checked: (selectedElementProps as CheckboxProps).checked,
      disabled: (selectedElementProps as CheckboxProps).disabled,
      label: (selectedElementProps as CheckboxProps).label,
      size: (selectedElementProps as CheckboxProps).size,
    },
  }
}
