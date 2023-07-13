import styles from './styles.module.css'
import { Select } from '@consta/uikit/Select'
import { TextField } from '@consta/uikit/TextField'
import { useItemsHandlers } from './ItemsService'
import { sizes, statuses, views } from './CheckBoxConstants'
import { CheckboxPropAlign, CheckboxPropSize, CheckboxPropView } from '@consta/uikit/Checkbox'
import { Switch } from '@consta/uikit/Switch'

export const CheckboxSettings = () => {
  const { itemsProps, onChangeField, onChangeSwitch } = useItemsHandlers()

  return (
    <div className={styles.badgeSettings}>
      {itemsProps ? (
        <>
          <Switch
            checked={itemsProps.checked}
            label='checked'
            onChange={onChangeSwitch('checked')}
          />
          <Switch
            checked={itemsProps.disabled}
            label='disabled'
            onChange={onChangeSwitch('disabled')}
          />
          <Switch
            checked={itemsProps.intermediate}
            label='intermediate'
            onChange={onChangeSwitch('intermediate')}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={sizes}
            label='Size'
            value={itemsProps.size || 's'}
            onChange={({ value }) => {
              onChangeField(value as CheckboxPropSize, 'size')
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={views}
            label='View'
            value={itemsProps.view || 'primary'}
            onChange={({ value }) => {
              onChangeField(value as CheckboxPropView, 'view')
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={statuses}
            label='Align'
            value={itemsProps.align || 'center'}
            onChange={({ value }) => {
              onChangeField(value as CheckboxPropAlign, 'align')
            }}
          />
          <TextField
            label='label'
            value={itemsProps.label}
            onChange={({ value }) => {
              onChangeField(value as string, 'label')
            }}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  )
}
