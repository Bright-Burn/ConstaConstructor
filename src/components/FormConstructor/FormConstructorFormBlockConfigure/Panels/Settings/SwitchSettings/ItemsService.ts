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
        props: { ...selectedViewProps },
        type: 'Switch',
      }
      newProps.props.view = value
      onDispatch(selectedView, newProps)
    }
  }

  const onChangeSize = (value: SwitchPropSize | null) => {
    if (value) {
      const newProps: BrandSwitchProps = {
        props: { ...selectedViewProps },
        type: 'Switch',
      }
      newProps.props.size = value
      onDispatch(selectedView, newProps)
    }
  }

  const onChangeAlign = (value: SwitchPropAlign | null) => {
    if (value) {
      const newProps: BrandSwitchProps = {
        props: { ...selectedViewProps },
        type: 'Switch',
      }
      newProps.props.align = value
      onDispatch(selectedView, newProps)
    }
  }

  const onChangeField = (propsName: keyof SwitchProps) => (value: string | null) => {
    const newProps: BrandSwitchProps = {
      props: { ...selectedViewProps, [propsName]: value },
      type: 'Switch',
    }
    onDispatch(selectedView, newProps)
  }

  const onChangeSwitch =
    (propsName: keyof SwitchProps) => (checked: React.ChangeEvent<HTMLInputElement>) => {
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
      size: selectedViewProps.size,
      view: selectedViewProps.view,
      align: selectedViewProps.align,
      label: selectedViewProps.label,
      disabled: selectedViewProps.disabled,
      checked: selectedViewProps.checked,
    },
  }
}
