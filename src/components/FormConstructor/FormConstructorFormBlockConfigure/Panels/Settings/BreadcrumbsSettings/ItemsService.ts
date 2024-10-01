import type { BreadcrumbPropFitMode, BreadcrumbPropSize } from '@consta/uikit/Breadcrumbs'

import type {
  BrandBreadcrumbsProps,
  BreadcrumbProps,
  BreadcrumbsFormElement,
  DefaultItemBreadcrumbsType,
  IconNames,
  IselectedView,
} from '../../../../coreTypes'
import { setInstanceProps, useAppDispatch } from '../../../../store'

export const useItemsHandlers = (
  selectedViewProps: BreadcrumbProps,
  selectedView: BreadcrumbsFormElement,
  selectedPageIndex: number,
) => {
  const dispatch = useAppDispatch()
  const onDispatch = (selectedView: IselectedView, newProps: BrandBreadcrumbsProps) => {
    dispatch(setInstanceProps(selectedView.elementId, newProps))
  }

  const onChangeItemsCount = (value: string | null) => {
    if (value) {
      const newProps: BrandBreadcrumbsProps = {
        props: structuredClone(selectedViewProps),
        type: 'BreadcrumbsFormElement',
      }

      let itemsProps = [...newProps.props.uiLibProps.items]
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

      newProps.props.uiLibProps.items = itemsProps
      onDispatch(selectedView, newProps)
    }
  }

  const onChangeItems = (items: DefaultItemBreadcrumbsType[]) => {
    const newProps: BrandBreadcrumbsProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: { ...selectedViewProps.uiLibProps, items: [...items] },
      },
      type: 'BreadcrumbsFormElement',
    }

    onDispatch(selectedView, newProps)
  }

  const onChangeSize = (value: BreadcrumbPropSize | null) => {
    if (value) {
      const newProps: BrandBreadcrumbsProps = {
        props: {
          ...selectedViewProps,
          uiLibProps: { ...selectedViewProps.uiLibProps, size: value },
        },
        type: 'BreadcrumbsFormElement',
      }

      onDispatch(selectedView, newProps)
    }
  }

  const onChangeLastItemLink = (value: boolean) => {
    const newProps: BrandBreadcrumbsProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: { ...selectedViewProps.uiLibProps, lastItemIsLink: value },
      },
      type: 'BreadcrumbsFormElement',
    }

    onDispatch(selectedView, newProps)
  }

  const onChangeFitMode = (value: BreadcrumbPropFitMode | null) => {
    if (value) {
      const newProps: BrandBreadcrumbsProps = {
        props: {
          ...selectedViewProps,
          uiLibProps: { ...selectedViewProps.uiLibProps, fitMode: value },
        },
        type: 'BreadcrumbsFormElement',
      }

      onDispatch(selectedView, newProps)
    }
  }

  const onChangeIcon = (value: IconNames | null) => {
    const itemsLenght = selectedViewProps.uiLibProps.items.length
    if (selectedPageIndex <= itemsLenght) {
      const items = [...selectedViewProps.uiLibProps.items]

      items[selectedPageIndex] = {
        ...items[selectedPageIndex],
        icon: value || undefined,
      }
      const newProps: BrandBreadcrumbsProps = {
        props: {
          ...selectedViewProps,
          uiLibProps: { ...selectedViewProps.uiLibProps, items },
        },
        type: 'BreadcrumbsFormElement',
      }
      onDispatch(selectedView, newProps)
    }
  }

  return {
    onChangeItemsCount,
    onChangeSize,
    onChangeFitMode,
    onChangeLastItemLink,
    onChangeItems,
    onChangeIcon,
    itemsProps: {
      items: selectedViewProps.uiLibProps.items,
      size: selectedViewProps.uiLibProps.size,
      fitMode: selectedViewProps.uiLibProps.fitMode,
      lastItemIsLink: selectedViewProps.uiLibProps.lastItemIsLink,
    },
  }
}
