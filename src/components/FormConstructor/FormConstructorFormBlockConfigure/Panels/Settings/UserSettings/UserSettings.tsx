import type { FC } from 'react'
import { Select } from '@consta/uikit/Select'
import { Switch } from '@consta/uikit/Switch'
import { TextField } from '@consta/uikit/TextField'

import type { BrandUserProps, UserElement } from '../../../../coreTypes'
import { FilledSettings } from '../FilledSettings'

import { useItemsHandlers } from './ItemsService'
import { sizes, status, views } from './UserConstants'

import styles from './styles.module.css'

type UserSettingsType = {
  selectedElementProps: BrandUserProps
  selectedElement: UserElement
}

export const UserSettings: FC<UserSettingsType> = ({ selectedElementProps, selectedElement }) => {
  const {
    itemsProps,
    onChangeSwitch,
    onChangeInfo,
    onChangeName,
    onChangeAvatarUrl,
    onChangeStatus,
    onChangeView,
    onChangeSize,
  } = useItemsHandlers(selectedElementProps.props, selectedElement)

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
          onChange={value => {
            value && onChangeSize(value)
          }}
        />
        <Select
          getItemKey={(item: string) => item}
          getItemLabel={(item: string) => item}
          items={views}
          label="Вид"
          size="xs"
          value={itemsProps.view}
          onChange={value => {
            value && onChangeView(value)
          }}
        />
      </div>
      <div className={styles.settingsBlockRow}>
        <FilledSettings elementId={selectedElement.elementId} props={selectedElementProps} />
        <Select
          className={styles.elementWidth}
          getItemKey={(item: string) => item}
          getItemLabel={(item: string) => item}
          items={status}
          label="Статус"
          size="xs"
          value={itemsProps.status}
          onChange={value => {
            value && onChangeStatus(value)
          }}
        />
      </div>
      <TextField
        label="Ссылка на аватарку"
        size="xs"
        value={itemsProps.avatarUrl}
        onChange={value => {
          value !== null ? onChangeAvatarUrl(value) : onChangeAvatarUrl('')
        }}
      />
      <TextField
        label="Имя"
        size="xs"
        value={itemsProps.name}
        onChange={value => {
          value !== null ? onChangeName(value) : onChangeName('')
        }}
      />
      <TextField
        label="Доп. информация"
        size="xs"
        value={itemsProps.info}
        onChange={value => {
          value !== null ? onChangeInfo(value) : onChangeInfo('')
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
