import styles from './styles.module.css'
import { FC } from 'react'
import { Select } from '@consta/uikit/Select'
import { Switch } from '@consta/uikit/Switch'
import { views, sizes, width, status } from './UserConstants'
import { UserPropView, UserPropWidth, UserPropSize, UserPropStatus } from '@consta/uikit/User'
import { TextField } from '@consta/uikit/TextField'
import { useItemsHandlers } from './ItemsService'

export const UserSettings: FC = () => {
  const { itemsProps, onChangeSwitch, onChangeField } = useItemsHandlers()
  return (
    <div className={styles.userSettings}>
      {itemsProps ? (
        <>
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={views}
            label='view'
            value={itemsProps.view}
            onChange={({ value }) => {
              onChangeField(value as UserPropView, 'view')
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={width}
            label='width'
            value={itemsProps.width}
            onChange={({ value }) => {
              onChangeField(value as UserPropWidth, 'width')
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={sizes}
            label='size'
            value={itemsProps.size}
            onChange={({ value }) => {
              onChangeField(value as UserPropSize, 'size')
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={status}
            label='status'
            value={itemsProps.status}
            onChange={({ value }) => {
              onChangeField(value as UserPropStatus, 'status')
            }}
          />
          <TextField
            label='avatarUrl'
            value={itemsProps.avatarUrl}
            onChange={({ value }) => {
              onChangeField(value as string, 'avatarUrl')
            }}
          />
          <TextField
            label='Name'
            value={itemsProps.name}
            onChange={({ value }) => {
              onChangeField(value as string, 'name')
            }}
          />
          <TextField
            label='Info'
            value={itemsProps.info}
            onChange={({ value }) => {
              onChangeField(value as string, 'info')
            }}
          />
          <Switch
            checked={itemsProps.withArrow ?? false}
            label='withArrow'
            onChange={onChangeSwitch('withArrow')}
          />
          <Switch
            checked={itemsProps.onlyAvatar ?? false}
            label='onlyAvatar'
            onChange={onChangeSwitch('onlyAvatar')}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  )
}
