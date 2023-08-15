import {
  setSelectedElement,
  useAppDispatch,
  useAppFormConstructorSelector,
} from '../../../../store'
import { iconNames, ISelectedElement, TagProps } from '../../../../coreTypes'
import { TagBasePropSize } from '@consta/uikit/__internal__/src/components/TagBase/TagBase'
import { TagBasePropGroup, TagBasePropMode } from './types'

export const useItemsHandlers = () => {
  const { selectedElementProps, selectedElement } = useAppFormConstructorSelector<TagProps>()
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

  const onChangeSize = (size: TagBasePropSize | null) => {
    if (selectedElement && size) {
      onDispatch(selectedElement, { ...selectedElementProps, size })
    }
  }

  const onChangeMode = (mode: TagBasePropMode | null) => {
    if (selectedElement && mode) {
      onDispatch(selectedElement, { ...selectedElementProps, mode })
    }
  }

  const onChangeField =
    (propsName: keyof TagProps) =>
    ({ value }: { value: string | null }) => {
      if (selectedElement) {
        onDispatch(selectedElement, { ...selectedElementProps, [propsName]: value || '' })
      }
    }

  const onChangeGroup = (group: TagBasePropGroup | null) => {
    if (selectedElement && group) {
      onDispatch(selectedElement, { ...selectedElementProps, group })
    }
  }

  const onChangeSwitch =
    (propsName: keyof TagProps) =>
    ({ checked }: { checked: boolean }) => {
      if (selectedElement) {
        onDispatch(selectedElement, { ...selectedElementProps, [propsName]: checked })
      }
    }

  const onChangeIcon = (icon: iconNames | null) => {
    if (selectedElement && icon) {
      onDispatch(selectedElement, { ...selectedElementProps, icon })
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
      label: selectedElementProps.label,
      size: selectedElementProps.size,
      mode: selectedElementProps.mode,
      group: selectedElementProps.group,
      iconSwitch: selectedElementProps.Icon,
      icon: selectedElementProps.icon,
    },
  }
}
