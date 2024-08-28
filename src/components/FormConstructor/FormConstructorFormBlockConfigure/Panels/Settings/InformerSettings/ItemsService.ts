import type { InformerPropSize, InformerPropStatus, InformerPropView } from '@consta/uikit/Informer'

import type {
  BrandInformerElementProps,
  InformerElement,
  InformerElementProps,
  IselectedView,
} from '../../../../coreTypes'
import { setInstanceProps, useAppDispatch } from '../../../../store'

export const useItemsHandlers = (
  selectedViewProps: InformerElementProps,
  selectedView: InformerElement,
) => {
  const dispatch = useAppDispatch()
  const onChangeTitle = (value: string) => {
    const newProps: BrandInformerElementProps = {
      props: {
        ...selectedViewProps,
        title: value,
      },
      type: 'Informer',
    }
    onDispatch(selectedView, newProps)
  }
  const onChangeLabel = (value: string) => {
    const newProps: BrandInformerElementProps = {
      props: {
        ...selectedViewProps,
        label: value,
      },
      type: 'Informer',
    }
    onDispatch(selectedView, newProps)
  }
  const onChangeField = (
    value: InformerPropSize | InformerPropView | InformerPropStatus | null,
    field: keyof InformerElementProps,
  ) => {
    const newProps: BrandInformerElementProps = {
      props: {
        ...selectedViewProps,
        [field]: value,
      },
      type: 'Informer',
    }
    onDispatch(selectedView, newProps)
  }

  const onDispatch = (selectedView: IselectedView, newProps: BrandInformerElementProps) => {
    dispatch(setInstanceProps(selectedView.elementId, newProps))
  }

  return {
    onChangeField,
    onChangeTitle,
    onChangeLabel,
    itemsProps: {
      size: selectedViewProps.size,
      view: selectedViewProps.view,
      icon: selectedViewProps.icon,
      label: selectedViewProps.label,
      title: selectedViewProps.title,
      status: selectedViewProps.status,
    },
  }
}
