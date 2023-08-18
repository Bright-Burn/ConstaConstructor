import { Select } from '@consta/uikit/Select'
import { useItemsHandlers } from './ItemsService'
import { TextField } from '@consta/uikit/TextField'
import { alignArray, sizeArray, viewArray } from './types'
import { SwitchPropAlign, SwitchPropSize, SwitchPropView } from '@consta/uikit/Switch'
import { SwitchProps } from '../../../../coreTypes'
import { SwitchElement } from '../../../../coreTypes/SwitchTypes'
import { FC } from 'react'

type SwitchSettingsType = {
  selectedElementProps: SwitchProps,
  selectedElement: SwitchElement,
}

export const SwitchSettings: FC<SwitchSettingsType> = ({selectedElementProps, selectedElement}) => {
  const { itemsProps, onChangeSize, onChangeView, onChangeAlign, onChangeField } =
    useItemsHandlers(selectedElementProps, selectedElement)

  return (
    <>
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
