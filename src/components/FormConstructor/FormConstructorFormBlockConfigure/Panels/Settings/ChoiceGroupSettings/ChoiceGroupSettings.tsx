import type { FC } from 'react'
import React, { useState } from 'react'
import type {
  ChoiceGroupPropForm,
  ChoiceGroupPropSize,
  ChoiceGroupPropView,
  ChoiceGroupPropWidth,
} from '@consta/uikit/ChoiceGroup'
import { Combobox } from '@consta/uikit/Combobox'
import { Select } from '@consta/uikit/Select'
import { Switch } from '@consta/uikit/Switch'
import { Text } from '@consta/uikit/Text'
import { TextField } from '@consta/uikit/TextField'

import type {
  ChoiceGroupElement,
  ChoiceGroupItem,
  IconNames,
  OwnChoiceGroupProps,
} from '../../../../coreTypes'
import { Icons, icons } from '../../../../coreTypes'

import { useItemsHandlers } from './ItemsService'
import { formArray, sizeArray, viewArray, widthArray } from './types'

import styles from './styles.module.css'

type ChoiceGroupSettingsType = {
  selectedElementProps: OwnChoiceGroupProps
  selectedElement: ChoiceGroupElement
}

export const ChoiceGroupSettings: FC<ChoiceGroupSettingsType> = ({
  selectedElementProps,
  selectedElement,
}) => {
  const { itemsProps, onChangeItemsCount, onChangeItems, onChangeField, onChangeSwitch } =
    useItemsHandlers(selectedElementProps, selectedElement)

  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(0)

  const onDisabledPage = (value: boolean, index: number) => {
    const newPage = [...itemsProps.items]
    newPage[index] = { ...newPage[index], disabled: value }
    onChangeItems(newPage)
  }

  const checkValueIsIconNames = (value: string): value is IconNames => {
    return value in Icons
  }

  const onLinesIconEdit = (value: string | null, index: number) => {
    const newLines = [...itemsProps.items]
    if (value !== null && checkValueIsIconNames(value)) {
      newLines[index] = {
        ...newLines[index],
        icon: Icons[value],
        labelIcon: value,
      }
    }
    onChangeItems([...newLines])
  }

  const onItemLabelEdit = (value: string | null, index: number) => {
    const newPage = [...itemsProps.items]
    if (!value) newPage[index] = { ...newPage[index], label: '' }
    else newPage[index] = { ...newPage[index], label: value }
    onChangeItems(newPage)
  }

  return (
    <div className={styles.settingsBlockChoiceGroup}>
      <Select
        size="xs"
        getItemKey={(key: ChoiceGroupPropSize) => key}
        getItemLabel={(label: ChoiceGroupPropSize) => label}
        value={itemsProps.size}
        items={sizeArray}
        renderValue={({ item }) => (
          <div className={styles.selectRenderValue}>
            <Text view="ghost" className="p-r-xs">
              Size
            </Text>
            {item}
          </div>
        )}
        onChange={value => {
          onChangeField(value, 'size')
        }}
      />
      <Select
        size="xs"
        getItemKey={(key: ChoiceGroupPropView) => key}
        getItemLabel={(label: ChoiceGroupPropView) => label}
        value={itemsProps.view}
        items={viewArray}
        placeholder="View"
        renderValue={({ item }) => (
          <div className={styles.selectRenderValue}>
            <Text view="ghost" className="p-r-xs">
              View
            </Text>
            {item}
          </div>
        )}
        onChange={value => {
          onChangeField(value, 'view')
        }}
      />
      <Select
        size="xs"
        getItemKey={(key: ChoiceGroupPropForm) => key}
        getItemLabel={(label: ChoiceGroupPropForm) => label}
        value={itemsProps.form}
        items={formArray}
        placeholder="Form"
        renderValue={({ item }) => (
          <div className={styles.selectRenderValue}>
            <Text view="ghost" className="p-r-xs">
              Form
            </Text>
            {item}
          </div>
        )}
        onChange={value => {
          onChangeField(value, 'form')
        }}
      />
      <Select
        size="xs"
        getItemKey={(key: ChoiceGroupPropWidth) => key}
        getItemLabel={(label: ChoiceGroupPropWidth) => label}
        value={itemsProps.width}
        items={widthArray}
        placeholder="Width"
        renderValue={({ item }) => (
          <div className={styles.selectRenderValue}>
            <Text view="ghost" className="p-r-xs">
              Width
            </Text>
            {item}
          </div>
        )}
        onChange={value => {
          onChangeField(value, 'width')
        }}
      />
      <Switch
        label="Multiple"
        size="xs"
        checked={itemsProps.multiple}
        onChange={onChangeSwitch('multiple')}
      />
      <Combobox
        label="Active items"
        size="xs"
        disabled={!itemsProps.multiple}
        placeholder="Items"
        items={itemsProps.items}
        value={itemsProps.value as ChoiceGroupItem[]}
        getItemKey={(key: ChoiceGroupItem) => key.label}
        multiple={true}
        onChange={value => {
          onChangeField(value, 'value')
        }}
      />
      <Switch
        label="Disabled"
        size="xs"
        checked={itemsProps.disabled}
        onChange={onChangeSwitch('disabled')}
      />
      <TextField
        size="xs"
        label="Items settings"
        type="number"
        placeholder="Amount"
        value={`${itemsProps.items.length}`}
        leftSide="Amount"
        onChange={onChangeItemsCount}
      />
      <Select
        getItemKey={item => item.label}
        getItemLabel={item => item.label}
        items={itemsProps.items}
        placeholder="Selected"
        size="xs"
        value={itemsProps.items[selectedItemIndex]}
        renderValue={({ item }) => (
          <div className={styles.selectRenderValue}>
            <Text view="ghost" className="p-r-xs">
              Selected
            </Text>
            {item.label}
          </div>
        )}
        onChange={value => {
          setSelectedItemIndex(itemsProps.items.findIndex(i => i.label === value?.label))
        }}
      />
      <TextField
        size="xs"
        value={itemsProps.items[selectedItemIndex]?.label}
        leftSide="Label"
        onChange={value => {
          onItemLabelEdit(value, selectedItemIndex)
        }}
      />
      <Switch
        label="Disabled"
        size="xs"
        checked={itemsProps.items[selectedItemIndex]?.disabled}
        onChange={event => {
          onDisabledPage(event.target.checked, selectedItemIndex)
        }}
      />
      <Select
        className={styles.elementWidth}
        size="xs"
        placeholder="Icon"
        getItemKey={(key: string | number) => key}
        getItemLabel={(label: string) => label}
        value={itemsProps.items[selectedItemIndex].labelIcon}
        items={icons}
        renderItem={({ item, active, onClick, onMouseEnter }) => (
          <div
            className={`${styles.selectElement} ${styles.SelectItem} ${
              active ? styles.SelectItemActive : ''
            }`}
            role="option"
            aria-selected={active}
            onMouseEnter={onMouseEnter}
            onClick={onClick}>
            {checkValueIsIconNames(item) &&
              React.createElement(Icons[item], {
                size: 'xs',
                className: `${active && styles.BorderLeftItem}`,
              })}
            <Text size="xs">{item}</Text>
          </div>
        )}
        renderValue={({ item }) => (
          <div className={styles.selectElement}>
            <Text view="ghost" className="p-r-xs">
              Icon
            </Text>
            <Text size="xs">{item}</Text>
          </div>
        )}
        onChange={value => {
          onLinesIconEdit(value, selectedItemIndex)
        }}
      />
    </div>
  )
}
