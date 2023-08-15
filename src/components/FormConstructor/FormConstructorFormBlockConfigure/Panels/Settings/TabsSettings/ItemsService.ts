import { TabsPropLinePosition, TabsPropSize, TabsPropView } from '@consta/uikit/Tabs'
import { FitMode } from './types'
import { ISelectedElement, tabItemType, TabsElementProps } from '../../../../coreTypes'
import { setSelectedElement, useAppDispatch, useAppSelector } from '../../../../store'
import { getSelectedElementProps } from '../../../../store/formElements'

export const useItemsHandlers = () => {
  const { selectedElement } = useAppSelector(state => state.formConstructor)
  const { selectedElementProps } = useAppSelector(getSelectedElementProps<TabsElementProps>)
  const dispatch = useAppDispatch()

  const onDispatch = (selectedElement: ISelectedElement, newProps: TabsElementProps) => {
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
          itemsProps = [...itemsProps, { id: i, label: 'tab' + (itemsProps.length + 1) }]
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
  const onChangeActiveItem = ({ value }: { value: tabItemType | null }) => {
    if (selectedElement && value) {
      onDispatch(selectedElement, { ...selectedElementProps, value })
    }
  }
  const onChangeItems = (items: tabItemType[]) => {
    if (selectedElement && items) {
      onDispatch(selectedElement, { ...selectedElementProps, items: [...items], value: items[0] })
    }
  }
  const onChangeLinePosition = (value: TabsPropLinePosition | null) => {
    if (selectedElement && value) {
      const newProps = { ...selectedElementProps }
      newProps.linePosition = value
      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeView = (view: TabsPropView | null) => {
    if (selectedElement && view) {
      onDispatch(selectedElement, { ...selectedElementProps, view })
    }
  }
  const onChangeSize = (size: TabsPropSize | null) => {
    if (selectedElement && size) {
      onDispatch(selectedElement, { ...selectedElementProps, size })
    }
  }
  const onChangeFitMode = (value: FitMode | null) => {
    if (selectedElement && value) {
      const newProps = { ...selectedElementProps }
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
      items: selectedElementProps.items,
      activeItem: selectedElementProps.value,
      linePosition: selectedElementProps.linePosition,
      view: selectedElementProps.view,
      size: selectedElementProps.size,
      fitMode: selectedElementProps.fitMode,
    },
  }
}
