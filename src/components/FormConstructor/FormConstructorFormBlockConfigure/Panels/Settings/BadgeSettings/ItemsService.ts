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
    field: keyof BadgeProps['uiLibProps'],
  ) => {
    const newProps: BrandBadgeProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: { ...selectedViewProps.uiLibProps, [field]: value },
      },
      type: 'Badge',
    }

    onDispatch(selectedView, newProps)
  }

  const onChangeSwitch =
    (propsName: keyof BadgeProps['uiLibProps']) =>
    (checked: React.ChangeEvent<HTMLInputElement>) => {
      const newProps: BrandBadgeProps = {
        props: {
          ...selectedViewProps,
          uiLibProps: { ...selectedViewProps.uiLibProps, [propsName]: checked.target.checked },
        },
        type: 'Badge',
      }

      onDispatch(selectedView, newProps)
    }

  const onChangeIconLeft = (value: IconNames | null) => {
    const newProps: BrandBadgeProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: { ...selectedViewProps.uiLibProps, iconLeft: value ? value : undefined },
      },
      type: 'Badge',
    }

    onDispatch(selectedView, newProps)
  }
  const onChangeIconRight = (value: IconNames | null) => {
    const newProps: BrandBadgeProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: { ...selectedViewProps.uiLibProps, iconRight: value ? value : undefined },
      },
      type: 'Badge',
    }
    onDispatch(selectedView, newProps)
  }

  const handleOnChangeLabel = (value: string | null) => {
    const newProps: BrandBadgeProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: { ...selectedViewProps.uiLibProps, label: value || undefined },
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
      size: selectedViewProps.uiLibProps.size,
      view: selectedViewProps.uiLibProps.view,
      form: selectedViewProps.uiLibProps.form,
      label: selectedViewProps.uiLibProps.label,
      minified: selectedViewProps.uiLibProps.minified,
      status: selectedViewProps.uiLibProps.status,
      iconLeft: selectedViewProps.uiLibProps.iconLeft,
    },
  }
}
