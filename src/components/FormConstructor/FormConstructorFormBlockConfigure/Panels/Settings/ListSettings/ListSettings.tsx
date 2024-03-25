import type { FC } from 'react'
import { useState } from 'react'
import { Collapse } from '@consta/uikit/Collapse'
import type { ListPropForm, ListPropInnerOffset, ListPropSize } from '@consta/uikit/ListCanary'
import { Select } from '@consta/uikit/Select'
import { Switch } from '@consta/uikit/Switch'
import { TextField } from '@consta/uikit/TextField'

import type { ListElement, ListProps } from '../../../../coreTypes'

import { useItemsHandlers } from './ItemsService'
import { FormArray, innerOffsetArray, sizeArray } from './types'

import styles from './styles.module.css'

type ListSettingsType = {
  selectedElementProps: ListProps
  selectedElement: ListElement
}

export const ListSettings: FC<ListSettingsType> = ({ selectedElementProps, selectedElement }) => {
  const { itemsProps, onChangeField, onChangeSwitch, onChangeItemsCount } = useItemsHandlers(
    selectedElementProps,
    selectedElement,
  )

  const [isOpenOptions, setOpenOptions] = useState<boolean>(false)

  const onTabLabelEdit = (value: string | null, index: number) => {
    const newTabs = [...itemsProps.items]
    if (!value) newTabs[index] = { ...newTabs[index], label: '' }
    else newTabs[index] = { ...newTabs[index], label: value }
    onChangeField([...newTabs], 'items')
  }

  return (
    <div className={styles.settingsBlockList}>
      <div className={styles.settingsBlockRow}>
        <Select
          label="Размер"
          size="xs"
          getItemKey={(key: ListPropSize) => key}
          getItemLabel={(label: ListPropSize) => label}
          value={itemsProps.size}
          items={sizeArray}
          onChange={({ value }) => {
            onChangeField(value, 'size')
          }}
        />
        <Select
          label="Отступы"
          size="xs"
          getItemKey={(key: ListPropInnerOffset) => key}
          getItemLabel={(label: ListPropInnerOffset) => label}
          value={itemsProps.innerOffset}
          items={innerOffsetArray}
          onChange={({ value }) => {
            onChangeField(value, 'innerOffset')
          }}
        />
      </div>
      <Switch
        checked={itemsProps.withListBox ?? false}
        label="Оборачивание списка"
        size="xs"
        onChange={onChangeSwitch('withListBox')}
      />
      <Select
        label="Форма"
        size="xs"
        disabled={!itemsProps.withListBox}
        getItemKey={(key: ListPropForm) => key}
        getItemLabel={(label: ListPropForm) => label}
        value={itemsProps.form || 'default'}
        items={FormArray}
        onChange={({ value }) => {
          onChangeField(value, 'form')
        }}
      />
      <TextField
        label="Количество вариантов"
        type="number"
        size="xs"
        value={`${itemsProps.items.length}`}
        onChange={onChangeItemsCount}
      />
      <Collapse
        label="Название вариантов"
        size="xs"
        isOpen={isOpenOptions}
        onClick={() => {
          setOpenOptions(!isOpenOptions)
        }}>
        {itemsProps.items.map((line, index) => {
          return (
            <TextField
              key={index}
              className={styles.elementWidth}
              size="xs"
              label={`Вариант ${index + 1}`}
              value={line.label}
              onChange={event => {
                onTabLabelEdit(event.value, index)
              }}
            />
          )
        })}
      </Collapse>
    </div>
  )
}
