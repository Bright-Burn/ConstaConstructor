import type { FC } from 'react'
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup'
import { Select } from '@consta/uikit/Select'
import type { SwitchPropAlign, SwitchPropSize, SwitchPropView } from '@consta/uikit/Switch'
import { Switch } from '@consta/uikit/Switch'
import { Text } from '@consta/uikit/Text'
import { TextField } from '@consta/uikit/TextField'

import type { SwitchProps } from '../../../../coreTypes'
import type { SwitchElement } from '../../../../coreTypes/SwitchTypes'

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
        label="Текст"
        value={itemsProps.label}
        onChange={onChangeField('label')}
      />
      <div className={styles.rowSettings}>
        <Select
          className={styles.widthFlex}
          label="Размер"
          size="xs"
          getItemKey={(key: SwitchPropSize) => key}
          getItemLabel={(label: SwitchPropSize) => label}
          value={itemsProps.size}
          items={sizeArray}
          onChange={({ value }) => {
            onChangeSize(value)
          }}
        />
        <div className={styles.columnInRowSettings}>
          <Text size="xs" view="secondary">
            Вид
          </Text>
          <ChoiceGroup
            value={itemsProps.view}
            items={viewArray}
            size="xs"
            view="ghost"
            getItemLabel={(label: SwitchPropView) => label}
            name="ChoiceGroupExample"
            onChange={({ value }) => {
              onChangeView(value)
            }}
          />
        </div>
      </div>
      <div className={styles.columnSettings}>
        <Text size="xs" view="secondary">
          Выравнивание
        </Text>
        <ChoiceGroup
          value={itemsProps.align}
          items={alignArray}
          size="xs"
          view="ghost"
          getItemLabel={(label: SwitchPropAlign) => label}
          name="ChoiceGroupExample"
          onChange={({ value }) => {
            onChangeAlign(value)
          }}
        />
      </div>
      <Switch
        checked={itemsProps.checked}
        label="Активен"
        size="xs"
        onChange={onChangeSwitch('checked')}
      />
      <Switch
        checked={itemsProps.disabled}
        label="Состояние блокировки"
        size="xs"
        onChange={onChangeSwitch('disabled')}
      />
    </div>
  )
}
