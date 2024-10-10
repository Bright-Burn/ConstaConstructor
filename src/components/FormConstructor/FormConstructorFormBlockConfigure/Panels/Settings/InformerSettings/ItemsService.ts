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
        uiLibProps: {
          ...selectedViewProps.uiLibProps,
          title: value,
        },
      },
      type: 'Informer',
    }
    onDispatch(selectedView, newProps)
  }
  const onChangeLabel = (value: string) => {
    const newProps: BrandInformerElementProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: {
          ...selectedViewProps.uiLibProps,
          label: value,
        },
      },
      type: 'Informer',
    }
    onDispatch(selectedView, newProps)
  }
  const onChangeField = (
    value: InformerPropSize | InformerPropView | InformerPropStatus | null,
    field: keyof InformerElementProps['uiLibProps'],
  ) => {
    const newProps: BrandInformerElementProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: {
          ...selectedViewProps.uiLibProps,
          [field]: value,
        },
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
      size: selectedViewProps.uiLibProps.size,
      view: selectedViewProps.uiLibProps.view,
      icon: selectedViewProps.uiLibProps.icon,
      label: selectedViewProps.uiLibProps.label,
      title: selectedViewProps.uiLibProps.title,
      status: selectedViewProps.uiLibProps.status,
    },
  }
}
