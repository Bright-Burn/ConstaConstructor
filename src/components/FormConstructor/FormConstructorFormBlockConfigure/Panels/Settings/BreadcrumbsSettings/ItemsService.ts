import { BreadcrumbProps, ISelectedElement, BrandBreadcrumbsProps, BreadcrumbsFormElement } from '../../../../coreTypes'
import { BreadcrumbPropFitMode, BreadcrumbPropSize, DefaultItem } from '@consta/uikit/Breadcrumbs'
import { setSelectedElement, useAppDispatch, useAppSelector } from '../../../../store'
type DeepWriteable<T> = { -readonly [P in keyof T]: DeepWriteable<T[P]> };

export const useItemsHandlers = (selectedElementProps: DeepWriteable<BreadcrumbProps>, selectedElement: BreadcrumbsFormElement) => {
  const dispatch = useAppDispatch()
  const onDispatch = (selectedElement: ISelectedElement, newProps: BrandBreadcrumbsProps) => {
    dispatch(
      setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps: newProps,
      }),
    )
  }

  const onChangeItemsCount = ({ value }: { value: string | null }) => {
    if (selectedElement && value) {
      const newProps: BrandBreadcrumbsProps = {
        props: {...selectedElementProps},
        type: 'BreadcrumbsFormElement'
      }

      let itemsProps = [...newProps.props.items]
      const currentLength = itemsProps.length

      if (Number(value) > currentLength) {
        for (let i = currentLength; i < Number(value); i++) {
          itemsProps = [...itemsProps, { label: 'Страница ' + (itemsProps.length + 1) }]
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
    if (selectedElement && items) {
      const newProps: BrandBreadcrumbsProps = {
        props: {...selectedElementProps},
        type: 'BreadcrumbsFormElement'
      }

      newProps.props.items = [...items]
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeSize = (value: BreadcrumbPropSize | null) => {
    if (selectedElement && value) {
      const newProps: BrandBreadcrumbsProps = {
        props: {...selectedElementProps},
        type: 'BreadcrumbsFormElement'
      }

      newProps.props.size = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeFitMode = (value: BreadcrumbPropFitMode | null) => {
    if (selectedElement && value) {
      const newProps: BrandBreadcrumbsProps = {
        props: {...selectedElementProps},
        type: 'BreadcrumbsFormElement'
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
