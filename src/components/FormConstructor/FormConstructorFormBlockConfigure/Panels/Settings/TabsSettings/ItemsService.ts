import type { TabsPropLinePosition, TabsPropSize, TabsPropView } from '@consta/uikit/Tabs'

import type {
  BrandTabsElementProps,
  ISelectedElement,
  tabItemType,
  TabsElement,
  TabsElementProps,
} from '../../../../coreTypes'
import { setSelectedElement, useAppDispatch } from '../../../../store'

import type { FitMode } from './types'
import { setInstanceProps } from '../../../../store/formElements'

export const useItemsHandlers = (
  selectedElementProps: TabsElementProps,
  selectedElement: TabsElement,
) => {
  const dispatch = useAppDispatch()
  const onDispatch = (selectedElement: ISelectedElement, newProps: BrandTabsElementProps) => {
    dispatch(setInstanceProps(selectedElement.elementId, newProps))
  }

  const onChangeItemsCount = (value: string | null) => {
    if (value) {
      const newProps: BrandTabsElementProps = {
        props: { ...selectedElementProps },
        type: 'Tabs',
      }
      let itemsProps = [...newProps.props.items]
      const currentLength = itemsProps.length
      if (Number(value) > currentLength) {
        for (let i = currentLength; i < Number(value); i++) {
          itemsProps = [...itemsProps, { id: i, label: `tab${itemsProps.length + 1}` }]
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
  const onChangeActiveItem = (value: tabItemType | null) => {
    if (value) {
      const newProps: BrandTabsElementProps = {
        props: { ...selectedElementProps },
        type: 'Tabs',
      }
      newProps.props.value = value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeItems = (items: tabItemType[]) => {
    const newProps: BrandTabsElementProps = {
      props: { ...selectedElementProps },
      type: 'Tabs',
    }
    newProps.props.items = [...items]
    newProps.props.value = items[0]
    onDispatch(selectedElement, newProps)
  }
  const onChangeLinePosition = (value: TabsPropLinePosition | null) => {
    if (value) {
      const newProps: BrandTabsElementProps = {
        props: { ...selectedElementProps },
        type: 'Tabs',
      }
      newProps.props.linePosition = value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeView = (value: TabsPropView | null) => {
    if (value) {
      const newProps: BrandTabsElementProps = {
        props: { ...selectedElementProps },
        type: 'Tabs',
      }
      newProps.props.view = value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeSize = (value: TabsPropSize | null) => {
    if (value) {
      const newProps: BrandTabsElementProps = {
        props: { ...selectedElementProps },
        type: 'Tabs',
      }
      newProps.props.size = value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeFitMode = (value: FitMode | null) => {
    if (value) {
      const newProps: BrandTabsElementProps = {
        props: { ...selectedElementProps },
        type: 'Tabs',
      }
      newProps.props.fitMode = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeSwitch =
    (propsName: keyof TabsElementProps) => (check: React.ChangeEvent<HTMLInputElement>) => {
      const checked = check.target.checked
      const newProps: BrandTabsElementProps = {
        props: { ...selectedElementProps, [propsName]: checked },
        type: 'Tabs',
      }
      if (propsName === 'view' && checked) {
        onChangeView('bordered')
      }
      if (propsName === 'view' && !checked) {
        onChangeView(null)
      }
      onDispatch(selectedElement, newProps)
    }

  return {
    onChangeItemsCount,
    onChangeActiveItem,
    onChangeItems,
    onChangeLinePosition,
    onChangeView,
    onChangeSize,
    onChangeFitMode,
    onChangeSwitch,
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
