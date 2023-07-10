import { useDispatch } from 'react-redux'
import { formConstructorSlice, useAppSelector } from '../../../../store/formElements'
import { ISelectedElement } from '../../../../store/formElements/types'
import { TagProps } from '../../../../store/formElements/tagTypes'
import { TagBasePropSize } from '@consta/uikit/__internal__/src/components/TagBase/TagBase'
import { TagBasePropGroup, TagBasePropMode } from './types'

export const useItemsHandlers = () => {
  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)
  const dispatch = useDispatch()

  const onDispatch = (selectedElement: ISelectedElement, newProps: TagProps) => {
    dispatch(
      formConstructorSlice.actions.setSelectedElement({
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
  return {
    onChangeMode,
    onChangeGroup,
    onChangeField,
    onChangeSize,
    onChangeSwitch,
    itemsProps: {
      label: (selectedElementProps as TagProps).label,
      size: (selectedElementProps as TagProps).size,
      mode: (selectedElementProps as TagProps).mode,
      group: (selectedElementProps as TagProps).group,
      icon: (selectedElementProps as TagProps).Icon,
    },
  }
}
