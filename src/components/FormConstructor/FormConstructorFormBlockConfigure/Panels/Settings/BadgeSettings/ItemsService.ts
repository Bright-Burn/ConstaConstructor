import { BadgeProps, ISelectedElement } from '../../../../coreTypes'
import { BadgePropForm, BadgePropSize, BadgePropStatus, BadgePropView } from '@consta/uikit/Badge'
import { setSelectedElement, useAppDispatch, useAppSelector } from '../../../../store'
import { getSelectedElementProps } from '../../../../store/formElements'

export const useItemsHandlers = () => {
  const { selectedElement } = useAppSelector(state => state.formConstructor)
  const { selectedElementProps } = useAppSelector(getSelectedElementProps<BadgeProps>)
  const dispatch = useAppDispatch()

  const onChangeField = (
    value: BadgePropSize | BadgePropView | BadgePropStatus | BadgePropForm,
    field: keyof BadgeProps,
  ) => {
    if (selectedElement) {
      onDispatch(selectedElement, { ...selectedElementProps, [field]: value })
    }
  }

  const onChangeMinified = (event: {
    e: React.ChangeEvent<HTMLInputElement>
    checked: boolean
  }) => {
    if (selectedElement) {
      onDispatch(selectedElement, { ...selectedElementProps, minified: event.checked })
    }
  }

  const handleOnChangeLabel = ({ value }: { value: string | null }) => {
    if (selectedElement) {
      onDispatch(selectedElement, { ...selectedElementProps, label: value || undefined })
    }
  }

  const onDispatch = (selectedElement: ISelectedElement, newProps: BadgeProps) => {
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
