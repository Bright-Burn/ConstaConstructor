import { Select } from '@consta/uikit/Select'
import { useItemsHandlers } from './ItemsService'
import { TextField } from '@consta/uikit/TextField'
import { alignArray, sizeArray, viewArray } from './types'
import { SwitchPropAlign, SwitchPropSize, SwitchPropView } from '@consta/uikit/Switch'
import styles from './styles.module.css'

export const SwitchSettings = () => {
  const { itemsProps, onChangeSize, onChangeView, onChangeAlign, onChangeField } =
    useItemsHandlers()

  return (
    <div className={`${styles.switchSettings}`}>
      <Select
        size='xs'
        label='size'
        getItemKey={(key: SwitchPropSize) => key}
        getItemLabel={(label: SwitchPropSize) => label}
        value={itemsProps.size}
        items={sizeArray}
        onChange={({ value }) => onChangeSize(value)}
      />
      <Select
        size='xs'
        label='view'
        getItemKey={(key: SwitchPropView) => key}
        getItemLabel={(label: SwitchPropView) => label}
        value={itemsProps.view}
        items={viewArray}
        onChange={({ value }) => onChangeView(value)}
      />
      <Select
        size='xs'
        label='align'
        getItemKey={(key: SwitchPropAlign) => key}
        getItemLabel={(label: SwitchPropAlign) => label}
        value={itemsProps.align}
        items={alignArray}
        onChange={({ value }) => onChangeAlign(value)}
      />
      <TextField
        size='xs'
        label='label'
        value={itemsProps.label}
        onChange={onChangeField('label')}
      />
    </div>
  )
}
