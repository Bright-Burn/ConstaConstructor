import type { FC } from 'react'
import React, { useLayoutEffect, useState } from 'react'
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup'
import { Collapse } from '@consta/uikit/Collapse'
import { Combobox } from '@consta/uikit/Combobox'
import { Select } from '@consta/uikit/Select'
import { Switch } from '@consta/uikit/Switch'
import { Text } from '@consta/uikit/Text'
import { TextField } from '@consta/uikit/TextField'

import type { ComboBoxElement, comboboxItemType, ComboboxProps } from '../../../../coreTypes'
import { FilledSettings } from '../FilledSettings'

import { useItemsHandlers } from './ItemsService'
import {
  dropDownArray,
  formArray,
  labelPositionArray,
  sizeArray,
  statusArray,
  viewArray,
} from './types'

import styles from './styles.module.css'

type ComboBoxSettingsType = {
  selectedViewProps: ComboboxProps
  selectedView: ComboBoxElement
}

export const ComboBoxSettings: FC<ComboBoxSettingsType> = ({ selectedViewProps, selectedView }) => {
  const {
    itemsProps,
    onChangeItemsCount,
    onChangeItems,
    onChangeField,
    onChangeStatus,
    onChangeLabel,
    onChangePlaceholder,
    onChangeCaption,
    onChangeSwitch,
    onChangeWidth,
  } = useItemsHandlers(selectedViewProps, selectedView)
  const [isOpenVariable, setOpenVariable] = useState<boolean>(false)
  const [isOpenList, setOpenList] = useState<boolean>(false)
  const [widthValue, setWidthValue] = useState<string>('0')
  const onLinesLabelEdit = (value: string | null, index: number) => {
    const newLines = [...itemsProps.items]
    newLines[index] = { ...newLines[index], label: `${value}` }
    onChangeItems(newLines)
  }

  const onLinesGroupEdit = (value: string | null, index: number) => {
    const newLines = [...itemsProps.items]
    newLines[index] = { ...newLines[index], group: `${value}` }
    onChangeItems(newLines)
  }
  useLayoutEffect(() => {
    const comboboxStyles = selectedViewProps.style

    setWidthValue(comboboxStyles.maxWidth.replaceAll('px', '') || '0')
  }, [selectedViewProps.style.maxWidth])

  return (
    <div className={styles.comoboboxSettings}>
      <div className={styles.rowSettings}>
        <TextField
          value={widthValue}
          type="number"
          leftSide="W"
          size="xs"
          min="0"
          onChange={value => {
            onChangeWidth(value)
          }}
        />
        <Text view="secondary" size="xs" className={styles.settingCaption}>
          {' '}
          px
        </Text>
      </div>
      <div className={styles.rowSettings}>
        <Select
          className={styles.widthFlex}
          label="Размер"
          size="xs"
          getItemKey={(key: string) => key}
          getItemLabel={(label: string) => label}
          value={itemsProps.size}
          items={sizeArray}
          onChange={value => {
            onChangeField(value, 'size')
          }}
        />
        <div className={styles.columnSettings}>
          <Text view="secondary" size="xs">
            Вид
          </Text>
          <ChoiceGroup
            value={itemsProps.view}
            items={viewArray}
            getItemLabel={(label: string) => label}
            view="ghost"
            size="xs"
            name="ChoiceGroupExample"
            onChange={value => {
              onChangeField(value, 'view')
            }}
          />
        </div>
      </div>
      <div className={styles.rowSettings}>
        <Select
          label="Форма"
          size="xs"
          getItemKey={(key: string) => key}
          getItemLabel={(label: string) => label}
          value={itemsProps.form || 'default'}
          items={formArray}
          onChange={value => {
            onChangeField(value, 'form')
          }}
        />
        <Select
          label="Статус"
          size="xs"
          getItemKey={(key: string) => key}
          getItemLabel={(label: string) => label}
          value={itemsProps.status}
          items={statusArray}
          onChange={value => {
            value !== null ? onChangeStatus(value) : onChangeStatus('')
          }}
        />
      </div>
      <div className={styles.rowSettings}>
        <FilledSettings
          elementId={selectedView.elementId}
          props={{ props: selectedViewProps, type: 'ComboBox' }}
        />
      </div>
      <Switch
        label="Состояние блокировки"
        size="xs"
        checked={itemsProps.disabled}
        onChange={onChangeSwitch('disabled')}
      />
      <Switch
        label="Текст заголовка"
        size="xs"
        checked={!!itemsProps.label}
        onChange={onChangeSwitch('label')}
      />
      <div className={styles.rowSettingsWithoutGap}>
        <Select
          className={styles.widthTopLeftFlex}
          size="xs"
          disabled={!itemsProps.label}
          getItemKey={(key: string) => key}
          getItemLabel={(label: string) => label}
          value={itemsProps.labelPosition || 'top'}
          items={labelPositionArray}
          onChange={value => {
            onChangeField(value, 'labelPosition')
          }}
        />
        <TextField
          className={styles.widthFlex}
          disabled={!itemsProps.label}
          value={itemsProps.label}
          size="xs"
          onChange={value => {
            value !== null ? onChangeLabel(value) : onChangeLabel('')
          }}
        />
      </div>
      <Switch
        label="Обязательное заполнение"
        size="xs"
        checked={itemsProps.required}
        onChange={onChangeSwitch('required')}
      />
      <div className={styles.columnSettingsWithoutRow}>
        <Switch
          label="Текст подписи"
          size="xs"
          checked={!!itemsProps.caption}
          onChange={onChangeSwitch('caption')}
        />
        <TextField
          size="xs"
          disabled={!itemsProps.caption}
          value={itemsProps.caption}
          onChange={value => {
            value !== null ? onChangeCaption(value) : onChangeCaption('')
          }}
        />
      </div>
      <TextField
        value={itemsProps.placeholder}
        size="xs"
        label="Текст placeholder"
        onChange={value => {
          value !== null ? onChangePlaceholder(value) : onChangePlaceholder('')
        }}
      />
      <TextField
        label="Количество вариантов"
        type="number"
        size="xs"
        value={`${itemsProps.items.length}`}
        onChange={onChangeItemsCount}
      />
      <Switch
        label="Мультивыбор"
        size="xs"
        checked={itemsProps.multiple}
        onChange={onChangeSwitch('multiple')}
      />
      {itemsProps.multiple ? (
        <Combobox
          multiple={true}
          label="Активный элемент"
          size="xs"
          getItemKey={(key: comboboxItemType) => key.id}
          value={Array.isArray(itemsProps.value) ? itemsProps.value : undefined}
          items={itemsProps.items}
          onChange={value => {
            onChangeField(value, 'value')
          }}
        />
      ) : (
        <Select
          label="Активный элемент"
          size="xs"
          getItemKey={(key: comboboxItemType) => key.id}
          value={Array.isArray(itemsProps.value) ? undefined : itemsProps.value}
          items={itemsProps.items}
          onChange={value => {
            onChangeField(value, 'value')
          }}
        />
      )}
      <Collapse
        label="Название вариантов"
        size="xs"
        isOpen={isOpenVariable}
        onClick={() => {
          setOpenVariable(!isOpenVariable)
        }}>
        {itemsProps.items.map((line, index) => {
          return (
            <div key={line.id} className={styles.rowSettingsCollapse}>
              <TextField
                key={index}
                className={styles.widthFlex}
                size="xs"
                label={`Вариант ${index + 1}`}
                value={line.label}
                onChange={value => {
                  onLinesLabelEdit(value, index)
                }}
              />
              <Select
                className={styles.widthFlex}
                label="Группа"
                size="xs"
                getItemKey={(key: string) => key}
                getItemLabel={(label: string) => label}
                value={line.group}
                items={itemsProps.groups}
                onChange={value => {
                  onLinesGroupEdit(value, index)
                }}
              />
            </div>
          )
        })}
      </Collapse>
      <Collapse
        label="Настройка выпадающего списка"
        size="xs"
        isOpen={isOpenList}
        onClick={() => {
          setOpenList(!isOpenList)
        }}>
        <div className={styles.columnSettingsWithoutRow}>
          <Select
            label="Форма"
            size="xs"
            getItemKey={(key: string) => key}
            getItemLabel={(label: string) => label}
            value={itemsProps.dropdownForm || 'default'}
            items={dropDownArray}
            onChange={value => {
              onChangeField(value, 'dropdownForm')
            }}
          />
          <Switch
            label="Состояние загрузки"
            size="xs"
            checked={itemsProps.isLoading}
            onChange={onChangeSwitch('isLoading')}
          />
          <Switch
            label="Группировка пунктов"
            size="xs"
            checked={itemsProps.groupsActive}
            onChange={onChangeSwitch('groupsActive')}
          />
        </div>
      </Collapse>
    </div>
  )
}
