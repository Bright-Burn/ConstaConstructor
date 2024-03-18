import type { FC } from 'react'
import React from 'react'
import type { TagBasePropSize } from '@consta/uikit/__internal__/src/components/TagBase/TagBase'
import { Select } from '@consta/uikit/Select'
import { Switch } from '@consta/uikit/Switch'
import { Text } from '@consta/uikit/Text'
import { TextField } from '@consta/uikit/TextField'

import type { TagElement, TagProps } from '../../../../coreTypes'
import { Icons } from '../../../../coreTypes'
import { icons } from '../IconSettings/IconsConstants'

import { useItemsHandlers } from './ItemsService'
import type { TagBasePropGroup, TagBasePropMode } from './types'
import { groupArray, modeArray, sizeArray } from './types'

import styles from './styles.module.css'

type TagSettingsType = {
  selectedElementProps: TagProps
  selectedElement: TagElement
}

export const TagSettings: FC<TagSettingsType> = ({ selectedElementProps, selectedElement }) => {
  const {
    itemsProps,
    onChangeField,
    onChangeSize,
    onChangeMode,
    onChangeGroup,
    onChangeSwitch,
    onChangeIcon,
  } = useItemsHandlers(selectedElementProps, selectedElement)

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
          onChange={({ value }) => {
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
          onChange={({ value }) => {
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
          <Select
            getItemKey={(item: string) => item}
            getItemLabel={(item: string) => item}
            items={icons}
            disabled={!itemsProps.icon}
            size="xs"
            value={itemsProps.icon}
            renderItem={({ item, active, onClick, onMouseEnter }) => (
              <div
                className={styles.icon}
                role="option"
                aria-selected={active}
                onMouseEnter={onMouseEnter}
                onClick={onClick}>
                {React.createElement(Icons[item], { size: 'xs' })}
                <Text size="xs">{item}</Text>
              </div>
            )}
            onChange={({ value }) => {
              onChangeIcon(value)
            }}
          />
        </div>
        <div className={styles.columnInRowSettings}>
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
            onChange={({ value }) => {
              onChangeGroup(value)
            }}
          />
        </div>
      </div>
    </div>
  )
}
