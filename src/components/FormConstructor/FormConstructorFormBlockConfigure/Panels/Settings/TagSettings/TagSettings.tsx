import { Select } from '@consta/uikit/Select'
import React from 'react'
import { FC } from 'react'
import { useItemsHandlers } from './ItemsService'
import { TextField } from '@consta/uikit/TextField'
import { TagBasePropGroup, TagBasePropMode, groupArray, modeArray, sizeArray } from './types'
import { TagProps, TagElement } from '../../../../coreTypes'
import { Switch } from '@consta/uikit/Switch'
import { TagBasePropSize } from '@consta/uikit/__internal__/src/components/TagBase/TagBase'
import { icons } from '../IconSettings/IconsConstants'
import { Icons } from '../../../Elements/IconFormElement/mocks'
import styles from './styles.module.css'
import { Text } from '@consta/uikit/Text'

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
        size='xs'
        value={itemsProps.label}
        onChange={onChangeField('label')}
        label='Текст'
      />
      <div className={styles.rowSettings}>
        <Select
          label='Размер'
          size='xs'
          getItemKey={(key: TagBasePropSize) => key}
          getItemLabel={(label: TagBasePropSize) => label}
          value={itemsProps.size}
          items={sizeArray}
          onChange={({ value }) => onChangeSize(value)}
        />
        <Select
          label='Свойство'
          size='xs'
          getItemKey={(key: TagBasePropMode) => key}
          getItemLabel={(label: TagBasePropMode) => label}
          value={itemsProps.mode}
          items={modeArray}
          onChange={({ value }) => onChangeMode(value)}
        />
      </div>
      <div className={styles.rowSettings}>
        <div className={styles.columnInRowSettings}>
          <Switch
            onChange={onChangeSwitch('icon')}
            label='Иконка'
            size='xs'
            checked={!!itemsProps.icon}
          />
          <Select
            getItemKey={(item: string) => item}
            getItemLabel={(item: string) => item}
            items={icons}
            disabled={!!itemsProps.icon ? false : true}
            size='xs'
            value={itemsProps.icon}
            onChange={({ value }) => onChangeIcon(value)}
            renderItem={({ item, active, onClick, onMouseEnter }) => (
              <div
                className={styles.icon}
                role='option'
                aria-selected={active}
                onMouseEnter={onMouseEnter}
                onClick={onClick}>
                {React.createElement(Icons[item], { size: 'xs' })}
                <Text size='xs'>{item}</Text>
              </div>
            )}
          />
        </div>
        <div className={styles.columnInRowSettings}>
          <Switch
            onChange={onChangeSwitch('group')}
            label='Группа'
            size='xs'
            checked={!!itemsProps.group}
          />
          <Select
            size='xs'
            disabled={!!itemsProps.group ? false : true}
            getItemKey={(key: TagBasePropGroup) => key}
            getItemLabel={(label: TagBasePropGroup) => label}
            value={itemsProps.group}
            items={groupArray}
            onChange={({ value }) => onChangeGroup(value)}
          />
        </div>
      </div>
    </div>
  )
}
