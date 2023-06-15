import { Select } from '@consta/uikit/Select'
import { useItemsHandlers } from './ItemsService'
import { TextField } from '@consta/uikit/TextField'
import { alignArray, sizeArray, viewArray } from './types'
import { RadioPropView, RadioPropAlign, RadioPropSize } from '@consta/uikit/Radio'
import styles from './styles.module.css'

export const RadioButtonSettings = () => {
  const { itemsProps, onChangeSize, onChangeView, onChangeAlign, onChangeField } =
    useItemsHandlers()

  return (
    <div className={`${styles.radioButtonSettings}`}>
      <Select
        size='xs'
        label='size'
        getItemKey={(key: RadioPropSize) => key}
        getItemLabel={(label: RadioPropSize) => label}
        value={itemsProps.size}
        items={sizeArray}
        onChange={({ value }) => onChangeSize(value)}
      />
      <Select
        size='xs'
        label='view'
        getItemKey={(key: RadioPropView) => key}
        getItemLabel={(label: RadioPropView) => label}
        value={itemsProps.view}
        items={viewArray}
        onChange={({ value }) => onChangeView(value)}
      />
      <Select
        size='xs'
        label='align'
        getItemKey={(key: RadioPropAlign) => key}
        getItemLabel={(label: RadioPropAlign) => label}
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
