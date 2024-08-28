import type { TabsPropLinePosition, TabsPropSize, TabsPropView } from '@consta/uikit/Tabs'

import type {
  BrandTabsElementProps,
  IselectedView,
  tabItemType,
  TabsElement,
  TabsElementProps,
} from '../../../../coreTypes'
import { setInstanceProps, useAppDispatch } from '../../../../store'

import type { FitMode } from './types'

export const useItemsHandlers = (
  selectedViewProps: TabsElementProps,
  selectedView: TabsElement,
) => {
  const dispatch = useAppDispatch()
  const onDispatch = (selectedView: IselectedView, newProps: BrandTabsElementProps) => {
    dispatch(setInstanceProps(selectedView.elementId, newProps))
  }

  const onChangeItemsCount = (value: string | null) => {
    if (value) {
      const newProps: BrandTabsElementProps = {
        props: { ...selectedViewProps },
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
      onDispatch(selectedView, newProps)
    }
  }
  const onChangeActiveItem = (value: tabItemType | null) => {
    if (value) {
      const newProps: BrandTabsElementProps = {
        props: { ...selectedViewProps },
        type: 'Tabs',
      }
      newProps.props.value = value
      onDispatch(selectedView, newProps)
    }
  }
  const onChangeItems = (items: tabItemType[]) => {
    const newProps: BrandTabsElementProps = {
      props: { ...selectedViewProps },
      type: 'Tabs',
    }
    newProps.props.items = [...items]
    newProps.props.value = items[0]
    onDispatch(selectedView, newProps)
  }
  const onChangeLinePosition = (value: TabsPropLinePosition | null) => {
    if (value) {
      const newProps: BrandTabsElementProps = {
        props: { ...selectedViewProps },
        type: 'Tabs',
      }
      newProps.props.linePosition = value
      onDispatch(selectedView, newProps)
    }
  }
  const onChangeView = (value: TabsPropView | null) => {
    if (value) {
      const newProps: BrandTabsElementProps = {
        props: { ...selectedViewProps },
        type: 'Tabs',
      }
      newProps.props.view = value
      onDispatch(selectedView, newProps)
    }
  }
  const onChangeSize = (value: TabsPropSize | null) => {
    if (value) {
      const newProps: BrandTabsElementProps = {
        props: { ...selectedViewProps },
        type: 'Tabs',
      }
      newProps.props.size = value
      onDispatch(selectedView, newProps)
    }
  }
  const onChangeFitMode = (value: FitMode | null) => {
    if (value) {
      const newProps: BrandTabsElementProps = {
        props: { ...selectedViewProps },
        type: 'Tabs',
      }
      newProps.props.fitMode = value
      onDispatch(selectedView, newProps)
    }
  }

  const onChangeSwitch =
    (propsName: keyof TabsElementProps) => (check: React.ChangeEvent<HTMLInputElement>) => {
      const checked = check.target.checked
      const newProps: BrandTabsElementProps = {
        props: { ...selectedViewProps, [propsName]: checked },
        type: 'Tabs',
      }
      if (propsName === 'view' && checked) {
        onChangeView('bordered')
      }
      if (propsName === 'view' && !checked) {
        onChangeView(null)
      }
      onDispatch(selectedView, newProps)
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
      items: selectedViewProps.items,
      activeItem: selectedViewProps.value,
      linePosition: selectedViewProps.linePosition,
      view: selectedViewProps.view,
      size: selectedViewProps.size,
      fitMode: selectedViewProps.fitMode,
    },
  }
}
