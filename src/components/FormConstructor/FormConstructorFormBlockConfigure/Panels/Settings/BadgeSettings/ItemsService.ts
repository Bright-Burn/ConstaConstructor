import { ISelectedElement, BadgeProps, iconNames } from '../../../../coreTypes'
import { BadgePropSize, BadgePropView, BadgePropStatus, BadgePropForm } from '@consta/uikit/Badge'
import { setSelectedElement, useAppDispatch } from '../../../../store'
import { BadgeElement, BrandBadgeProps } from '../../../../coreTypes/badgeTypes'

export const useItemsHandlers = (
  selectedElementProps: BadgeProps,
  selectedElement: BadgeElement,
) => {
  const dispatch = useAppDispatch()

  const onChangeField = (
    value: BadgePropSize | BadgePropView | BadgePropStatus | BadgePropForm | null,
    field: keyof BadgeProps,
  ) => {
    if (selectedElement) {
      const newProps: BrandBadgeProps = {
        props: { ...selectedElementProps, [field]: value },
        type: 'Badge',
      }

      // @ts-ignore
      newProps.props[field] = value

      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeSwitch =
    (propsName: keyof BadgeProps) =>
    ({ checked }: { checked: boolean }) => {
      if (selectedElementProps) {
        const newProps: BrandBadgeProps = {
          props: { ...selectedElementProps, [propsName]: checked },
          type: 'Badge',
        }
        selectedElement && onDispatch(selectedElement, newProps)
      }
    }

  const onChangeIconLeft = (value: iconNames | null) => {
    if (selectedElement && value) {
      const newProps: BrandBadgeProps = {
        props: { ...selectedElementProps },
        type: 'Badge',
      }
      newProps.props.iconLeft = value
      onDispatch(selectedElement, newProps)
    }
  }

  const handleOnChangeLabel = ({ value }: { value: string | null }) => {
    if (selectedElement) {
      const newProps: BrandBadgeProps = {
        props: { ...selectedElementProps },
        type: 'Badge',
      }
      newProps.props.label = value || undefined

      onDispatch(selectedElement, newProps)
    }
  }

  const onDispatch = (selectedElement: ISelectedElement, newProps: BrandBadgeProps) => {
    dispatch(
      setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps: newProps,
      }),
    )
  }

  return {
    onChangeSwitch,
    onChangeIconLeft,
    handleOnChangeLabel,
    onChangeField,
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
