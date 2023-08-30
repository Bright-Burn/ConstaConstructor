import styles from './styles.module.css'
import { FC } from 'react'
import { Select } from '@consta/uikit/Select'
import { Switch } from '@consta/uikit/Switch'
import { views, sizes, status } from './UserConstants'
import { TextField } from '@consta/uikit/TextField'
import { useItemsHandlers } from './ItemsService'
import { UserProps, UserElement } from '../../../../coreTypes'
import { FilledSettings } from '../FilledSettings'

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
    <div className={styles.userSettings}>
      <div className={styles.rowSettings}>
        <Select
          getItemKey={(item: string) => item}
          getItemLabel={(item: string) => item}
          items={sizes}
          label='Размер'
          size='xs'
          value={itemsProps.size}
          onChange={({ value }) => {
            onChangeField(value, 'size')
          }}
        />
        <Select
          getItemKey={(item: string) => item}
          getItemLabel={(item: string) => item}
          items={views}
          label='Вид'
          size='xs'
          value={itemsProps.view}
          onChange={({ value }) => {
            onChangeField(value, 'view')
          }}
        />
      </div>
      <div className={styles.rowSettings}>
        <FilledSettings
          selectedElement={selectedElement}
          selectedElementProps={selectedElementProps}
          element='User'
        />
        <Select
          className={styles.widthFlex}
          getItemKey={(item: string) => item}
          getItemLabel={(item: string) => item}
          items={status}
          label='Статус'
          size='xs'
          value={itemsProps.status}
          onChange={({ value }) => {
            onChangeField(value, 'status')
          }}
        />
      </div>
      <TextField
        label='Ссылка на аватарку'
        size='xs'
        value={itemsProps.avatarUrl}
        onChange={({ value }) => {
          onChangeField(value, 'avatarUrl')
        }}
      />
      <TextField
        label='Имя'
        size='xs'
        value={itemsProps.name}
        onChange={({ value }) => {
          onChangeField(value, 'name')
        }}
      />
      <TextField
        label='Доп. информация'
        size='xs'
        value={itemsProps.info}
        onChange={({ value }) => {
          onChangeField(value, 'info')
        }}
      />
      <Switch
        checked={itemsProps.withArrow ?? false}
        label='С стрелочкой'
        size='xs'
        onChange={onChangeSwitch('withArrow')}
      />
      <Switch
        checked={itemsProps.onlyAvatar ?? false}
        label='Только аватарка'
        size='xs'
        onChange={onChangeSwitch('onlyAvatar')}
      />
    </div>
  )
}
