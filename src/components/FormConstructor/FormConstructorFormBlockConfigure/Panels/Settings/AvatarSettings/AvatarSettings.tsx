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
  selectedElementProps: AvatarProps
  selectedElement: AvatarElement
}
export const AvatarSettings: FC<AvatarSettingsType> = ({
  selectedElementProps,
  selectedElement,
}) => {
  const { onChangeName, onChangeSize, onChangeForm, onChangeMonochrome, onChangeImage } =
    useItemsHandlers(selectedElementProps, selectedElement)
  return (
    <div className={styles.settingsContainer}>
      <TextField
        size="xs"
        leftSide="Name"
        value={selectedElementProps.name}
        onChange={onChangeName}
      />
      <Select
        getItemKey={(item: string) => item}
        getItemLabel={(item: string) => item}
        items={sizes}
        placeholder="Size"
        size="xs"
        value={selectedElementProps.size}
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
        value={selectedElementProps.form}
        renderValue={({ item }) => getValueForSelect({ item, label: 'form' })}
        onChange={value => {
          onChangeForm(value)
        }}
      />
      <Switch
        checked={!!selectedElementProps.url}
        size="xs"
        label="With image"
        onChange={onChangeImage}
      />
      <Switch
        checked={selectedElementProps.monochrome}
        size="xs"
        label="Monochrome"
        onChange={onChangeMonochrome}
      />
    </div>
  )
}
