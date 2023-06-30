import styles from './styles.module.css'
import { CheckboxPropSize, CheckboxPropView, CheckboxPropAlign } from '@consta/uikit/Checkbox'
import { Select } from '@consta/uikit/Select'
import { TextField } from '@consta/uikit/TextField'
import { useItemsHandlers } from './ItemsService'
import { sizes, statuses, views } from './CheckBoxConstants'

export const CheckboxSettings = () => {
  const { itemsProps, onChangeField } = useItemsHandlers()

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
