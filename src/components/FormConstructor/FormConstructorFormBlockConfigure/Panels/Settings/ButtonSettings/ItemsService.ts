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
        constaProps: { ...selectedViewProps.constaProps, label: value },
      },
      type: 'Button',
    }
    onDispatch(selectedView, newProps)
  }
  const onChangeSize = (value: ButtonPropSize) => {
    const newProps: BrandButtonProps = {
      props: {
        ...selectedViewProps,
        constaProps: { ...selectedViewProps.constaProps, size: value },
      },
      type: 'Button',
    }
    onDispatch(selectedView, newProps)
  }
  const onChangeView = (value: ButtonPropView) => {
    const newProps: BrandButtonProps = {
      props: {
        ...selectedViewProps,
        constaProps: { ...selectedViewProps.constaProps, view: value },
      },
      type: 'Button',
    }
    onDispatch(selectedView, newProps)
  }
  const onChangeForm = (value: ButtonPropForm) => {
    const newProps: BrandButtonProps = {
      props: {
        ...selectedViewProps,
        constaProps: { ...selectedViewProps.constaProps, form: value },
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
        constaProps: { ...selectedViewProps.constaProps, loading: checked },
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
        constaProps: { ...selectedViewProps.constaProps, disabled: checked },
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
        constaProps: { ...selectedViewProps.constaProps, onlyIcon: checked },
      },
      type: 'Button',
    }
    onDispatch(selectedView, newProps)
  }

  const onChangeIcon = (value: IconNames | null) => {
    const newProps: BrandButtonProps = {
      props: {
        ...selectedViewProps,
        constaProps: { ...selectedViewProps.constaProps, iconLeft: value ? value : undefined },
      },
      type: 'Button',
    }
    onDispatch(selectedView, newProps)
  }

  const onChangeIconR = (value: IconNames | null) => {
    const newProps: BrandButtonProps = {
      props: {
        ...selectedViewProps,
        constaProps: { ...selectedViewProps.constaProps, iconRight: value ? value : undefined },
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
      size: selectedViewProps.constaProps.size,
      view: selectedViewProps.constaProps.view,
      label: selectedViewProps.constaProps.label,
      disabled: selectedViewProps.constaProps.disabled,
      iconLeft: selectedViewProps.constaProps.iconLeft,
      form: selectedViewProps.constaProps.form,
      loading: selectedViewProps.constaProps.loading,
      iconRight: selectedViewProps.constaProps.iconRight,
      onlyIcon: selectedViewProps.constaProps.onlyIcon,
      icon: selectedViewProps.constaProps.iconLeft,
      iconR: selectedViewProps.constaProps.iconRight,
    },
  }
}
