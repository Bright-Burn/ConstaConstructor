import type { FC } from 'react'
import React from 'react'
import { Select } from '@consta/uikit/Select'
import { Switch } from '@consta/uikit/Switch'
import { TextField } from '@consta/uikit/TextField'

import type { BadgeElement, BadgeProps } from '../../../../coreTypes'
import { IconSelectConsta } from '../IconsSelect'
import { getValueForSelect } from '../LabelForSelectComponent'

import { useItemsHandlers } from './ItemsService'
import { forms, sizes, statuses, views } from './textConstants'

import styles from './styles.module.css'

type BadgeSettingsType = {
  selectedViewProps: BadgeProps
  selectedView: BadgeElement
}

export const BadgeSettings: FC<BadgeSettingsType> = ({ selectedViewProps, selectedView }) => {
  const {
    itemsProps,
    onChangeSwitch,
    onChangeIconLeft,
    handleOnChangeLabel,
    onChangeField,
    onChangeIconRight,
  } = useItemsHandlers(selectedViewProps, selectedView)
  return (
    <div className={styles.badgeSettings}>
      <TextField
        size="xs"
        leftSide="Текст"
        value={itemsProps.label}
        onChange={handleOnChangeLabel}
      />
      <Select
        className={styles.widthFlex}
        getItemKey={(item: string) => item}
        getItemLabel={(item: string) => item}
        items={sizes}
        placeholder="size"
        size="xs"
        value={itemsProps.size}
        renderValue={({ item }) => getValueForSelect({ item, label: 'size' })}
        onChange={value => {
          onChangeField(value, 'size')
        }}
      />
      <Select
        placeholder="view"
        getItemKey={(item: string) => item}
        getItemLabel={(item: string) => item}
        items={views}
        value={selectedViewProps.uiLibProps.view}
        size="xs"
        renderValue={({ item }) => getValueForSelect({ item, label: 'view' })}
        onChange={value => {
          onChangeField(value, 'view')
        }}
      />

      <Select
        getItemKey={(item: string) => item}
        getItemLabel={(item: string) => item}
        items={forms}
        placeholder="forms"
        size="xs"
        value={selectedViewProps.uiLibProps.form}
        renderValue={({ item }) => getValueForSelect({ item, label: 'form' })}
        onChange={value => {
          onChangeField(value, 'form')
        }}
      />
      <Select
        className={styles.widthFlex}
        getItemKey={(item: string) => item}
        getItemLabel={(item: string) => item}
        items={statuses}
        size="xs"
        placeholder="status"
        value={itemsProps.status}
        renderValue={({ item }) => getValueForSelect({ item, label: 'status' })}
        onChange={value => {
          onChangeField(value, 'status')
        }}
      />

      <div className={styles.rowSettings}>
        <IconSelectConsta
          label="iconLeft"
          selectedIcon={itemsProps.iconLeft}
          onChangeIcon={onChangeIconLeft}
        />
      </div>
      <div className={styles.rowSettings}>
        <IconSelectConsta
          label="iconRight"
          selectedIcon={selectedViewProps.uiLibProps.iconRight}
          onChangeIcon={onChangeIconRight}
        />
      </div>
      <Switch
        label="Minified"
        size="xs"
        checked={itemsProps.minified}
        onChange={onChangeSwitch('minified')}
      />
    </div>
  )
}
