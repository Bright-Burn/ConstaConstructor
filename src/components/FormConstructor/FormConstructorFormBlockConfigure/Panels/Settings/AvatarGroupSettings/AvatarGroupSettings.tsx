import type { FC } from 'react'
import { Select } from '@consta/uikit/Select'
import { Switch } from '@consta/uikit/Switch'
import { TextField } from '@consta/uikit/TextField'

import type { AvatarGroupElement, AvatarGroupProps } from '../../../../coreTypes'
import { getValueForSelect } from '../LabelForSelectComponent'

import { form, sizes } from './constants'
import { useItemsHandlers } from './itemsService'

import styles from './styles.module.css'
type AvatarGroupSettingsType = {
  selectedElementProps: AvatarGroupProps
  selectedElement: AvatarGroupElement
}
export const AvatarGroupSettings: FC<AvatarGroupSettingsType> = ({
  selectedElementProps,
  selectedElement,
}) => {
  const {
    onChangeVisibleCount,
    handleChangeVisibleCount,
    onChangeSize,
    onChangeForm,
    onChangeMonochrome,
  } = useItemsHandlers(selectedElementProps, selectedElement)
  return (
    <div className={styles.settingsContainer}>
      <Switch
        checked={selectedElementProps.visibleCount === 'auto'}
        size="xs"
        label="Visible count auto"
        onChange={onChangeVisibleCount}
      />
      <TextField
        size="xs"
        type="number"
        disabled={selectedElementProps.visibleCount === 'auto'}
        value={
          typeof selectedElementProps.visibleCount !== 'number'
            ? '4'
            : String(selectedElementProps.visibleCount)
        }
        onChange={handleChangeVisibleCount}
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
        checked={selectedElementProps.monochrome}
        size="xs"
        label="Monochrome"
        onChange={onChangeMonochrome}
      />
    </div>
  )
}
