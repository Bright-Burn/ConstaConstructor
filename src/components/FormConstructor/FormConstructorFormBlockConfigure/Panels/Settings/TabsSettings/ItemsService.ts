import { TabsPropLinePosition, TabsPropSize, TabsPropView } from '@consta/uikit/Tabs'
import { FitMode } from './types'
import { tabItemType, TabsElementProps, ISelectedElement } from '../../../../coreTypes'
import { setSelectedElement, useAppDispatch, useAppSelector } from '../../../../store'
import { BrandTabsElementProps, TabsElement } from '../../../../coreTypes/tabsTypes'

export const useItemsHandlers = (selectedElementProps: TabsElementProps, selectedElement: TabsElement) => {
  const dispatch = useAppDispatch()
  const onDispatch = (selectedElement: ISelectedElement, newProps: BrandTabsElementProps) => {
    dispatch(
      setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps: newProps,
      }),
    )
  }
  const onChangeItemsCount = ({ value }: { value: string | null }) => {
    if (value) {
      const newProps: BrandTabsElementProps = {
        props: selectedElementProps,
        type: 'Tabs',
      }
      let itemsProps = [...newProps.props.items]
      const currentLength = itemsProps.length
      if (Number(value) > currentLength) {
        for (let i = currentLength; i < Number(value); i++) {
          itemsProps = [...itemsProps, { id: i, label: 'tab' + (itemsProps.length + 1) }]
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
  const onChangeActiveItem = ({ value }: { value: tabItemType | null }) => {
    if (value) {
      const newProps: BrandTabsElementProps = {
        props: selectedElementProps,
        type: 'Tabs',
      }
      newProps.props.value = value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeItems = (items: tabItemType[]) => {
    if (items) {
      const newProps: BrandTabsElementProps = {
        props: selectedElementProps,
        type: 'Tabs',
      }
      newProps.props.items = [...items]
      newProps.props.value = items[0]
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeLinePosition = (value: TabsPropLinePosition | null) => {
    if (value) {
      const newProps: BrandTabsElementProps = {
        props: selectedElementProps,
        type: 'Tabs',
      }
      newProps.props.linePosition = value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeView = (value: TabsPropView | null) => {
    if (value) {
      const newProps: BrandTabsElementProps = {
        props: selectedElementProps,
        type: 'Tabs',
      }
      newProps.props.view = value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeSize = (value: TabsPropSize | null) => {
    if (value) {
      const newProps: BrandTabsElementProps = {
        props: selectedElementProps,
        type: 'Tabs',
      }
      newProps.props.size = value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeFitMode = (value: FitMode | null) => {
    if (value) {
      const newProps: BrandTabsElementProps = {
        props: selectedElementProps,
        type: 'Tabs',
      }
      newProps.props.fitMode = value
      onDispatch(selectedElement, newProps)
    }
  }
  return {
    onChangeItemsCount,
    onChangeActiveItem,
    onChangeItems,
    onChangeLinePosition,
    onChangeView,
    onChangeSize,
    onChangeFitMode,
    itemsProps: {
      items: selectedElementProps.items,
      activeItem: selectedElementProps.value,
      linePosition: selectedElementProps.linePosition,
      view: selectedElementProps.view,
      size: selectedElementProps.size,
      fitMode: selectedElementProps.fitMode,
    },
  }
}
