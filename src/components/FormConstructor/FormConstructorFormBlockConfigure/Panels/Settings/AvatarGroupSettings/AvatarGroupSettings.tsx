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
  selectedViewProps: AvatarGroupProps
  selectedView: AvatarGroupElement
}
export const AvatarGroupSettings: FC<AvatarGroupSettingsType> = ({
  selectedViewProps,
  selectedView,
}) => {
  const {
    onChangeVisibleCount,
    handleChangeVisibleCount,
    onChangeSize,
    onChangeForm,
    onChangeMonochrome,
  } = useItemsHandlers(selectedViewProps, selectedView)
  return (
    <div className={styles.settingsContainer}>
      <Switch
        checked={selectedViewProps.uiLibProps.visibleCount === 'auto'}
        size="xs"
        label="Visible count auto"
        onChange={onChangeVisibleCount}
      />
      <TextField
        size="xs"
        type="number"
        disabled={selectedViewProps.uiLibProps.visibleCount === 'auto'}
        value={
          typeof selectedViewProps.uiLibProps.visibleCount !== 'number'
            ? '4'
            : String(selectedViewProps.uiLibProps.visibleCount)
        }
        onChange={handleChangeVisibleCount}
      />
      <Select
        getItemKey={(item: string) => item}
        getItemLabel={(item: string) => item}
        items={sizes}
        placeholder="Size"
        size="xs"
        value={selectedViewProps.uiLibProps.size}
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
        value={selectedViewProps.uiLibProps.form}
        renderValue={({ item }) => getValueForSelect({ item, label: 'form' })}
        onChange={value => {
          onChangeForm(value)
        }}
      />

      <Switch
        checked={selectedViewProps.uiLibProps.monochrome}
        size="xs"
        label="Monochrome"
        onChange={onChangeMonochrome}
      />
    </div>
  )
}
