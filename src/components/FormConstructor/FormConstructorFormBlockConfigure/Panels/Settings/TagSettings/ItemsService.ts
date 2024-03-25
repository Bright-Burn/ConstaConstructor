import type { TagBasePropSize } from '@consta/uikit/TagBase'

import type {
  BrandTagProps,
  IconNames,
  ISelectedElement,
  TagElement,
  TagProps,
} from '../../../../coreTypes'
import { setSelectedElement, useAppDispatch } from '../../../../store'

import type { TagBasePropGroup, TagBasePropMode } from './types'

export const useItemsHandlers = (selectedElementProps: TagProps, selectedElement: TagElement) => {
  const dispatch = useAppDispatch()

  const onDispatch = (selectedElement: ISelectedElement, newProps: BrandTagProps) => {
    dispatch(
      setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps,
      }),
    )
  }

  const onChangeSize = (value: TagBasePropSize | null) => {
    const newProps: BrandTagProps = {
      props: { ...selectedElementProps },
      type: 'Tag',
    }
    newProps.props.size = value ? value : undefined
    onDispatch(selectedElement, newProps)
  }

  const onChangeMode = (value: TagBasePropMode | null) => {
    const newProps: BrandTagProps = {
      props: { ...selectedElementProps },
      type: 'Tag',
    }
    newProps.props.mode = value ? value : 'info'
    onDispatch(selectedElement, newProps)
  }

  const onChangeField =
    (propsName: keyof TagProps) =>
    ({ value }: { value: string | null }) => {
      const newProps: BrandTagProps = {
        props: {
          ...selectedElementProps,
          [propsName]: value,
        },
        type: 'Tag',
      }
      onDispatch(selectedElement, newProps)
    }

  const onChangeGroup = (value: TagBasePropGroup | null) => {
    const newProps: BrandTagProps = {
      props: { ...selectedElementProps },
      type: 'Tag',
    }
    newProps.props.group = value ? value : undefined
    onDispatch(selectedElement, newProps)
  }

  const onChangeSwitch =
    (propsName: keyof TagProps) =>
    ({ checked }: { checked: boolean }) => {
      const newProps: BrandTagProps = {
        props: {
          ...selectedElementProps,
          [propsName]: checked,
        },
        type: 'Tag',
      }
      onDispatch(selectedElement, newProps)
    }

  const onChangeIcon = (value: IconNames | null) => {
    const newProps: BrandTagProps = {
      props: { ...selectedElementProps },
      type: 'Tag',
    }
    newProps.props.icon = value ? value : undefined
    onDispatch(selectedElement, newProps)
  }

  return {
    onChangeMode,
    onChangeGroup,
    onChangeField,
    onChangeSize,
    onChangeSwitch,
    onChangeIcon,
    itemsProps: {
      label: selectedElementProps.label,
      size: selectedElementProps.size,
      mode: selectedElementProps.mode,
      group: selectedElementProps.group,
      iconSwitch: selectedElementProps.Icon,
      icon: selectedElementProps.icon,
    },
  }
}
