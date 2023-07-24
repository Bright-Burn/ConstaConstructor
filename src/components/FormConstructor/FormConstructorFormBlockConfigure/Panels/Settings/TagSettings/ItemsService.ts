import { useAppSelector } from '../../../../store'
import { ISelectedElement, TagProps } from '../../../../coreTypes'
import { TagBasePropSize } from '@consta/uikit/__internal__/src/components/TagBase/TagBase'
import { TagBasePropGroup, TagBasePropMode } from './types'
import { iconNames } from '../../../../coreTypes'
import { setSelectedElement, useAppDispatch } from '../../../../store'

export const useItemsHandlers = () => {
  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)
  const dispatch = useAppDispatch()

  const onDispatch = (selectedElement: ISelectedElement, newProps: TagProps) => {
    dispatch(
      setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps: newProps,
      }),
    )
  }

  const onChangeSize = (value: TagBasePropSize | null) => {
    if (selectedElement && value) {
      const newProps: TagProps = {
        ...(selectedElementProps as TagProps),
      }
      newProps.size = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeMode = (value: TagBasePropMode | null) => {
    if (selectedElement && value) {
      const newProps: TagProps = {
        ...(selectedElementProps as TagProps),
      }
      newProps.mode = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeField =
    (propsName: keyof TagProps) =>
    ({ value }: { value: string | null }) => {
      if (selectedElement) {
        const newProps: TagProps = {
          ...(selectedElementProps as TagProps),
        }
        // @ts-ignore
        newProps[propsName] = value || ''
        onDispatch(selectedElement, newProps)
      }
    }

  const onChangeGroup = (value: TagBasePropGroup | null) => {
    if (selectedElement && value) {
      const newProps: TagProps = {
        ...(selectedElementProps as TagProps),
      }
      newProps.group = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeSwitch =
    (propsName: keyof TagProps) =>
    ({ checked }: { checked: boolean }) => {
      if (selectedElement) {
        const newProps: TagProps = {
          ...(selectedElementProps as TagProps),
        }
        // @ts-ignore
        newProps[propsName] = checked
        onDispatch(selectedElement, newProps)
      }
    }

  const onChangeIcon = (value: iconNames | null) => {
    if (selectedElement && value) {
      const newProps: TagProps = {
        ...(selectedElementProps as TagProps),
      }
      newProps.icon = value
      onDispatch(selectedElement, newProps)
    }
  }

  return {
    onChangeMode,
    onChangeGroup,
    onChangeField,
    onChangeSize,
    onChangeSwitch,
    onChangeIcon,
    itemsProps: {
      label: (selectedElementProps as TagProps).label,
      size: (selectedElementProps as TagProps).size,
      mode: (selectedElementProps as TagProps).mode,
      group: (selectedElementProps as TagProps).group,
      iconSwitch: (selectedElementProps as TagProps).Icon,
      icon: (selectedElementProps as TagProps).icon,
    },
  }
}
