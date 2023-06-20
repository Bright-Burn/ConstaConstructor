import { useDispatch } from 'react-redux'
import { formConstructorSlice, useAppSelector } from '../../../../store/formElements'
import { ISelectedElement } from '../../../../store/formElements/types'
import { TabsPropFitMode} from '@consta/uikit/Tabs'
import { ITEM } from '../../../../store/formElements/tabsTypes'
import { IconPropSize } from '@consta/uikit/Icon'
import { BreadcrumbProps } from '../../../../store/formElements/BreadcrumbsTypes'
import { DefaultItem } from '@consta/uikit/Breadcrumbs'

export const useItemsHandlers = () => {
  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)
  const dispatch = useDispatch()
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

  const onChangeField = (value: TabsPropFitMode | IconPropSize, field: keyof BreadcrumbProps) => {
    if (selectedElement) {
      const newProps: BreadcrumbProps = {
        ...(selectedElementProps as BreadcrumbProps),
      }
      // @ts-ignore
      newProps[field] = value

      onDispatch(selectedElement, newProps)
    }
  }
  return {
    onChangeItemsCount,
    onChangeField,
    onChangeItems,
    itemsProps: {
      items: (selectedElementProps as BreadcrumbProps).items,
      size: (selectedElementProps as BreadcrumbProps).size,
      fitMode: (selectedElementProps as BreadcrumbProps).fitMode,
    },
  }
}
