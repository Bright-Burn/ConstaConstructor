import type { FC } from 'react'
import { Select } from '@consta/uikit/Select'
import type { SwitchPropAlign, SwitchPropSize, SwitchPropView } from '@consta/uikit/Switch'
import { Switch } from '@consta/uikit/Switch'
import { TextField } from '@consta/uikit/TextField'

import type { SwitchElement, SwitchProps } from '../../../../coreTypes'
import { getValueForSelect } from '../LabelForSelectComponent'

import { useItemsHandlers } from './ItemsService'
import { alignArray, sizeArray, viewArray } from './types'

import styles from './styles.module.css'

type SwitchSettingsType = {
  selectedElementProps: SwitchProps
  selectedElement: SwitchElement
}

export const SwitchSettings: FC<SwitchSettingsType> = ({
  selectedElementProps,
  selectedElement,
}) => {
  const { itemsProps, onChangeSize, onChangeView, onChangeAlign, onChangeField, onChangeSwitch } =
    useItemsHandlers(selectedElementProps, selectedElement)

  return (
    <div className={styles.switchSettings}>
      <TextField
        size="xs"
        leftSide="label"
        value={itemsProps.label}
        onChange={onChangeField('label')}
      />
      <Select
        className={styles.widthFlex}
        size="xs"
        getItemKey={(key: SwitchPropSize) => key}
        getItemLabel={(label: SwitchPropSize) => label}
        value={itemsProps.size}
        placeholder="size"
        items={sizeArray}
        renderValue={({ item }) => getValueForSelect({ item, label: 'size' })}
        onChange={value => {
          onChangeSize(value)
        }}
      />
      <Select
        className={styles.widthFlex}
        size="xs"
        getItemKey={(key: SwitchPropView) => key}
        getItemLabel={(label: SwitchPropView) => label}
        value={itemsProps.view}
        placeholder="view"
        items={viewArray}
        renderValue={({ item }) => getValueForSelect({ item, label: 'view' })}
        onChange={value => {
          onChangeView(value)
        }}
      />
      <Select
        className={styles.widthFlex}
        size="xs"
        getItemKey={(key: SwitchPropAlign) => key}
        getItemLabel={(label: SwitchPropAlign) => label}
        value={itemsProps.align}
        placeholder="align"
        items={alignArray}
        renderValue={({ item }) => getValueForSelect({ item, label: 'align' })}
        onChange={value => {
          onChangeAlign(value)
        }}
      />

      <Switch
        checked={itemsProps.checked}
        label="checked"
        size="xs"
        onChange={onChangeSwitch('checked')}
      />
      <Switch
        checked={itemsProps.disabled}
        label="disabled"
        size="xs"
        onChange={onChangeSwitch('disabled')}
      />
    </div>
  )
}
