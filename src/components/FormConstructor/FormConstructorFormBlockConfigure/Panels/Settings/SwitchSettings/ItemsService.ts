import type { SwitchPropAlign, SwitchPropSize, SwitchPropView } from '@consta/uikit/Switch'

import type {
  BrandSwitchProps,
  ISelectedElement,
  SwitchElement,
  SwitchProps,
} from '../../../../coreTypes'
import { setSelectedElement, useAppDispatch } from '../../../../store'

export const useItemsHandlers = (
  selectedElementProps: SwitchProps,
  selectedElement: SwitchElement,
) => {
  const dispatch = useAppDispatch()
  const onDispatch = (selectedElement: ISelectedElement, newProps: BrandSwitchProps) => {
    dispatch(
      setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps,
      }),
    )
  }

  const onChangeView = (value: SwitchPropView | null) => {
    if (value) {
      const newProps: BrandSwitchProps = {
        props: { ...selectedElementProps },
        type: 'Switch',
      }
      newProps.props.view = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeSize = (value: SwitchPropSize | null) => {
    if (value) {
      const newProps: BrandSwitchProps = {
        props: { ...selectedElementProps },
        type: 'Switch',
      }
      newProps.props.size = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeAlign = (value: SwitchPropAlign | null) => {
    if (value) {
      const newProps: BrandSwitchProps = {
        props: { ...selectedElementProps },
        type: 'Switch',
      }
      newProps.props.align = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeField =
    (propsName: keyof SwitchProps) =>
    ({ value }: { value: string | null }) => {
      const newProps: BrandSwitchProps = {
        props: { ...selectedElementProps, [propsName]: value },
        type: 'Switch',
      }
      onDispatch(selectedElement, newProps)
    }

  const onChangeSwitch =
    (propsName: keyof SwitchProps) =>
    ({ checked }: { checked: boolean }) => {
      const newProps: BrandSwitchProps = {
        props: { ...selectedElementProps, [propsName]: checked },
        type: 'Switch',
      }
      onDispatch(selectedElement, newProps)
    }

  return {
    onChangeView,
    onChangeSize,
    onChangeAlign,
    onChangeField,
    onChangeSwitch,
    itemsProps: {
      size: selectedElementProps.size,
      view: selectedElementProps.view,
      align: selectedElementProps.align,
      label: selectedElementProps.label,
      disabled: selectedElementProps.disabled,
      checked: selectedElementProps.checked,
    },
  }
}
