import type { FC } from 'react'
import React from 'react'
import { Select } from '@consta/uikit/Select'
import { Switch } from '@consta/uikit/Switch'
import type { TagBasePropSize } from '@consta/uikit/TagBase'
import { TextField } from '@consta/uikit/TextField'

import type { TagElement, TagProps } from '../../../../coreTypes'
import { IconSelectConsta } from '../IconsSelect'

import { useItemsHandlers } from './ItemsService'
import type { TagBasePropGroup, TagBasePropMode } from './types'
import { groupArray, modeArray, sizeArray } from './types'

import styles from './styles.module.css'

type TagSettingsType = {
  selectedViewProps: TagProps
  selectedView: TagElement
}

export const TagSettings: FC<TagSettingsType> = ({ selectedViewProps, selectedView }) => {
  const {
    itemsProps,
    onChangeField,
    onChangeSize,
    onChangeMode,
    onChangeGroup,
    onChangeSwitch,
    onChangeIcon,
  } = useItemsHandlers(selectedViewProps, selectedView)
  return (
    <div className={styles.tagSettings}>
      <TextField
        size="xs"
        value={itemsProps.label}
        label="Текст"
        onChange={onChangeField('label')}
      />
      <div className={styles.rowSettings}>
        <Select
          label="Размер"
          size="xs"
          getItemKey={(key: TagBasePropSize) => key}
          getItemLabel={(label: TagBasePropSize) => label}
          value={itemsProps.size}
          items={sizeArray}
          onChange={value => {
            onChangeSize(value)
          }}
        />
        <Select
          label="Свойство"
          size="xs"
          getItemKey={(key: TagBasePropMode) => key}
          getItemLabel={(label: TagBasePropMode) => label}
          value={itemsProps.mode}
          items={modeArray}
          onChange={value => {
            onChangeMode(value)
          }}
        />
      </div>
      <div className={styles.rowSettings}>
        <div className={styles.columnInRowSettings}>
          <Switch
            label="Иконка"
            size="xs"
            checked={!!itemsProps.icon}
            onChange={onChangeSwitch('icon')}
          />
          <IconSelectConsta
            selectedIcon={itemsProps.icon}
            disabled={itemsProps.iconSwitch}
            label="Icon"
            onChangeIcon={onChangeIcon}
          />
        </div>
      </div>
      <Switch
        label="Группа"
        size="xs"
        checked={!!itemsProps.group}
        onChange={onChangeSwitch('group')}
      />
      <Select
        size="xs"
        disabled={!itemsProps.group}
        getItemKey={(key: TagBasePropGroup) => key}
        getItemLabel={(label: TagBasePropGroup) => label}
        value={itemsProps.group}
        items={groupArray}
        onChange={value => {
          onChangeGroup(value)
        }}
      />
    </div>
  )
}
