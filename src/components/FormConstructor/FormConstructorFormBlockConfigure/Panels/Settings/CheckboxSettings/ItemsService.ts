import { useDispatch } from 'react-redux'
import { CheckboxProps, formConstructorSlice, useAppSelector } from '../../../../store/formElements'
import { ISelectedElement } from '../../../../store/formElements/types'
import { CheckboxPropSize, CheckboxPropView, CheckboxPropAlign } from '@consta/uikit/Checkbox'

export const useItemsHandlers = () => {
  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)
  const dispatch = useDispatch()

  const onChangeField = (
    value: CheckboxPropSize | CheckboxPropView | CheckboxPropAlign | string,
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

  const onChangeSwitch =
    (propsName: keyof CheckboxProps) =>
    ({ checked }: { checked: boolean }) => {
      if (selectedElementProps) {
        const newProps: CheckboxProps = {
          ...(selectedElementProps as CheckboxProps),
          [propsName]: checked,
        }
        selectedElement && onDispatch(selectedElement, newProps)
      }
    }

  const onDispatch = (selectedElement: ISelectedElement, newProps: CheckboxProps) => {
    dispatch(
      formConstructorSlice.actions.setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps: newProps,
      }),
    )
  }

  return {
    onChangeField,
    onChangeSwitch,
    itemsProps: {
      align: (selectedElementProps as CheckboxProps).align,
      view: (selectedElementProps as CheckboxProps).view,
      checked: (selectedElementProps as CheckboxProps).checked,
      disabled: (selectedElementProps as CheckboxProps).disabled,
      label: (selectedElementProps as CheckboxProps).label,
      size: (selectedElementProps as CheckboxProps).size,
      intermediate: (selectedElementProps as CheckboxProps).intermediate,
    },
  }
}
