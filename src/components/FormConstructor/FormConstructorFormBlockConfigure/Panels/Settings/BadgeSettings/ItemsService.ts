import { ISelectedElement, BadgeProps } from '../../../../coreTypes'
import { BadgePropSize, BadgePropView, BadgePropStatus, BadgePropForm } from '@consta/uikit/Badge'
import { setSelectedElement, useAppDispatch, useAppSelector } from '../../../../store'
import { BadgeElement, BrandBadgeProps } from '../../../../coreTypes/badgeTypes'

export const useItemsHandlers = (selectedElementProps: BadgeProps, selectedElement: BadgeElement) => {
  const dispatch = useAppDispatch()

  const onChangeField = (
    value: BadgePropSize | BadgePropView | BadgePropStatus | BadgePropForm,
    field: keyof BadgeProps,
  ) => {
    if (selectedElement) {
      const newProps: BrandBadgeProps = {
        props: {...selectedElementProps},
        type: 'Badge'
      }

      // @ts-ignore
      newProps.props[field] = value

      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeMinified = (event: {
    e: React.ChangeEvent<HTMLInputElement>
    checked: boolean
  }) => {
    if (selectedElement) {
      const newProps: BrandBadgeProps = {
        props: {...selectedElementProps},
        type: 'Badge'
      }
      newProps.props.minified = event.checked

      onDispatch(selectedElement, newProps)
    }
  }

  const handleOnChangeLabel = ({ value }: { value: string | null }) => {
    if (selectedElement) {
      const newProps: BrandBadgeProps = {
        props: {...selectedElementProps},
        type: 'Badge'
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
    onChangeMinified,
    handleOnChangeLabel,
    onChangeField,
    itemsProps: {
      size: selectedElementProps.size,
      view: selectedElementProps.view,
      form: selectedElementProps.form,
      label: selectedElementProps.label,
      minified: selectedElementProps.minified,
      status: selectedElementProps.status,
    },
  }
}
