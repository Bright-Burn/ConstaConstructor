import { BreadcrumbProps, ISelectedElement } from '../../../../coreTypes'
import { BreadcrumbPropFitMode, BreadcrumbPropSize, DefaultItem } from '@consta/uikit/Breadcrumbs'
import { setSelectedElement, useAppDispatch, useAppSelector } from '../../../../store'

export const useItemsHandlers = () => {
  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)
  const dispatch = useAppDispatch()
  const onDispatch = (selectedElement: ISelectedElement, newProps: BreadcrumbProps) => {
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
      const newProps: BreadcrumbProps = {
        ...(selectedElementProps as BreadcrumbProps),
      }

      let itemsProps = [...newProps.items]
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

      newProps.items = itemsProps
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeItems = (items: DefaultItem[]) => {
    if (selectedElement && items) {
      const newProps: BreadcrumbProps = {
        ...(selectedElementProps as BreadcrumbProps),
      }

      newProps.items = [...items]
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeSize = (value: BreadcrumbPropSize | null) => {
    if (selectedElement && value) {
      const newProps: BreadcrumbProps = {
        ...(selectedElementProps as BreadcrumbProps),
      }

      newProps.size = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeFitMode = (value: BreadcrumbPropFitMode | null) => {
    if (selectedElement && value) {
      const newProps: BreadcrumbProps = {
        ...(selectedElementProps as BreadcrumbProps),
      }

      newProps.fitMode = value
      onDispatch(selectedElement, newProps)
    }
  }

  return {
    onChangeItemsCount,
    onChangeSize,
    onChangeFitMode,
    onChangeItems,
    itemsProps: {
      items: (selectedElementProps as BreadcrumbProps).items,
      size: (selectedElementProps as BreadcrumbProps).size,
      fitMode: (selectedElementProps as BreadcrumbProps).fitMode,
    },
  }
}
