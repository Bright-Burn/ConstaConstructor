import { buttonActions } from '../../../../store/formElements'
import styles from './styles.module.css'
import { Select } from '@consta/uikit/Select'
import { ButtonPropForm, ButtonPropSize, ButtonPropView } from '@consta/uikit/Button'
import { forms, sizes, views } from './UserConstants'
import { Switch } from '@consta/uikit/Switch'
import { TextField } from '@consta/uikit/TextField'
import { useItemsHandlers } from './ItemsService'

export const ButtonSettings = () => {
  const { itemsProps, onChangeField, onChangeSwitch, onChangeButtonAction } = useItemsHandlers()

  return (
    <div className={styles.buttonPropsSettings}>
      {itemsProps ? (
        <>
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={buttonActions}
            label='Action'
            value={itemsProps.action || 'none'}
            onChange={({ value }) => {
              onChangeButtonAction(value || 'none')
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={sizes}
            label='size'
            value={itemsProps.size || 's'}
            onChange={({ value }) => {
              onChangeField(value as ButtonPropSize, 'size')
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={views}
            label='view'
            value={itemsProps.view}
            onChange={({ value }) => {
              onChangeField(value as ButtonPropView, 'view')
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={forms}
            label='form'
            value={itemsProps.form}
            onChange={({ value }) => {
              onChangeField(value as ButtonPropForm, 'form')
            }}
          />
          <Switch
            checked={itemsProps.disabled ?? false}
            label='disabled'
            onChange={onChangeSwitch('disabled')}
          />
          <Switch
            checked={itemsProps.loading ?? false}
            label='loading'
            onChange={onChangeSwitch('loading')}
          />
          <TextField
            label='label'
            type='text'
            value={itemsProps.label as string}
            onChange={({ value }) => onChangeField(value as string, 'label')}
          />
          <Switch
            checked={!!itemsProps.iconLeft}
            label='iconLeft'
            onChange={onChangeSwitch('iconLeft')}
          />
          <Switch
            checked={!!itemsProps.iconRight}
            label='iconRight'
            onChange={onChangeSwitch('iconRight')}
          />
          {(itemsProps.iconLeft || itemsProps.iconRight) && (
            <Switch
              checked={itemsProps.onlyIcon ?? false}
              label='onlyIcon'
              onChange={onChangeSwitch('onlyIcon')}
            />
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  )
}
