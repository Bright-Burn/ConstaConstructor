import type { FC } from 'react'
import React, { useState } from 'react'
import type { IconPropSize, IconPropView } from '@consta/icons/Icon'
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup'
import { Select } from '@consta/uikit/Select'

import type { ConstaColor } from '../../../../../ConstaPalette'
import { LayoutPalette } from '../../../../../ConstaPalette'
import type {
  BrandIconProps,
  IconElement,
  IconNames,
  IconProps,
  IselectedView,
} from '../../../../coreTypes'
import { setInstanceProps, useAppDispatch } from '../../../../store'
import { IconSelectConsta } from '../IconsSelect'

import { sizes, views } from './IconsConstants'

import styles from './styles.module.css'

type IconSettingsType = {
  selectedViewProps: IconProps
  selectedView: IconElement
}
type colorSelectorType = 'view' | 'styleColor'
const colorSelectors: colorSelectorType[] = ['view', 'styleColor']

export const IconSettings: FC<IconSettingsType> = ({ selectedViewProps, selectedView }) => {
  const dispatch = useAppDispatch()
  const [colorSelector, setColorSelector] = useState<colorSelectorType>('view')

  const props = { ...selectedViewProps }

  const onChangeSize = (value: IconPropSize | null) => {
    if (value) {
      const newProps: BrandIconProps = {
        props: {
          ...selectedViewProps,
          uiLibProps: { ...selectedViewProps.uiLibProps, size: value },
        },
        type: 'Icon',
      }
      onDispatch(selectedView, newProps)
    }
  }

  const onChangeView = (value: IconPropView | null) => {
    if (value) {
      const newProps: BrandIconProps = {
        props: {
          ...selectedViewProps,
          uiLibProps: { ...selectedViewProps.uiLibProps, view: value },
          styles: {},
        },
        type: 'Icon',
      }
      onDispatch(selectedView, newProps)
    }
  }

  const onChangeIcon = (value: IconNames | null) => {
    if (value) {
      const newProps: BrandIconProps = {
        props: {
          ...selectedViewProps,
          uiLibProps: { ...selectedViewProps.uiLibProps, icons: value },
        },
        type: 'Icon',
      }
      onDispatch(selectedView, newProps)
    }
  }

  const onDispatch = (selectedView: IselectedView, newProps: BrandIconProps) => {
    dispatch(setInstanceProps(selectedView.elementId, newProps))
  }
  const onChangeColor = (value: ConstaColor | null) => {
    if (value) {
      const newProps: BrandIconProps = {
        props: {
          ...selectedViewProps,
          styles: { ...selectedViewProps.styles, color: value || undefined },
          uiLibProps: { ...selectedViewProps.uiLibProps, view: undefined },
        },
        type: 'Icon',
      }

      onDispatch(selectedView, newProps)
    }
  }
  const onChangeColorSelector = (value: colorSelectorType) => {
    setColorSelector(value)
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
          value={props.uiLibProps.size}
          onChange={value => {
            onChangeSize(value)
          }}
        />
      </div>
      <IconSelectConsta
        selectedIcon={props.uiLibProps.icons}
        label="Icon"
        onChangeIcon={onChangeIcon}
      />
      <ChoiceGroup
        name="ColorSelector"
        size="xs"
        value={colorSelector}
        items={colorSelectors}
        getItemLabel={(item: colorSelectorType) => item}
        onChange={onChangeColorSelector}
      />
      {colorSelector === 'view' ? (
        <Select
          getItemKey={(item: string) => item}
          getItemLabel={(item: string) => item}
          items={views}
          label="Вид"
          size="xs"
          value={props.uiLibProps.view}
          onChange={value => {
            onChangeView(value)
          }}
        />
      ) : (
        <LayoutPalette color={props.styles.color} size="xs" onChangeColor={onChangeColor} />
      )}
    </div>
  )
}
