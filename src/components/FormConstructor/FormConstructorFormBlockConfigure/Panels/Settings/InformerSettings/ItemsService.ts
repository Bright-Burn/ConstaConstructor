import { InformerElementProps, ISelectedElement } from '../../../../coreTypes'
import { InformerPropSize, InformerPropStatus, InformerPropView } from '@consta/uikit/Informer'
import {
  setSelectedElement,
  useAppDispatch,
  useAppFormConstructorSelector,
} from '../../../../store'

export const useItemsHandlers = () => {
  const { selectedElementProps, selectedElement } =
    useAppFormConstructorSelector<InformerElementProps>()

  const dispatch = useAppDispatch()

  const onChangeField = (
    value: InformerPropSize | InformerPropView | InformerPropStatus | string,
    field: keyof InformerElementProps,
  ) => {
    if (selectedElement) {
      onDispatch(selectedElement, { ...selectedElementProps, [field]: value })
    }
  }

  const onDispatch = (selectedElement: ISelectedElement, newProps: InformerElementProps) => {
    dispatch(
      setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps: newProps,
      }),
    )
  }

  return {
    onChangeField,
    itemsProps: {
      size: selectedElementProps.size,
      view: selectedElementProps.view,
      icon: selectedElementProps.icon,
      label: selectedElementProps.label,
      title: selectedElementProps.title,
      status: selectedElementProps.status,
    },
  }
}
