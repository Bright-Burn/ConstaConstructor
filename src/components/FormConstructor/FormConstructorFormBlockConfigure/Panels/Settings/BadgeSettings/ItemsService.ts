import { useDispatch } from 'react-redux'
import { BadgeProps, formConstructorSlice, useAppSelector } from '../../../../store/formElements'
import { ISelectedElement } from '../../../../store/formElements/types'
import { BadgePropSize, BadgePropView, BadgePropStatus, BadgePropForm } from '@consta/uikit/Badge'

export const useItemsHandlers = () => {
  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)
  const dispatch = useDispatch()

  const onChangeField = (
    value: BadgePropSize | BadgePropView | BadgePropStatus | BadgePropForm,
    field: keyof BadgeProps,
  ) => {
    if (selectedElement) {
      const newProps: BadgeProps = {
        ...(selectedElementProps as BadgeProps),
      }

      // @ts-ignore
      newProps[field] = value

      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeMinified = (event: {
    e: React.ChangeEvent<HTMLInputElement>
    checked: boolean
  }) => {
    if (selectedElement) {
      const newProps: BadgeProps = {
        ...(selectedElementProps as BadgeProps),
      }
      newProps.minified = event.checked

      onDispatch(selectedElement, newProps)
    }
  }

  const handleOnChangeLabel = ({ value }: { value: string | null }) => {
    if (selectedElement) {
      const newProps: BadgeProps = {
        ...(selectedElementProps as BadgeProps),
      }
      newProps.label = value || undefined

      onDispatch(selectedElement, newProps)
    }
  }

  const onDispatch = (selectedElement: ISelectedElement, newProps: BadgeProps) => {
    dispatch(
      formConstructorSlice.actions.setSelectedElement({
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
      size: (selectedElementProps as BadgeProps).size,
      view: (selectedElementProps as BadgeProps).view,
      form: (selectedElementProps as BadgeProps).form,
      label: (selectedElementProps as BadgeProps).label,
      minified: (selectedElementProps as BadgeProps).minified,
      status: (selectedElementProps as BadgeProps).status,
    },
  }
}
