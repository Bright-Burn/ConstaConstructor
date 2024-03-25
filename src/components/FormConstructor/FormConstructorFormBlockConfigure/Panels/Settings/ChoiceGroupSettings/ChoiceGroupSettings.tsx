import type { FC } from 'react'
import React, { useState } from 'react'
import type {
  ChoiceGroupPropForm,
  ChoiceGroupPropSize,
  ChoiceGroupPropView,
} from '@consta/uikit/ChoiceGroup'
import { Collapse } from '@consta/uikit/Collapse'
import { Combobox } from '@consta/uikit/Combobox'
import type { IconComponent } from '@consta/uikit/Icon'
import { Select } from '@consta/uikit/Select'
import { Switch } from '@consta/uikit/Switch'
import { Text } from '@consta/uikit/Text'
import { TextField } from '@consta/uikit/TextField'

import type {
  ChoiceGroupElement,
  ChoiceGroupItem,
  DeepWriteable,
  IconNames,
  OwnChoiceGroupProps,
} from '../../../../coreTypes'
import { Icons, icons } from '../../../../coreTypes'

import { useItemsHandlers } from './ItemsService'
import { formArray, sizeArray, viewArray } from './types'

import styles from './styles.module.css'

type ChoiceGroupSettingsType = {
  selectedElementProps: DeepWriteable<OwnChoiceGroupProps>
  selectedElement: ChoiceGroupElement
}

export const ChoiceGroupSettings: FC<ChoiceGroupSettingsType> = ({
  selectedElementProps,
  selectedElement,
}) => {
  const { itemsProps, onChangeItemsCount, onChangeItems, onChangeField, onChangeSwitch } =
    useItemsHandlers(selectedElementProps, selectedElement)
  const [isOpenOptions, setIsOpenOptions] = useState<boolean>(false)
  const [isPageDisabled, setIsPageDisabled] = useState<boolean>(false)

  const onLinesLabelEdit = (value: string | null, index: number) => {
    const newLines = [...itemsProps.items]
    if (!value) newLines[index] = { ...newLines[index], label: '' }
    else newLines[index] = { ...newLines[index], label: value }
    onChangeItems([...newLines])
  }

  const onDisabledPage = (value: boolean) => {
    const newPage = [...itemsProps.items].map(page => {
      const { icon, labelIcon, ...other } = page
      return other
    })
    onChangeItems(newPage)
    setIsPageDisabled(value)
  }

  // TODO убрать когда избавимся от DeepWriteable
  const iconComponentToDeepWriteable = (x: IconComponent) => x as DeepWriteable<IconComponent>

  const checkValueIsIconNames = (value: string): value is IconNames => {
    return value in Icons
  }

  const onLinesIconEdit = (value: string | null, index: number) => {
    const newLines = [...itemsProps.items]
    if (value !== null && checkValueIsIconNames(value)) {
      newLines[index] = {
        ...newLines[index],
        icon: iconComponentToDeepWriteable(Icons[value]),
        labelIcon: value,
      }
    }
    onChangeItems([...newLines])
  }

  return (
    <div className={styles.settingsBlockChoiceGroup}>
      <div className={styles.settingsBlockRow}>
        <Select
          label="Размер"
          size="xs"
          getItemKey={(key: ChoiceGroupPropSize) => key}
          getItemLabel={(label: ChoiceGroupPropSize) => label}
          value={itemsProps.size}
          items={sizeArray}
          onChange={({ value }) => {
            onChangeField(value, 'size')
          }}
        />
        <Select
          label="Вид"
          size="xs"
          getItemKey={(key: ChoiceGroupPropView) => key}
          getItemLabel={(label: ChoiceGroupPropView) => label}
          value={itemsProps.view}
          items={viewArray}
          onChange={({ value }) => {
            onChangeField(value, 'view')
          }}
        />
      </div>
      <Select
        label="Форма"
        size="xs"
        getItemKey={(key: ChoiceGroupPropForm) => key}
        getItemLabel={(label: ChoiceGroupPropForm) => label}
        value={itemsProps.form}
        items={formArray}
        onChange={({ value }) => {
          onChangeField(value, 'form')
        }}
      />
      <Switch
        label="Только инконки"
        size="xs"
        checked={itemsProps.onlyIcon}
        onChange={onChangeSwitch('onlyIcon')}
      />
      <Switch
        label="Состояние блокировки"
        size="xs"
        checked={itemsProps.disabled}
        onChange={onChangeSwitch('disabled')}
      />
      <TextField
        label="Количество вариантов"
        size="xs"
        type="number"
        value={`${itemsProps.items.length}`}
        onChange={onChangeItemsCount}
      />
      <Switch
        label="Иконки у вариантов"
        size="xs"
        checked={isPageDisabled}
        onChange={e => {
          onDisabledPage(e.checked)
        }}
      />
      <Switch
        label="Мультивыбор"
        size="xs"
        checked={itemsProps.multiple}
        onChange={onChangeSwitch('multiple')}
      />
      {itemsProps.multiple ? (
        <Combobox
          label="Выберите активные элементы"
          size="xs"
          placeholder="Выберите вариант"
          items={itemsProps.items as ChoiceGroupItem[]}
          value={itemsProps.value as ChoiceGroupItem[]}
          getItemKey={(key: ChoiceGroupItem) => key.label}
          multiple={true}
          onChange={({ value }) => {
            onChangeField(value, 'value')
          }}
        />
      ) : (
        <Select
          label="Активный элемент"
          size="xs"
          items={itemsProps.items}
          value={itemsProps.value as DeepWriteable<ChoiceGroupItem>}
          getItemKey={(key: DeepWriteable<ChoiceGroupItem>) => key.label}
          onChange={({ value }) => {
            onChangeField(value, 'value')
          }}
        />
      )}
      <Collapse
        label="Название вариантов"
        size="xs"
        isOpen={isOpenOptions}
        onClick={() => {
          setIsOpenOptions(!isOpenOptions)
        }}>
        {itemsProps.items.map((line, index) => {
          return (
            <div className={styles.settingsBlockRowCollapse}>
              <TextField
                key={index}
                className={styles.elementWidth}
                size="xs"
                label={`Вариант ${index + 1}`}
                value={line.label}
                onChange={event => {
                  onLinesLabelEdit(event.value, index)
                }}
              />
              <Select
                className={styles.elementWidth}
                label="Иконка"
                size="xs"
                disabled={!isPageDisabled}
                getItemKey={key => key}
                getItemLabel={label => label}
                value={line.labelIcon}
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
                    {checkValueIsIconNames(item) &&
                      React.createElement(Icons[item], { size: 'xs' })}
                    <Text size="xs">{item}</Text>
                  </div>
                )}
                onChange={event => {
                  onLinesIconEdit(event.value, index)
                }}
              />
            </div>
          )
        })}
      </Collapse>
    </div>
  )
}
