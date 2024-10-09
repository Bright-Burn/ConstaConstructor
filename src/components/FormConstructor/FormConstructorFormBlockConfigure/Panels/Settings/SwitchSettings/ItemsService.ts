import type { SwitchPropAlign, SwitchPropSize, SwitchPropView } from '@consta/uikit/Switch'

import type {
  BrandSwitchProps,
  IselectedView,
  SwitchElement,
  SwitchProps,
} from '../../../../coreTypes'
import { setInstanceProps, useAppDispatch } from '../../../../store'

export const useItemsHandlers = (selectedViewProps: SwitchProps, selectedView: SwitchElement) => {
  const dispatch = useAppDispatch()
  const onDispatch = (selectedView: IselectedView, newProps: BrandSwitchProps) => {
    dispatch(setInstanceProps(selectedView.elementId, newProps))
  }

  const onChangeView = (value: SwitchPropView | null) => {
    if (value) {
      const newProps: BrandSwitchProps = {
        props: {
          ...selectedViewProps,
          uiLibProps: { ...selectedViewProps.uiLibProps, view: value },
        },
        type: 'Switch',
      }
      onDispatch(selectedView, newProps)
    }
  }

  const onChangeSize = (value: SwitchPropSize | null) => {
    if (value) {
      const newProps: BrandSwitchProps = {
        props: {
          ...selectedViewProps,
          uiLibProps: { ...selectedViewProps.uiLibProps, size: value },
        },
        type: 'Switch',
      }
      onDispatch(selectedView, newProps)
    }
  }

  const onChangeAlign = (value: SwitchPropAlign | null) => {
    if (value) {
      const newProps: BrandSwitchProps = {
        props: {
          ...selectedViewProps,
          uiLibProps: { ...selectedViewProps.uiLibProps, align: value },
        },
        type: 'Switch',
      }
      onDispatch(selectedView, newProps)
    }
  }

  const onChangeField = (propsName: keyof SwitchProps['uiLibProps']) => (value: string | null) => {
    const newProps: BrandSwitchProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: { ...selectedViewProps.uiLibProps, [propsName]: value },
      },
      type: 'Switch',
    }
    onDispatch(selectedView, newProps)
  }

  const onChangeSwitch =
    (propsName: keyof SwitchProps['uiLibProps']) =>
    (checked: React.ChangeEvent<HTMLInputElement>) => {
      const newProps: BrandSwitchProps = {
        props: { ...selectedViewProps, [propsName]: checked.target.checked },
        type: 'Switch',
      }
      onDispatch(selectedView, newProps)
    }

  return {
    onChangeView,
    onChangeSize,
    onChangeAlign,
    onChangeField,
    onChangeSwitch,
    itemsProps: {
      size: selectedViewProps.uiLibProps.size,
      view: selectedViewProps.uiLibProps.view,
      align: selectedViewProps.uiLibProps.align,
      label: selectedViewProps.uiLibProps.label,
      disabled: selectedViewProps.uiLibProps.disabled,
      checked: selectedViewProps.uiLibProps.checked,
    },
  }
}
