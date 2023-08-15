import { BreadcrumbProps, ISelectedElement } from '../../../../coreTypes'
import { BreadcrumbPropFitMode, BreadcrumbPropSize, DefaultItem } from '@consta/uikit/Breadcrumbs'
import { setSelectedElement, useAppDispatch, useAppSelector } from '../../../../store'
import { getSelectedElementProps } from '../../../../store/formElements'

export const useItemsHandlers = () => {
  const { selectedElement } = useAppSelector(state => state.formConstructor)
  const { selectedElementProps } = useAppSelector(getSelectedElementProps<BreadcrumbProps>)
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
      const newProps = { ...selectedElementProps }

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
      onDispatch(selectedElement, { ...selectedElementProps, items: [...items] })
    }
  }

  const onChangeSize = (value: BreadcrumbPropSize | null) => {
    if (selectedElement && value) {
      onDispatch(selectedElement, { ...selectedElementProps, size: value })
    }
  }

  const onChangeFitMode = (value: BreadcrumbPropFitMode | null) => {
    if (selectedElement && value) {
      onDispatch(selectedElement, { ...selectedElementProps, fitMode: value })
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
