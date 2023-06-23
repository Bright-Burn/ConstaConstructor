import { useDispatch } from 'react-redux'
import { formConstructorSlice, useAppSelector } from '../../../../store/formElements'
import { ISelectedElement, UnionProps } from '../../../../store/formElements/types'
import { BreadcrumbProps } from '../../../../store/formElements/BreadcrumbsTypes'
import { BreadcrumbPropFitMode, BreadcrumbPropSize, DefaultItem } from '@consta/uikit/Breadcrumbs'

export const useItemsHandlers = () => {
  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)
  const dispatch = useDispatch()
  const getButtonElementProps = (x: UnionProps): x is BreadcrumbProps => 'label' in x
  const onDispatch = (selectedElement: ISelectedElement, newProps: BreadcrumbProps) => {
    dispatch(
      formConstructorSlice.actions.setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps: newProps,
      }),
    )
  }

  const onChangeItemsCount = ({ value }: { value: string | null }) => {
    if (selectedElement && value) {
      if (selectedElementProps && getButtonElementProps(selectedElementProps)) {
        const newProps: BreadcrumbProps = {
          ...selectedElementProps,
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
  }

  const onChangeItems = (items: DefaultItem[]) => {
    if (selectedElement && items) {
      if (selectedElementProps && getButtonElementProps(selectedElementProps)) {
        const newProps: BreadcrumbProps = {
          ...selectedElementProps,
        }

        newProps.items = [...items]
        onDispatch(selectedElement, newProps)
      }
    }
  }

  const onChangeSize = (value: BreadcrumbPropSize | null) => {
    if (selectedElement && value) {
      if (selectedElementProps && getButtonElementProps(selectedElementProps)) {
        const newProps: BreadcrumbProps = {
          ...selectedElementProps,
        }

        newProps.size = value
        onDispatch(selectedElement, newProps)
      }
    }
  }

const onChangeFitMode = (value: BreadcrumbPropFitMode | null) => {
  if (selectedElement && value) {
    if (selectedElementProps && getButtonElementProps(selectedElementProps)){
      const newProps: BreadcrumbProps = {
        ...selectedElementProps ,
      }
      
      newProps.fitMode = value
      onDispatch(selectedElement, newProps)
    }
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
