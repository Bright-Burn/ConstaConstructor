import { RadioPropAlign, RadioPropSize, RadioPropView } from '@consta/uikit/Radio'
import { ISelectedElement, RadioButtonProps } from '../../../../coreTypes'
import { setSelectedElement, useAppDispatch, useAppSelector } from '../../../../store'
import { getSelectedElementProps } from '../../../../store/formElements'

export const useItemsHandlers = () => {
  const { selectedElement } = useAppSelector(state => state.formConstructor)
  const { selectedElementProps } = useAppSelector(getSelectedElementProps<RadioButtonProps>)
  const dispatch = useAppDispatch()

  const onDispatch = (selectedElement: ISelectedElement, newProps: RadioButtonProps) => {
    dispatch(
      setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps: newProps,
      }),
    )
  }

  const onChangeView = (view: RadioPropView | null) => {
    if (selectedElement && view) {
      onDispatch(selectedElement, { ...selectedElementProps, view })
    }
  }

  const onChangeSize = (size: RadioPropSize | null) => {
    if (selectedElement && size) {
      onDispatch(selectedElement, { ...selectedElementProps, size })
    }
  }

  const onChangeAlign = (align: RadioPropAlign | null) => {
    if (selectedElement && align) {
      onDispatch(selectedElement, { ...selectedElementProps, align })
    }
  }

  const onChangeField =
    (propsName: keyof RadioButtonProps) =>
    ({ value }: { value: string | null }) => {
      if (selectedElement) {
        onDispatch(selectedElement, { ...selectedElementProps, [propsName]: value || '' })
      }
    }

  const onChangeSwitch =
    (propsName: keyof RadioButtonProps) =>
    ({ checked }: { checked: boolean }) => {
      if (selectedElementProps && selectedElement) {
        onDispatch(selectedElement, { ...selectedElementProps, [propsName]: checked })
      }
    }
  const onChangeChacked = (checked: boolean) => {
    if (selectedElement) {
      onDispatch(selectedElement, { ...selectedElementProps, checked })
    }
  }

  return {
    onChangeView,
    onChangeSize,
    onChangeAlign,
    onChangeField,
    onChangeSwitch,
    onChangeChacked,
    itemsProps: {
      checked: selectedElementProps.checked,
      size: selectedElementProps.size,
      view: selectedElementProps.view,
      align: selectedElementProps.align,
      label: selectedElementProps.label,
      disabled: selectedElementProps.disabled,
    },
  }
}
