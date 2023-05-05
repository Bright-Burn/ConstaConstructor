import { Select } from '@consta/uikit/Select'
import { useItemsHandlers } from './ItemsService'
import { TextField } from '@consta/uikit/TextField'
import { alignArray, sizeArray, viewArray } from './types'
import { PropSize } from '@consta/uikit/__internal__/src/components/SelectComponents/types'
import { RadioPropView, RadioPropAlign } from '@consta/uikit/Radio'

export const RadioButtonSettings = () => {
  const { itemsProps, onChangeSize, onChangeView, onChangeAlign, onChangeField } =
    useItemsHandlers()

  return (
    <>
      <Select
        label='size'
        getItemKey={(key: PropSize) => key}
        getItemLabel={(label: PropSize) => label}
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
