import type { TabsPropLinePosition, TabsPropSize, TabsPropView } from '@consta/uikit/Tabs'

import type {
  BrandTabsElementProps,
  IselectedView,
  TabItemType,
  TabsElement,
  TabsProps,
} from '../../../../coreTypes'
import { setInstanceProps, useAppDispatch } from '../../../../store'

import type { FitMode } from './types'

export const useItemsHandlers = (selectedViewProps: TabsProps, selectedView: TabsElement) => {
  const dispatch = useAppDispatch()
  const onDispatch = (selectedView: IselectedView, newProps: BrandTabsElementProps) => {
    dispatch(setInstanceProps(selectedView.elementId, newProps))
  }

  const onChangeItemsCount = (value: string | null) => {
    if (value) {
      const newProps: BrandTabsElementProps = {
        props: {
          ...selectedViewProps,
          uiLibProps: {
            ...selectedViewProps.uiLibProps,
            items: [...selectedViewProps.uiLibProps.items],
          },
        },
        type: 'Tabs',
      }

      let itemsProps = newProps.props.uiLibProps.items
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
      newProps.props.uiLibProps.items = itemsProps
      onDispatch(selectedView, newProps)
    }
  }
  const onChangeActiveItem = (value: TabItemType | null) => {
    if (value) {
      const newProps: BrandTabsElementProps = {
        props: {
          ...selectedViewProps,
          uiLibProps: { ...selectedViewProps.uiLibProps, value: value },
        },
        type: 'Tabs',
      }
      onDispatch(selectedView, newProps)
    }
  }
  const onChangeItems = (items: TabItemType[]) => {
    const newProps: BrandTabsElementProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: { ...selectedViewProps.uiLibProps, items: [...items], value: items[0] },
      },
      type: 'Tabs',
    }
    onDispatch(selectedView, newProps)
  }
  const onChangeLinePosition = (value: TabsPropLinePosition | null) => {
    if (value) {
      const newUiLibProps = { ...selectedViewProps.uiLibProps }
      const newProps: BrandTabsElementProps = {
        props: {
          ...selectedViewProps,
          uiLibProps: newUiLibProps,
        },
        type: 'Tabs',
      }
      if ((typeof newUiLibProps.fitMode === 'string' && value === 'bottom') || value === 'top') {
        newProps.props.uiLibProps.linePosition = value
      } else if (value === 'left' || value === 'right') {
        newProps.props.uiLibProps.linePosition = value
      }
      onDispatch(selectedView, newProps)
    }
  }
  const onChangeView = (value: TabsPropView | null) => {
    if (value) {
      const newProps: BrandTabsElementProps = {
        props: {
          ...selectedViewProps,
          uiLibProps: { ...selectedViewProps.uiLibProps, view: value },
        },
        type: 'Tabs',
      }
      onDispatch(selectedView, newProps)
    }
  }
  const onChangeSize = (value: TabsPropSize | null) => {
    if (value) {
      const newProps: BrandTabsElementProps = {
        props: {
          ...selectedViewProps,
          uiLibProps: { ...selectedViewProps.uiLibProps, size: value },
        },
        type: 'Tabs',
      }
      onDispatch(selectedView, newProps)
    }
  }
  const onChangeFitMode = (value: FitMode | null) => {
    if (value) {
      const newUiLibProps: TabsProps['uiLibProps'] = {
        ...selectedViewProps.uiLibProps,
        linePosition: undefined,
      }
      const newProps: BrandTabsElementProps = {
        props: {
          ...selectedViewProps,
          uiLibProps: { ...newUiLibProps, fitMode: value },
        },
        type: 'Tabs',
      }
      onDispatch(selectedView, newProps)
    }
  }

  const onChangeSwitch =
    (propsName: keyof TabsProps['uiLibProps']) => (check: React.ChangeEvent<HTMLInputElement>) => {
      const checked = check.target.checked
      const newProps: BrandTabsElementProps = {
        props: {
          ...selectedViewProps,
          uiLibProps: { ...selectedViewProps.uiLibProps, [propsName]: checked },
        },
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

  const onChangeWidth = (value: string | null) => {
    const newProps: BrandTabsElementProps = {
      props: { ...selectedViewProps },
      type: 'Tabs',
    }
    newProps.props.styles = { ...newProps.props.styles }
    if (value && value !== '0') {
      newProps.props.styles.width = `${value}px`
      onDispatch(selectedView, newProps)
    } else {
      newProps.props.styles.width = undefined
      onDispatch(selectedView, newProps)
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
    onChangeSwitch,
    onChangeWidth,
    itemsProps: {
      items: selectedViewProps.uiLibProps.items,
      activeItem: selectedViewProps.uiLibProps.value,
      linePosition: selectedViewProps.uiLibProps.linePosition,
      view: selectedViewProps.uiLibProps.view,
      size: selectedViewProps.uiLibProps.size,
      fitMode: selectedViewProps.uiLibProps.fitMode,
    },
  }
}
