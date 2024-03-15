import type { FC } from 'react'
import { Select } from '@consta/uikit/Select'
import { Switch } from '@consta/uikit/Switch'
import { TextField } from '@consta/uikit/TextField'

import type { UserElement, UserProps } from '../../../../coreTypes'
import { FilledSettings } from '../FilledSettings'

import { useItemsHandlers } from './ItemsService'
import { sizes, status, views } from './UserConstants'

import styles from './styles.module.css'

type UserSettingsType = {
  selectedElementProps: UserProps
  selectedElement: UserElement
}

export const UserSettings: FC<UserSettingsType> = ({ selectedElementProps, selectedElement }) => {
  const { itemsProps, onChangeSwitch, onChangeField } = useItemsHandlers(
    selectedElementProps,
    selectedElement,
  )

  return (
    <div className={styles.settingsBlockUser}>
      <div className={styles.settingsBlockRow}>
        <Select
          getItemKey={(item: string) => item}
          getItemLabel={(item: string) => item}
          items={sizes}
          label="Размер"
          size="xs"
          value={itemsProps.size}
          onChange={({ value }) => {
            onChangeField(value, 'size')
          }}
        />
        <Select
          getItemKey={(item: string) => item}
          getItemLabel={(item: string) => item}
          items={views}
          label="Вид"
          size="xs"
          value={itemsProps.view}
          onChange={({ value }) => {
            onChangeField(value, 'view')
          }}
        />
      </div>
      <div className={styles.settingsBlockRow}>
        <FilledSettings
          selectedElement={selectedElement}
          selectedElementProps={selectedElementProps}
          element="User"
        />
        <Select
          className={styles.elementWidth}
          getItemKey={(item: string) => item}
          getItemLabel={(item: string) => item}
          items={status}
          label="Статус"
          size="xs"
          value={itemsProps.status}
          onChange={({ value }) => {
            onChangeField(value, 'status')
          }}
        />
      </div>
      <TextField
        label="Ссылка на аватарку"
        size="xs"
        value={itemsProps.avatarUrl}
        onChange={({ value }) => {
          onChangeField(value, 'avatarUrl')
        }}
      />
      <TextField
        label="Имя"
        size="xs"
        value={itemsProps.name}
        onChange={({ value }) => {
          onChangeField(value, 'name')
        }}
      />
      <TextField
        label="Доп. информация"
        size="xs"
        value={itemsProps.info}
        onChange={({ value }) => {
          onChangeField(value, 'info')
        }}
      />
      <Switch
        checked={itemsProps.withArrow ?? false}
        label="С стрелочкой"
        size="xs"
        onChange={onChangeSwitch('withArrow')}
      />
      <Switch
        checked={itemsProps.onlyAvatar ?? false}
        label="Только аватарка"
        size="xs"
        onChange={onChangeSwitch('onlyAvatar')}
      />
    </div>
  )
}
