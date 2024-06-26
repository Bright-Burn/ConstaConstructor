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
  ISelectedElement,
} from '../../../../coreTypes'
import { setSelectedElement, useAppDispatch } from '../../../../store'

export const useItemsHandlers = (
  selectedElementProps: DeepWriteable<BreadcrumbProps>,
  selectedElement: BreadcrumbsFormElement,
) => {
  const dispatch = useAppDispatch()
  const onDispatch = (selectedElement: ISelectedElement, newProps: BrandBreadcrumbsProps) => {
    dispatch(
      setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps,
      }),
    )
  }

  const onChangeItemsCount = (value: string | null) => {
    if (value) {
      const newProps: BrandBreadcrumbsProps = {
        props: { ...selectedElementProps },
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
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeItems = (items: DeepWriteable<DefaultItem[]>) => {
    const newProps: BrandBreadcrumbsProps = {
      props: { ...selectedElementProps },
      type: 'BreadcrumbsFormElement',
    }

    newProps.props.items = [...items]
    onDispatch(selectedElement, newProps)
  }

  const onChangeSize = (value: BreadcrumbPropSize | null) => {
    if (value) {
      const newProps: BrandBreadcrumbsProps = {
        props: { ...selectedElementProps },
        type: 'BreadcrumbsFormElement',
      }

      newProps.props.size = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeFitMode = (value: BreadcrumbPropFitMode | null) => {
    if (value) {
      const newProps: BrandBreadcrumbsProps = {
        props: { ...selectedElementProps },
        type: 'BreadcrumbsFormElement',
      }

      newProps.props.fitMode = value
      onDispatch(selectedElement, newProps)
    }
  }

  return {
    onChangeItemsCount,
    onChangeSize,
    onChangeFitMode,
    onChangeItems,
    itemsProps: {
      items: selectedElementProps.items,
      size: selectedElementProps.size,
      fitMode: selectedElementProps.fitMode,
    },
  }
}
