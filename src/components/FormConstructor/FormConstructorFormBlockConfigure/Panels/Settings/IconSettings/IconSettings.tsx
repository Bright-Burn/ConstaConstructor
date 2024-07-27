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
  ISelectedElement,
} from '../../../../coreTypes'
import { setSelectedElement, useAppDispatch } from '../../../../store'
import { setInstanceProps } from '../../../../store/formElements'
import { IconSelectConsta } from '../IconsSelect'

import { sizes, views } from './IconsConstants'

import styles from './styles.module.css'

type IconSettingsType = {
  selectedElementProps: IconProps
  selectedElement: IconElement
}
type colorSelectorType = 'view' | 'styleColor'
const colorSelectors: colorSelectorType[] = ['view', 'styleColor']

export const IconSettings: FC<IconSettingsType> = ({ selectedElementProps, selectedElement }) => {
  const dispatch = useAppDispatch()
  const [colorSelector, setColorSelector] = useState<colorSelectorType>('view')

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
      delete newProps.props.style
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
    dispatch(setInstanceProps(selectedElement.elementId, newProps))
  }
  const onChangeColor = (value: ConstaColor | null) => {
    if (value) {
      const newProps: BrandIconProps = {
        props: { ...selectedElementProps },
        type: 'Icon',
      }
      newProps.props.style = { ...newProps.props.style, color: value }

      onDispatch(selectedElement, newProps)
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
          value={props.size}
          onChange={value => {
            onChangeSize(value)
          }}
        />
      </div>
      <IconSelectConsta selectedIcon={props.icons} label="Icon" onChangeIcon={onChangeIcon} />
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
          value={props.view}
          onChange={value => {
            onChangeView(value)
          }}
        />
      ) : (
        <LayoutPalette color={props.style?.color} size="xs" onChangeColor={onChangeColor} />
      )}
    </div>
  )
}
