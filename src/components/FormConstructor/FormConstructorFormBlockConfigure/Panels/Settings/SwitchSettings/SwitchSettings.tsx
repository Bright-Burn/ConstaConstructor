import { Select } from '@consta/uikit/Select'
import { useItemsHandlers } from './ItemsService'
import { TextField } from '@consta/uikit/TextField'
import { alignArray, sizeArray, viewArray } from './types'
import { Switch, SwitchPropAlign, SwitchPropSize, SwitchPropView } from '@consta/uikit/Switch'

export const SwitchSettings = () => {
  const { itemsProps, onChangeSize, onChangeView, onChangeAlign, onChangeField, onChangeSwitch } =
    useItemsHandlers()

  return (
    <>
      <Switch
        checked={itemsProps.disabled ?? false}
        label='disabled'
        onChange={onChangeSwitch('disabled')}
      />
      <Switch
        checked={itemsProps.checked ?? false}
        label='checked'
        onChange={onChangeSwitch('checked')}
      />
      <Select
        label='size'
        getItemKey={(key: SwitchPropSize) => key}
        getItemLabel={(label: SwitchPropSize) => label}
        value={itemsProps.size}
        items={sizeArray}
        onChange={({ value }) => onChangeSize(value)}
      />
      <Select
        label='view'
        getItemKey={(key: SwitchPropView) => key}
        getItemLabel={(label: SwitchPropView) => label}
        value={itemsProps.view}
        items={viewArray}
        onChange={({ value }) => onChangeView(value)}
      />
      <Select
        label='align'
        getItemKey={(key: SwitchPropAlign) => key}
        getItemLabel={(label: SwitchPropAlign) => label}
        value={itemsProps.align}
        items={alignArray}
        onChange={({ value }) => onChangeAlign(value)}
      />
      <TextField label='label' value={itemsProps.label} onChange={onChangeField('label')} />
    </>
  )
}
