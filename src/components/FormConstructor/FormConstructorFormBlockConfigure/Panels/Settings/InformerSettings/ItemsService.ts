import type { InformerPropSize, InformerPropStatus, InformerPropView } from '@consta/uikit/Informer'

import type {
  BrandInformerElementProps,
  InformerElement,
  InformerElementProps,
  ISelectedElement,
} from '../../../../coreTypes'
import { setSelectedElement, useAppDispatch } from '../../../../store'
import { setInstanceProps } from '../../../../store/formElements'

export const useItemsHandlers = (
  selectedElementProps: InformerElementProps,
  selectedElement: InformerElement,
) => {
  const dispatch = useAppDispatch()
  const onChangeTitle = (value: string) => {
    const newProps: BrandInformerElementProps = {
      props: {
        ...selectedElementProps,
        title: value,
      },
      type: 'Informer',
    }
    onDispatch(selectedElement, newProps)
  }
  const onChangeLabel = (value: string) => {
    const newProps: BrandInformerElementProps = {
      props: {
        ...selectedElementProps,
        label: value,
      },
      type: 'Informer',
    }
    onDispatch(selectedElement, newProps)
  }
  const onChangeField = (
    value: InformerPropSize | InformerPropView | InformerPropStatus | null,
    field: keyof InformerElementProps,
  ) => {
    const newProps: BrandInformerElementProps = {
      props: {
        ...selectedElementProps,
        [field]: value,
      },
      type: 'Informer',
    }
    onDispatch(selectedElement, newProps)
  }

  const onDispatch = (selectedElement: ISelectedElement, newProps: BrandInformerElementProps) => {
    dispatch(setInstanceProps(selectedElement.elementId, newProps))
  }

  return {
    onChangeField,
    onChangeTitle,
    onChangeLabel,
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
