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
    field: keyof BadgeProps,
  ) => {
    const newProps: BrandBadgeProps = {
      props: { ...selectedViewProps, [field]: value },
      type: 'Badge',
    }

    onDispatch(selectedView, newProps)
  }

  const onChangeSwitch =
    (propsName: keyof BadgeProps) => (checked: React.ChangeEvent<HTMLInputElement>) => {
      const newProps: BrandBadgeProps = {
        props: { ...selectedViewProps, [propsName]: checked.target.checked },
        type: 'Badge',
      }

      onDispatch(selectedView, newProps)
    }

  const onChangeIconLeft = (value: IconNames | null) => {
    const newProps: BrandBadgeProps = {
      props: { ...selectedViewProps },
      type: 'Badge',
    }
    newProps.props.iconLeft = value ? value : undefined

    onDispatch(selectedView, newProps)
  }
  const onChangeIconRight = (value: IconNames | null) => {
    const newProps: BrandBadgeProps = {
      props: { ...selectedViewProps },
      type: 'Badge',
    }
    newProps.props.iconRight = value ? value : undefined
    onDispatch(selectedView, newProps)
  }

  const handleOnChangeLabel = (value: string | null) => {
    const newProps: BrandBadgeProps = {
      props: { ...selectedViewProps },
      type: 'Badge',
    }
    newProps.props.label = value || undefined

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
      size: selectedViewProps.size,
      view: selectedViewProps.view,
      form: selectedViewProps.form,
      label: selectedViewProps.label,
      minified: selectedViewProps.minified,
      status: selectedViewProps.status,
      iconLeft: selectedViewProps.iconLeft,
    },
  }
}
