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
      props: {
        ...selectedViewProps,
        uiLibProps: {
          ...selectedViewProps.uiLibProps,
          size: value || undefined,
        },
      },
      type: 'Tag',
    }
    onDispatch(selectedView, newProps)
  }

  const onChangeMode = (value: TagBasePropMode | null) => {
    const newProps: BrandTagProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: {
          ...selectedViewProps.uiLibProps,
          mode: value ? value : 'info',
        },
      },
      type: 'Tag',
    }

    onDispatch(selectedView, newProps)
  }

  const onChangeField = (propsName: keyof TagProps['uiLibProps']) => (value: string | null) => {
    const newProps: BrandTagProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: {
          ...selectedViewProps.uiLibProps,
          [propsName]: value,
        },
      },
      type: 'Tag',
    }
    onDispatch(selectedView, newProps)
  }

  const onChangeGroup = (value: TagBasePropGroup | null) => {
    const newProps: BrandTagProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: {
          ...selectedViewProps.uiLibProps,
          group: value ? value : undefined,
        },
      },
      type: 'Tag',
    }
    onDispatch(selectedView, newProps)
  }

  const onChangeSwitch =
    (propsName: keyof TagProps['uiLibProps']) => (checked: React.ChangeEvent<HTMLInputElement>) => {
      const newProps: BrandTagProps = {
        props: {
          ...selectedViewProps,
          uiLibProps: {
            ...selectedViewProps.uiLibProps,
            [propsName]: checked.target.checked,
          },
        },
        type: 'Tag',
      }
      onDispatch(selectedView, newProps)
    }

  const onChangeIcon = (value: IconNames | null) => {
    const newProps: BrandTagProps = {
      props: {
        ...selectedViewProps,
        uiLibProps: {
          ...selectedViewProps.uiLibProps,
          icon: value ? value : undefined,
        },
      },
      type: 'Tag',
    }
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
      label: selectedViewProps.uiLibProps.label,
      size: selectedViewProps.uiLibProps.size,
      mode: selectedViewProps.uiLibProps.mode,
      group: selectedViewProps.uiLibProps.group,
      iconSwitch: selectedViewProps.uiLibProps.Icon,
      icon: selectedViewProps.uiLibProps.icon,
    },
  }
}
