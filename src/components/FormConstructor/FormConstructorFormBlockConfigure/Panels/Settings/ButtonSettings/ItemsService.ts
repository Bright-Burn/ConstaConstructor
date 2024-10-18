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
      props: {
        ...selectedViewProps,
        uiLibProps: { ...selectedViewProps.uiLibProps, label: value },
      },
      type: 'Button',
    }
    onDispatch(selectedView, newProps)
  }
  const onChangeSize = (value: ButtonPropSize) => {
    const newProps: BrandButtonProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: { ...selectedViewProps.uiLibProps, size: value },
      },
      type: 'Button',
    }
    onDispatch(selectedView, newProps)
  }
  const onChangeView = (value: ButtonPropView) => {
    const newProps: BrandButtonProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: { ...selectedViewProps.uiLibProps, view: value },
      },
      type: 'Button',
    }
    onDispatch(selectedView, newProps)
  }
  const onChangeForm = (value: ButtonPropForm) => {
    const newProps: BrandButtonProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: { ...selectedViewProps.uiLibProps, form: value },
      },
      type: 'Button',
    }
    onDispatch(selectedView, newProps)
  }

  const onChangeLoading = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked
    const newProps: BrandButtonProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: { ...selectedViewProps.uiLibProps, loading: checked },
      },
      type: 'Button',
    }
    onDispatch(selectedView, newProps)
  }

  const onChangeDisabled = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked
    const newProps: BrandButtonProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: { ...selectedViewProps.uiLibProps, disabled: checked },
      },
      type: 'Button',
    }
    onDispatch(selectedView, newProps)
  }

  const onChangeOnlyIcon = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked
    const newProps: BrandButtonProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: { ...selectedViewProps.uiLibProps, onlyIcon: checked },
      },
      type: 'Button',
    }
    onDispatch(selectedView, newProps)
  }

  const onChangeIcon = (value: IconNames | null) => {
    const newProps: BrandButtonProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: { ...selectedViewProps.uiLibProps, iconLeft: value ? value : undefined },
      },
      type: 'Button',
    }
    onDispatch(selectedView, newProps)
  }

  const onChangeIconR = (value: IconNames | null) => {
    const newProps: BrandButtonProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: { ...selectedViewProps.uiLibProps, iconRight: value ? value : undefined },
      },
      type: 'Button',
    }
    onDispatch(selectedView, newProps)
  }

  const onDispatch = (selectedView: IselectedView, newProps: BrandButtonProps) => {
    dispatch(setInstanceProps(selectedView.elementId, newProps))
  }

  return {
    onChangeOnlyIcon,
    onChangeDisabled,
    onChangeLoading,
    onChangeIcon,
    onChangeIconR,
    onChangeLabel,
    onChangeSize,
    onChangeView,
    onChangeForm,
    itemsProps: {
      size: selectedViewProps.uiLibProps.size,
      view: selectedViewProps.uiLibProps.view,
      label: selectedViewProps.uiLibProps.label,
      disabled: selectedViewProps.uiLibProps.disabled,
      iconLeft: selectedViewProps.uiLibProps.iconLeft,
      form: selectedViewProps.uiLibProps.form,
      loading: selectedViewProps.uiLibProps.loading,
      iconRight: selectedViewProps.uiLibProps.iconRight,
      onlyIcon: selectedViewProps.uiLibProps.onlyIcon,
      icon: selectedViewProps.uiLibProps.iconLeft,
      iconR: selectedViewProps.uiLibProps.iconRight,
    },
  }
}
