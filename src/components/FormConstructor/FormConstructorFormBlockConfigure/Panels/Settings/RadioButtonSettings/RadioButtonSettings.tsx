import { Select } from '@consta/uikit/Select'
import { useItemsHandlers } from './ItemsService'
import { TextField } from '@consta/uikit/TextField'
import { alignArray, sizeArray, viewArray } from './types'
import { RadioPropView, RadioPropAlign, RadioPropSize } from '@consta/uikit/Radio'
import { Switch } from '@consta/uikit/Switch'
import { FC } from 'react'
import { RadioButtonProps } from '../../../../coreTypes'
import { RadioButtonElement } from '../../../../coreTypes/radioButtonTypes'

type RadioButtonSettingsType = {
  selectedElementProps: RadioButtonProps
  selectedElement: RadioButtonElement
}

export const RadioButtonSettings: FC<RadioButtonSettingsType> = ({
  selectedElementProps,
  selectedElement,
}) => {
  const { itemsProps, onChangeSize, onChangeView, onChangeAlign, onChangeSwitch, onChangeField } =
    useItemsHandlers(selectedElementProps, selectedElement)

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
