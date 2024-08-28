import type { TagBasePropSize } from '@consta/uikit/TagBase'

import type {
  BrandTagProps,
  IconNames,
  IselectedView,
  TagElement,
  TagProps,
} from '../../../../coreTypes'
import { setInstanceProps, useAppDispatch } from '../../../../store'

import type { TagBasePropGroup, TagBasePropMode } from './types'

export const useItemsHandlers = (selectedViewProps: TagProps, selectedView: TagElement) => {
  const dispatch = useAppDispatch()

  const onDispatch = (selectedView: IselectedView, newProps: BrandTagProps) => {
    dispatch(setInstanceProps(selectedView.elementId, newProps))
  }

  const onChangeSize = (value: TagBasePropSize | null) => {
    const newProps: BrandTagProps = {
      props: { ...selectedViewProps },
      type: 'Tag',
    }
    newProps.props.size = value ? value : undefined
    onDispatch(selectedView, newProps)
  }

  const onChangeMode = (value: TagBasePropMode | null) => {
    const newProps: BrandTagProps = {
      props: { ...selectedViewProps },
      type: 'Tag',
    }
    newProps.props.mode = value ? value : 'info'
    onDispatch(selectedView, newProps)
  }

  const onChangeField = (propsName: keyof TagProps) => (value: string | null) => {
    const newProps: BrandTagProps = {
      props: {
        ...selectedViewProps,
        [propsName]: value,
      },
      type: 'Tag',
    }
    onDispatch(selectedView, newProps)
  }

  const onChangeGroup = (value: TagBasePropGroup | null) => {
    const newProps: BrandTagProps = {
      props: { ...selectedViewProps },
      type: 'Tag',
    }
    newProps.props.group = value ? value : undefined
    onDispatch(selectedView, newProps)
  }

  const onChangeSwitch =
    (propsName: keyof TagProps) => (checked: React.ChangeEvent<HTMLInputElement>) => {
      const newProps: BrandTagProps = {
        props: {
          ...selectedViewProps,
          [propsName]: checked.target.checked,
        },
        type: 'Tag',
      }
      onDispatch(selectedView, newProps)
    }

  const onChangeIcon = (value: IconNames | null) => {
    const newProps: BrandTagProps = {
      props: { ...selectedViewProps },
      type: 'Tag',
    }
    newProps.props.icon = value ? value : undefined
    onDispatch(selectedView, newProps)
  }

  return {
    onChangeMode,
    onChangeGroup,
    onChangeField,
    onChangeSize,
    onChangeSwitch,
    onChangeIcon,
    itemsProps: {
      label: selectedViewProps.label,
      size: selectedViewProps.size,
      mode: selectedViewProps.mode,
      group: selectedViewProps.group,
      iconSwitch: selectedViewProps.Icon,
      icon: selectedViewProps.icon,
    },
  }
}
