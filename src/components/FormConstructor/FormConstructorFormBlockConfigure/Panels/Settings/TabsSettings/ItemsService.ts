import { useDispatch } from 'react-redux'
import { formConstructorSlice, useAppSelector } from '../../../../store/formElements'
import { ISelectedElement } from '../../../../store/formElements/types'
import { TabsItemDefault } from '@consta/uikit/Tabs'
import { FitMode, LinePosition, Size, View } from './types'
import { TabsElementProps } from '../../../../store/formElements/tabsTypes'

export const useItemsHandlers = () => {
  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)
  const dispatch = useDispatch()
  const onDispatch = (selectedElement: ISelectedElement, newProps: TabsElementProps) => {
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
      const newProps: TabsElementProps = {
        ...(selectedElementProps as TabsElementProps),
      }
      let itemsProps = [...newProps.items]
      const currentLength = itemsProps.length
      if (Number(value) > currentLength) {
        for (let i = 0; i < Number(value) - currentLength; i++) {
          itemsProps = [...itemsProps, { label: 'tab' + (itemsProps.length + 1) }]
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
  const onChangeActiveItem = ({ value }: { value: TabsItemDefault | null }) => {
    if (selectedElement && value) {
      const newProps: TabsElementProps = {
        ...(selectedElementProps as TabsElementProps),
      }
      newProps.value = value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeItems = (items: TabsItemDefault[]) => {
    if (selectedElement && items) {
      const newProps: TabsElementProps = {
        ...(selectedElementProps as TabsElementProps),
      }
      newProps.items = [...items]
      newProps.value = items[0]
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeLinePosition = (value: LinePosition | null) => {
    if (selectedElement && value) {
      const newProps: TabsElementProps = {
        ...(selectedElementProps as TabsElementProps),
      }
      newProps.linePosition = value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeView = (value: View | null) => {
    if (selectedElement && value) {
      const newProps: TabsElementProps = {
        ...(selectedElementProps as TabsElementProps),
      }
      newProps.view = value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeSize = (value: Size | null) => {
    if (selectedElement && value) {
      const newProps: TabsElementProps = {
        ...(selectedElementProps as TabsElementProps),
      }
      newProps.size = value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeFitMode = (value: FitMode | null) => {
    if (selectedElement && value) {
      const newProps: TabsElementProps = {
        ...(selectedElementProps as TabsElementProps),
      }
      newProps.fitMode = value
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
      items: (selectedElementProps as TabsElementProps).items,
      activeItem: (selectedElementProps as TabsElementProps).value,
      linePosition: (selectedElementProps as TabsElementProps).linePosition,
      view: (selectedElementProps as TabsElementProps).view,
      size: (selectedElementProps as TabsElementProps).size,
      fitMode: (selectedElementProps as TabsElementProps).fitMode,
    },
  }
}
