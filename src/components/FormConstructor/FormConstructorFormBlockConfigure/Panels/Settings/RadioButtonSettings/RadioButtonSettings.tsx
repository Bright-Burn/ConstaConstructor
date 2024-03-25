import type { FC } from 'react'
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup'
import type { RadioPropAlign, RadioPropSize, RadioPropView } from '@consta/uikit/Radio'
import { Select } from '@consta/uikit/Select'
import { Switch } from '@consta/uikit/Switch'
import { Text } from '@consta/uikit/Text'
import { TextField } from '@consta/uikit/TextField'

import type { RadioButtonElement, RadioButtonProps } from '../../../../coreTypes'

import { useItemsHandlers } from './ItemsService'
import { alignArray, sizeArray, viewArray } from './types'

import styles from './styles.module.css'

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
    <div className={styles.radioButtonSettings}>
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
          getItemKey={(key: RadioPropSize) => key}
          getItemLabel={(label: RadioPropSize) => label}
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
            getItemLabel={(label: RadioPropView) => label}
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
          getItemLabel={(label: RadioPropAlign) => label}
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
