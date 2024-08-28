import type { FC } from 'react'
import { Select } from '@consta/uikit/Select'
import { Switch } from '@consta/uikit/Switch'
import { TextField } from '@consta/uikit/TextField'

import type { CheckboxElement, CheckboxProps } from '../../../../coreTypes'
import { getValueForSelect } from '../LabelForSelectComponent'

import { align, sizes, views } from './CheckBoxConstants'
import { useItemsHandlers } from './ItemsService'

import styles from './styles.module.css'

type CheckboxSettingsType = {
  selectedViewProps: CheckboxProps
  selectedView: CheckboxElement
}

export const CheckboxSettings: FC<CheckboxSettingsType> = ({ selectedViewProps, selectedView }) => {
  const { itemsProps, onChangeField, onChangeSwitch, onChangeLabel } = useItemsHandlers(
    selectedViewProps,
    selectedView,
  )

  return (
    <div className={styles.checkboxSettings}>
      <TextField
        size="xs"
        leftSide="label"
        value={itemsProps.label}
        onChange={value => {
          value !== null ? onChangeLabel(value) : onChangeLabel('')
        }}
      />
      <Select
        className={styles.widthFlex}
        getItemKey={(item: string) => item}
        getItemLabel={(item: string) => item}
        items={sizes}
        size="xs"
        value={itemsProps.size}
        renderValue={({ item }) => getValueForSelect({ item, label: 'size' })}
        onChange={value => {
          onChangeField(value, 'size')
        }}
      />
      <Select
        className={styles.widthFlex}
        getItemKey={(item: string) => item}
        getItemLabel={(item: string) => item}
        items={views}
        size="xs"
        value={itemsProps.view}
        renderValue={({ item }) => getValueForSelect({ item, label: 'view' })}
        onChange={value => {
          onChangeField(value, 'view')
        }}
      />
      <Select
        className={styles.widthFlex}
        getItemKey={(item: string) => item}
        getItemLabel={(item: string) => item}
        items={align}
        size="xs"
        value={itemsProps.align}
        renderValue={({ item }) => getValueForSelect({ item, label: 'align' })}
        onChange={value => {
          onChangeField(value, 'align')
        }}
      />
      <Switch
        checked={itemsProps.checked}
        label="checked"
        size="xs"
        onChange={onChangeSwitch('checked')}
      />
      <Switch
        checked={itemsProps.intermediate}
        label="intermediate"
        size="xs"
        onChange={onChangeSwitch('intermediate')}
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
