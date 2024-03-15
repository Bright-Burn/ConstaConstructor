import type { InformerPropSize, InformerPropStatus, InformerPropView } from '@consta/uikit/Informer'

import type { InformerElementProps, ISelectedElement } from '../../../../coreTypes'
import type {
  BrandInformerElementProps,
  InformerElement,
} from '../../../../coreTypes/informerTypes'
import { setSelectedElement, useAppDispatch } from '../../../../store'

export const useItemsHandlers = (
  selectedElementProps: InformerElementProps,
  selectedElement: InformerElement,
) => {
  const dispatch = useAppDispatch()

  const onChangeField = (
    value: InformerPropSize | InformerPropView | InformerPropStatus | string | null,
    field: keyof InformerElementProps,
  ) => {
    if (selectedElement) {
      const newProps: BrandInformerElementProps = {
        props: {
          ...selectedElementProps,
          [field]: value,
        },
        type: 'Informer',
      }
      onDispatch(selectedElement, newProps)
    }
  }

  const onDispatch = (selectedElement: ISelectedElement, newProps: BrandInformerElementProps) => {
    dispatch(
      setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps,
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
