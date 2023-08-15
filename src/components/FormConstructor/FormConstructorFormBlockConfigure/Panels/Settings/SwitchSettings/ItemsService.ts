import { ISelectedElement, SwitchProps } from '../../../../coreTypes'
import { SwitchPropAlign, SwitchPropSize, SwitchPropView } from '@consta/uikit/Switch'
import {
  setSelectedElement,
  useAppDispatch,
  useAppFormConstructorSelector,
} from '../../../../store'

export const useItemsHandlers = () => {
  const { selectedElementProps, selectedElement } = useAppFormConstructorSelector<SwitchProps>()

  const dispatch = useAppDispatch()

  const onDispatch = (selectedElement: ISelectedElement, newProps: SwitchProps) => {
    dispatch(
      setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps: newProps,
      }),
    )
  }
  const onChangeView = (view: SwitchPropView | null) => {
    if (selectedElement && view) {
      onDispatch(selectedElement, { ...selectedElementProps, view })
    }
  }
  const onChangeSize = (size: SwitchPropSize | null) => {
    if (selectedElement && size) {
      onDispatch(selectedElement, { ...selectedElementProps, size })
    }
  }
  const onChangeAlign = (align: SwitchPropAlign | null) => {
    if (selectedElement && align) {
      onDispatch(selectedElement, { ...selectedElementProps, align })
    }
  }
  const onChangeField =
    (propsName: keyof SwitchProps) =>
    ({ value }: { value: string | null }) => {
      if (selectedElement) {
        onDispatch(selectedElement, { ...selectedElementProps, [propsName]: value || '' })
      }
    }
  return {
    onChangeView,
    onChangeSize,
    onChangeAlign,
    onChangeField,
    itemsProps: {
      size: selectedElementProps.size,
      view: selectedElementProps.view,
      align: selectedElementProps.align,
      label: selectedElementProps.label,
    },
  }
}
