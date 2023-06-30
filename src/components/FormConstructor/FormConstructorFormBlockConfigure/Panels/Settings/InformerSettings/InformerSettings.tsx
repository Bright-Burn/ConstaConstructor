import styles from './styles.module.css'
import { InformerPropSize, InformerPropStatus, InformerPropView } from '@consta/uikit/Informer'
import { Select } from '@consta/uikit/Select'
import { TextField } from '@consta/uikit/TextField'
import { useItemsHandlers } from './ItemsService'
import { sizes, views, statuses } from './InformerConstants'

export const InformerSettings = () => {
  const { itemsProps, onChangeField } = useItemsHandlers()

  return (
    <div className={styles.informerSettings}>
      {itemsProps ? (
        <>
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={sizes}
            label='Size'
            value={itemsProps.size || 's'}
            onChange={({ value }) => {
              onChangeField(value as InformerPropSize, 'size')
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={views}
            label='View'
            value={itemsProps.view || 'filled'}
            onChange={({ value }) => {
              onChangeField(value as InformerPropView, 'view')
            }}
          />
          <Select
            getItemKey={(item: string | undefined) => item || ''}
            getItemLabel={(item: string | undefined) => item || ''}
            items={statuses}
            label='Status'
            value={itemsProps.status || 'success'}
            onChange={({ value }) => {
              onChangeField(value as InformerPropStatus, 'status')
            }}
          />
          <TextField
            value={itemsProps.label as string}
            onChange={({ value }) => {
              onChangeField(value as string, 'label')
            }}
            label={'Label'}
          />
          <TextField
            value={itemsProps.title}
            onChange={({ value }) => {
              onChangeField(value as string, 'title')
            }}
            label={'Title'}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  )
}
