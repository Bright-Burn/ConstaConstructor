import styles from './styles.module.css'
import { BadgePropForm, BadgePropSize, BadgePropStatus, BadgePropView } from '@consta/uikit/Badge'
import { Select } from '@consta/uikit/Select'
import { Checkbox } from '@consta/uikit/Checkbox'
import { TextField } from '@consta/uikit/TextField'
import { sizes, views, statuses, forms } from './textConstants'
import { useItemsHandlers } from './ItemsService'

export const BadgeSettings = () => {
  const { itemsProps, onChangeMinified, handleOnChangeLabel, onChangeField } = useItemsHandlers()

  return (
    <div className={styles.badgeSettings}>
      {itemsProps ? (
        <>
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={sizes}
            label='Size'
            value={itemsProps.size || 's'}
            onChange={({ value }) => {
              onChangeField(value as BadgePropSize, 'size')
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={views}
            label='View'
            value={itemsProps.view || 'filled'}
            onChange={({ value }) => {
              onChangeField(value as BadgePropView, 'view')
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={statuses}
            label='Status'
            value={itemsProps.status || 'success'}
            onChange={({ value }) => {
              onChangeField(value as BadgePropStatus, 'status')
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={forms}
            label='Form'
            value={itemsProps.form || 'default'}
            onChange={({ value }) => {
              onChangeField(value as BadgePropForm, 'form')
            }}
          />
          <Checkbox
            label='Minified'
            checked={itemsProps.minified || false}
            onChange={onChangeMinified}
          />
          <TextField label='label' value={itemsProps.label} onChange={handleOnChangeLabel} />
        </>
      ) : (
        <></>
      )}
    </div>
  )
}
