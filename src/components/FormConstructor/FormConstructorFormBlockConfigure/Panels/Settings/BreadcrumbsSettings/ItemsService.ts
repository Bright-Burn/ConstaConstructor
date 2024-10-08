import type {
  BreadcrumbPropFitMode,
  BreadcrumbPropSize,
  DefaultItem,
} from '@consta/uikit/Breadcrumbs'

import type {
  BrandBreadcrumbsProps,
  BreadcrumbProps,
  BreadcrumbsFormElement,
  DeepWriteable,
  IselectedView,
} from '../../../../coreTypes'
import { setInstanceProps, useAppDispatch } from '../../../../store'

export const useItemsHandlers = (
  selectedViewProps: DeepWriteable<BreadcrumbProps>,
  selectedView: BreadcrumbsFormElement,
) => {
  const dispatch = useAppDispatch()
  const onDispatch = (selectedView: IselectedView, newProps: BrandBreadcrumbsProps) => {
    dispatch(setInstanceProps(selectedView.elementId, newProps))
  }

  const onChangeItemsCount = (value: string | null) => {
    if (value) {
      const newProps: BrandBreadcrumbsProps = {
        props: { ...selectedViewProps },
        type: 'BreadcrumbsFormElement',
      }

      let itemsProps = [...newProps.props.items]
      const currentLength = itemsProps.length

      if (Number(value) > currentLength) {
        for (let i = currentLength; i < Number(value); i++) {
          itemsProps = [...itemsProps, { label: `Страница ${itemsProps.length + 1}` }]
        }
      } else {
        for (let i = 0; i < currentLength - Number(value); i++) {
          itemsProps.pop()
        }
      }

      newProps.props.items = itemsProps
      onDispatch(selectedView, newProps)
    }
  }

  const onChangeItems = (items: DeepWriteable<DefaultItem[]>) => {
    const newProps: BrandBreadcrumbsProps = {
      props: { ...selectedViewProps },
      type: 'BreadcrumbsFormElement',
    }

    newProps.props.items = [...items]
    onDispatch(selectedView, newProps)
  }

  const onChangeSize = (value: BreadcrumbPropSize | null) => {
    if (value) {
      const newProps: BrandBreadcrumbsProps = {
        props: { ...selectedViewProps },
        type: 'BreadcrumbsFormElement',
      }

      newProps.props.size = value
      onDispatch(selectedView, newProps)
    }
  }

  const onChangeLastItemLink = (value: boolean) => {
    const newProps: BrandBreadcrumbsProps = {
      props: { ...selectedViewProps },
      type: 'BreadcrumbsFormElement',
    }

    newProps.props.lastItemIsLink = value
    onDispatch(selectedView, newProps)
  }

  const onChangeFitMode = (value: BreadcrumbPropFitMode | null) => {
    if (value) {
      const newProps: BrandBreadcrumbsProps = {
        props: { ...selectedViewProps },
        type: 'BreadcrumbsFormElement',
      }

      newProps.props.fitMode = value
      onDispatch(selectedView, newProps)
    }
  }

  return {
    onChangeItemsCount,
    onChangeSize,
    onChangeFitMode,
    onChangeLastItemLink,
    onChangeItems,
    itemsProps: {
      items: selectedViewProps.items,
      size: selectedViewProps.size,
      fitMode: selectedViewProps.fitMode,
      lastItemIsLink: selectedViewProps.lastItemIsLink,
    },
  }
}
