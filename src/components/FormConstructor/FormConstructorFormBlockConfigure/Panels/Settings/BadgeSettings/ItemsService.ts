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
  ISelectedElement,
} from '../../../../coreTypes'
import { setInstanceProps, useAppDispatch } from '../../../../store'

export const useItemsHandlers = (
  selectedElementProps: BadgeProps,
  selectedElement: BadgeElement,
) => {
  const dispatch = useAppDispatch()

  const onChangeField = (
    value: BadgePropSize | BadgePropView | BadgePropStatus | BadgePropForm | null,
    field: keyof BadgeProps,
  ) => {
    const newProps: BrandBadgeProps = {
      props: { ...selectedElementProps, [field]: value },
      type: 'Badge',
    }

    onDispatch(selectedElement, newProps)
  }

  const onChangeSwitch =
    (propsName: keyof BadgeProps) => (checked: React.ChangeEvent<HTMLInputElement>) => {
      const newProps: BrandBadgeProps = {
        props: { ...selectedElementProps, [propsName]: checked.target.checked },
        type: 'Badge',
      }

      onDispatch(selectedElement, newProps)
    }

  const onChangeIconLeft = (value: IconNames | null) => {
    const newProps: BrandBadgeProps = {
      props: { ...selectedElementProps },
      type: 'Badge',
    }
    newProps.props.iconLeft = value ? value : undefined

    onDispatch(selectedElement, newProps)
  }
  const onChangeIconRight = (value: IconNames | null) => {
    const newProps: BrandBadgeProps = {
      props: { ...selectedElementProps },
      type: 'Badge',
    }
    newProps.props.iconRight = value ? value : undefined
    onDispatch(selectedElement, newProps)
  }

  const handleOnChangeLabel = (value: string | null) => {
    const newProps: BrandBadgeProps = {
      props: { ...selectedElementProps },
      type: 'Badge',
    }
    newProps.props.label = value || undefined

    onDispatch(selectedElement, newProps)
  }

  const onDispatch = (selectedElement: ISelectedElement, newProps: BrandBadgeProps) => {
    dispatch(setInstanceProps(selectedElement.elementId, newProps))
  }

  return {
    onChangeSwitch,
    onChangeIconLeft,
    handleOnChangeLabel,
    onChangeField,
    onChangeIconRight,
    itemsProps: {
      size: selectedElementProps.size,
      view: selectedElementProps.view,
      form: selectedElementProps.form,
      label: selectedElementProps.label,
      minified: selectedElementProps.minified,
      status: selectedElementProps.status,
      iconLeft: selectedElementProps.iconLeft,
    },
  }
}
