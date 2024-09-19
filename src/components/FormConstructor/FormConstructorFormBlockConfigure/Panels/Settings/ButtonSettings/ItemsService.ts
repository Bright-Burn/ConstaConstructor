import type React from 'react'
import type { ButtonPropForm, ButtonPropSize, ButtonPropView } from '@consta/uikit/Button'

import type {
  BrandButtonProps,
  ButtonElement,
  ButtonProps,
  IconNames,
  IselectedView,
} from '../../../../coreTypes'
import { setInstanceProps, useAppDispatch } from '../../../../store'

export const useItemsHandlers = (selectedViewProps: ButtonProps, selectedView: ButtonElement) => {
  const dispatch = useAppDispatch()
  const onChangeLabel = (value: string) => {
    const newProps: BrandButtonProps = {
      props: structuredClone(selectedViewProps),
      type: 'Button',
    }
    newProps.props.constaProps.label = value
    onDispatch(selectedView, newProps)
  }
  const onChangeSize = (value: ButtonPropSize) => {
    const newProps: BrandButtonProps = {
      props: structuredClone(selectedViewProps),
      type: 'Button',
    }
    newProps.props.constaProps.size = value
    onDispatch(selectedView, newProps)
  }
  const onChangeView = (value: ButtonPropView) => {
    const newProps: BrandButtonProps = {
      props: structuredClone(selectedViewProps),
      type: 'Button',
    }
    newProps.props.constaProps.view = value
    onDispatch(selectedView, newProps)
  }
  const onChangeForm = (value: ButtonPropForm) => {
    const newProps: BrandButtonProps = {
      props: structuredClone(selectedViewProps),
      type: 'Button',
    }
    newProps.props.constaProps.form = value
    onDispatch(selectedView, newProps)
  }

  const onChangeSwitch =
    (propsName: keyof ButtonProps['constaProps']) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const checked = event.target.checked
      const newProps: BrandButtonProps = {
        props: {
          ...selectedViewProps,
          [propsName]: checked,
        },
        type: 'Button',
      }
      onDispatch(selectedView, newProps)
    }

  const onChangeIcon = (value: IconNames | null) => {
    const newProps: BrandButtonProps = {
      props: structuredClone(selectedViewProps),
      type: 'Button',
    }
    newProps.props.styles.icon = value ? value : undefined
    onDispatch(selectedView, newProps)
  }

  const onChangeIconR = (value: IconNames | null) => {
    const newProps: BrandButtonProps = {
      props: structuredClone(selectedViewProps),
      type: 'Button',
    }
    newProps.props.styles.iconR = value ? value : undefined
    onDispatch(selectedView, newProps)
  }

  const onDispatch = (selectedView: IselectedView, newProps: BrandButtonProps) => {
    dispatch(setInstanceProps(selectedView.elementId, newProps))
  }

  return {
    onChangeSwitch,
    onChangeIcon,
    onChangeIconR,
    onChangeLabel,
    onChangeSize,
    onChangeView,
    onChangeForm,
    itemsProps: {
      size: selectedViewProps.constaProps.size,
      view: selectedViewProps.constaProps.view,
      // action: selectedViewProps.action,
      label: selectedViewProps.constaProps.label,
      disabled: selectedViewProps.constaProps.disabled,
      iconLeft: selectedViewProps.constaProps.iconLeft,
      form: selectedViewProps.constaProps.form,
      loading: selectedViewProps.constaProps.loading,
      iconRight: selectedViewProps.constaProps.iconRight,
      onlyIcon: selectedViewProps.constaProps.onlyIcon,
      icon: selectedViewProps.styles.icon,
      iconR: selectedViewProps.styles.iconR,
    },
  }
}
