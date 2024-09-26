import type React from 'react'
import type {
  BadgePropForm,
  BadgePropSize,
  BadgePropStatus,
  BadgePropView,
} from '@consta/uikit/Badge'

import type {
  BadgeElement,
  BadgeProps,
  BrandBadgeProps,
  IconNames,
  IselectedView,
} from '../../../../coreTypes'
import { setInstanceProps, useAppDispatch } from '../../../../store'

export const useItemsHandlers = (selectedViewProps: BadgeProps, selectedView: BadgeElement) => {
  const dispatch = useAppDispatch()

  const onChangeField = (
    value: BadgePropSize | BadgePropView | BadgePropStatus | BadgePropForm | null,
    field: keyof BadgeProps['constaProps'],
  ) => {
    const newProps: BrandBadgeProps = {
      props: {
        ...selectedViewProps,
        constaProps: { ...selectedViewProps.constaProps, [field]: value },
      },
      type: 'Badge',
    }

    onDispatch(selectedView, newProps)
  }

  const onChangeSwitch =
    (propsName: keyof BadgeProps['constaProps']) =>
    (checked: React.ChangeEvent<HTMLInputElement>) => {
      const newProps: BrandBadgeProps = {
        props: {
          ...selectedViewProps,
          constaProps: { ...selectedViewProps.constaProps, [propsName]: checked.target.checked },
        },
        type: 'Badge',
      }

      onDispatch(selectedView, newProps)
    }

  const onChangeIconLeft = (value: IconNames | null) => {
    const newProps: BrandBadgeProps = {
      props: {
        ...selectedViewProps,
        constaProps: { ...selectedViewProps.constaProps, iconLeft: value ? value : undefined },
      },
      type: 'Badge',
    }

    onDispatch(selectedView, newProps)
  }
  const onChangeIconRight = (value: IconNames | null) => {
    const newProps: BrandBadgeProps = {
      props: {
        ...selectedViewProps,
        constaProps: { ...selectedViewProps.constaProps, iconRight: value ? value : undefined },
      },
      type: 'Badge',
    }
    onDispatch(selectedView, newProps)
  }

  const handleOnChangeLabel = (value: string | null) => {
    const newProps: BrandBadgeProps = {
      props: {
        ...selectedViewProps,
        constaProps: { ...selectedViewProps.constaProps, label: value || undefined },
      },
      type: 'Badge',
    }

    onDispatch(selectedView, newProps)
  }

  const onDispatch = (selectedView: IselectedView, newProps: BrandBadgeProps) => {
    dispatch(setInstanceProps(selectedView.elementId, newProps))
  }

  return {
    onChangeSwitch,
    onChangeIconLeft,
    handleOnChangeLabel,
    onChangeField,
    onChangeIconRight,
    itemsProps: {
      size: selectedViewProps.constaProps.size,
      view: selectedViewProps.constaProps.view,
      form: selectedViewProps.constaProps.form,
      label: selectedViewProps.constaProps.label,
      minified: selectedViewProps.constaProps.minified,
      status: selectedViewProps.constaProps.status,
      iconLeft: selectedViewProps.constaProps.iconLeft,
    },
  }
}
