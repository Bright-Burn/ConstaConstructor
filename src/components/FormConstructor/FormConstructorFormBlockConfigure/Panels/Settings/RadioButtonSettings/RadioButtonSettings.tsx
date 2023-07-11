import { Select } from '@consta/uikit/Select'
import { useItemsHandlers } from './ItemsService'
import { TextField } from '@consta/uikit/TextField'
import { alignArray, sizeArray, viewArray } from './types'
import { RadioPropView, RadioPropAlign, RadioPropSize } from '@consta/uikit/Radio'
import { Checkbox } from '@consta/uikit/Checkbox'

export const RadioButtonSettings = () => {
  const { itemsProps, onChangeSize, onChangeView, onChangeAlign, onChangeChacked, onChangeField } =
    useItemsHandlers()

  return (
    <>
      <Checkbox
        label='Checked'
        checked={itemsProps.checked}
        onClick={() => {
          onChangeChacked(!itemsProps.checked)
        }}
      />
      <Select
        label='size'
        getItemKey={(key: RadioPropSize) => key}
        getItemLabel={(label: RadioPropSize) => label}
        value={itemsProps.size}
        items={sizeArray}
        onChange={({ value }) => onChangeSize(value)}
      />
      <Select
        label='view'
        getItemKey={(key: RadioPropView) => key}
        getItemLabel={(label: RadioPropView) => label}
        value={itemsProps.view}
        items={viewArray}
        onChange={({ value }) => onChangeView(value)}
      />
      <Select
        label='align'
        getItemKey={(key: RadioPropAlign) => key}
        getItemLabel={(label: RadioPropAlign) => label}
        value={itemsProps.align}
        items={alignArray}
        onChange={({ value }) => onChangeAlign(value)}
      />
      <TextField label='label' value={itemsProps.label} onChange={onChangeField('label')} />
    </>
  )
}

