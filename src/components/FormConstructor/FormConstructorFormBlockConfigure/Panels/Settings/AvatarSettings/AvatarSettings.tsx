import type { FC } from 'react'
import React from 'react'
import { Select } from '@consta/uikit/Select'
import { Switch } from '@consta/uikit/Switch'
import { TextField } from '@consta/uikit/TextField'

import type { AvatarElement, AvatarProps } from '../../../../coreTypes'
import { getValueForSelect } from '../LabelForSelectComponent'

import { form, sizes } from './constants'
import { useItemsHandlers } from './itemsService'

import styles from './styles.module.css'
type AvatarSettingsType = {
  selectedViewProps: AvatarProps
  selectedView: AvatarElement
}
export const AvatarSettings: FC<AvatarSettingsType> = ({ selectedViewProps, selectedView }) => {
  const { onChangeName, onChangeSize, onChangeForm, onChangeMonochrome, onChangeImage } =
    useItemsHandlers(selectedViewProps, selectedView)

  return (
    <div className={styles.settingsContainer}>
      <TextField
        size="xs"
        leftSide="Name"
        value={selectedViewProps.constaProps.name}
        onChange={onChangeName}
      />
      <Select
        getItemKey={(item: string) => item}
        getItemLabel={(item: string) => item}
        items={sizes}
        placeholder="Size"
        size="xs"
        value={selectedViewProps.constaProps.size}
        renderValue={({ item }) => getValueForSelect({ item, label: 'size' })}
        onChange={value => {
          onChangeSize(value)
        }}
      />
      <Select
        getItemKey={(item: string) => item}
        getItemLabel={(item: string) => item}
        items={form}
        placeholder="Form"
        size="xs"
        value={selectedViewProps.constaProps.form}
        renderValue={({ item }) => getValueForSelect({ item, label: 'form' })}
        onChange={value => {
          onChangeForm(value)
        }}
      />
      <Switch
        checked={!!selectedViewProps.constaProps.url}
        size="xs"
        label="With image"
        onChange={onChangeImage}
      />
      <Switch
        checked={selectedViewProps.constaProps.monochrome}
        size="xs"
        label="Monochrome"
        onChange={onChangeMonochrome}
      />
    </div>
  )
}
