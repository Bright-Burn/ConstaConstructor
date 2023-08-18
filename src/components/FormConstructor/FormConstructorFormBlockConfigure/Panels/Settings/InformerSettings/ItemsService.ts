import { ISelectedElement, InformerElementProps } from '../../../../coreTypes'
import { InformerPropSize, InformerPropView, InformerPropStatus } from '@consta/uikit/Informer'
import { useAppSelector, setSelectedElement, useAppDispatch } from '../../../../store'
import { BrandInformerElementProps, InformerElement } from '../../../../coreTypes/informerTypes'

export const useItemsHandlers = (selectedElementProps: InformerElementProps, selectedElement: InformerElement) => {
  const dispatch = useAppDispatch()

  const onChangeField = (
    value: InformerPropSize | InformerPropView | InformerPropStatus | string,
    field: keyof InformerElementProps,
  ) => {
    if (selectedElement) {
      const newProps: BrandInformerElementProps = {
        props: selectedElementProps,
        type: 'Informer'
      }
      // @ts-ignore
      newProps[field] = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onDispatch = (selectedElement: ISelectedElement, newProps: BrandInformerElementProps) => {
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
