import type { FC } from 'react'
import React from 'react'
import type { IconPropSize, IconPropView } from '@consta/icons/Icon'
import { Select } from '@consta/uikit/Select'
import { Text } from '@consta/uikit/Text'

import type {
  BrandIconProps,
  IconElement,
  IconNames,
  IconProps,
  ISelectedElement,
} from '../../../../coreTypes'
import { setSelectedElement, useAppDispatch } from '../../../../store'
import { IconSelectConsta } from '../IconsSelect'

import { sizes, views } from './IconsConstants'

import styles from './styles.module.css'

type IconSettingsType = {
  selectedElementProps: IconProps
  selectedElement: IconElement
}

export const IconSettings: FC<IconSettingsType> = ({ selectedElementProps, selectedElement }) => {
  const dispatch = useAppDispatch()

  const props = { ...selectedElementProps }

  const onChangeSize = (value: IconPropSize | null) => {
    if (value) {
      const newProps: BrandIconProps = {
        props: { ...selectedElementProps },
        type: 'Icon',
      }
      newProps.props.size = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeView = (value: IconPropView | null) => {
    if (value) {
      const newProps: BrandIconProps = {
        props: { ...selectedElementProps },
        type: 'Icon',
      }
      newProps.props.view = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeIcon = (value: IconNames | null) => {
    if (value) {
      const newProps: BrandIconProps = {
        props: { ...selectedElementProps },
        type: 'Icon',
      }
      newProps.props.icons = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onDispatch = (selectedElement: ISelectedElement, newProps: BrandIconProps) => {
    dispatch(
      setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps,
      }),
    )
  }

  return (
    <div className={styles.iconSettings}>
      <div className={styles.rowSettings}>
        <Select
          getItemKey={(item: string) => item}
          getItemLabel={(item: string) => item}
          items={sizes}
          label="Размер"
          size="xs"
          value={props.size}
          onChange={value => {
            onChangeSize(value)
          }}
        />
        <IconSelectConsta selectedIcon={props.icons} label="Icon" onChangeIcon={onChangeIcon} />
      </div>
      <Select
        getItemKey={(item: string) => item}
        getItemLabel={(item: string) => item}
        items={views}
        label="Вид"
        size="xs"
        value={props.view}
        onChange={value => {
          onChangeView(value)
        }}
      />
    </div>
  )
}
