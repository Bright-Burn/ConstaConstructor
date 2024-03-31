import type { FC } from 'react'
import { useState } from 'react'
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup'
import { Collapse } from '@consta/uikit/Collapse'
import { DatePicker } from '@consta/uikit/DatePicker'
import { FieldGroup } from '@consta/uikit/FieldGroup'
import { Select } from '@consta/uikit/Select'
import { Switch } from '@consta/uikit/Switch'
import { Text } from '@consta/uikit/Text'
import { TextField } from '@consta/uikit/TextField'

import type { DatePickerElement, DatePickerProps } from '../../../../coreTypes'

import { useItemsHandlers } from './ItemsService'
import {
  dateTimeViewArray,
  dropdownFormArray,
  formArray,
  labelPositionArray,
  sizeArray,
  statusArray,
  typeArray,
  viewArray,
} from './types'

import styles from './styles.module.css'

type DatePickerSettingsType = {
  selectedElementProps: DatePickerProps
  selectedElement: DatePickerElement
}

export const DatePickerSettings: FC<DatePickerSettingsType> = ({
  selectedElementProps,
  selectedElement,
}) => {
  const {
    itemsProps,
    onChangeField,
    onChangeItemsCount,
    onChangeCaption,
    onChangeLabel,
    onChangeStatus,
    onChangeSwitch,
  } = useItemsHandlers(selectedElementProps, selectedElement)

  const [isOpenDate, setOpenDate] = useState<boolean>(false)
  const [isOpenEvents, setOpenEvents] = useState<boolean>(false)
  const [withEvents, setWithEvents] = useState<boolean>(false)

  const onDateLabelEdit = (value: Date, index: number) => {
    const newDate = itemsProps.events
    newDate[index].setFullYear(value.getFullYear(), value.getMonth(), value.getDate())
    onChangeField(newDate, 'events')
  }

  const clearEvents = (checked: React.ChangeEvent<HTMLInputElement>) => {
    setWithEvents(checked.target.checked)
    onChangeItemsCount('0')
  }

  return (
    <div className={styles.datePickerSetting}>
      <div className={styles.rowSettings}>
        <Select
          getItemKey={(item: string) => item}
          getItemLabel={(item: string) => item}
          items={typeArray}
          label="Тип"
          size="xs"
          value={itemsProps.type}
          onChange={value => {
            onChangeField(value, 'type')
          }}
        />
        <Select
          getItemKey={(item: string) => item}
          getItemLabel={(item: string) => item}
          items={sizeArray}
          label="Размер"
          size="xs"
          value={itemsProps.size}
          onChange={value => {
            onChangeField(value, 'size')
          }}
        />
      </div>
      <div className={styles.rowSettings}>
        <Select
          className={styles.widthFlex}
          getItemKey={(item: string) => item}
          getItemLabel={(item: string) => item}
          items={formArray}
          label="Форма"
          size="xs"
          value={itemsProps.form}
          onChange={value => {
            onChangeField(value, 'form')
          }}
        />
        <div className={styles.columnSettings}>
          <Text size="xs" view="secondary" />
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
          className={styles.widthFlex}
          getItemKey={(item: string) => item}
          getItemLabel={(item: string) => item}
          items={statusArray}
          label="Статус"
          size="xs"
          value={itemsProps.status}
          onChange={value => {
            value !== null ? onChangeStatus(value) : onChangeStatus('')
          }}
        />
        <DatePicker
          className={styles.widthFlex}
          size="xs"
          label="Активный выбор"
          value={itemsProps.value}
          onChange={value => {
            onChangeField(value, 'value')
          }}
        />
      </div>
      <Switch
        checked={itemsProps.disabled}
        label="Состояние блокировки"
        size="xs"
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
            value ? onChangeLabel(value) : onChangeLabel('')
          }}
        />
      </div>
      <Switch
        checked={itemsProps.required}
        label="Обязательно для заполнения"
        size="xs"
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
      <Switch
        checked={itemsProps.withClearButton}
        label="Кнопка очистки поля ввода"
        size="xs"
        onChange={onChangeSwitch('withClearButton')}
      />
      <FieldGroup size="xs">
        <DatePicker
          leftSide="min"
          size="xs"
          value={itemsProps.minDate}
          onChange={value => {
            onChangeField(value, 'minDate')
          }}
        />
        <DatePicker
          size="xs"
          leftSide="max"
          value={itemsProps.maxDate}
          onChange={value => {
            onChangeField(value, 'maxDate')
          }}
        />
      </FieldGroup>
      <Collapse
        label="Настройка выпадающего календаря"
        size="xs"
        isOpen={isOpenDate}
        onClick={() => {
          setOpenDate(!isOpenDate)
        }}>
        <Select
          getItemKey={(item: string) => item}
          getItemLabel={(item: string) => item}
          items={dropdownFormArray}
          label="Форма"
          size="xs"
          value={itemsProps.dropdownForm}
          onChange={value => {
            onChangeField(value, 'dropdownForm')
          }}
        />
        <Select
          getItemKey={(item: string) => item}
          getItemLabel={(item: string) => item}
          items={dateTimeViewArray}
          label="Вид"
          size="xs"
          value={itemsProps.dateTimeView}
          onChange={value => {
            onChangeField(value, 'dateTimeView')
          }}
        />
        <Switch
          checked={itemsProps.withAdditionalControls}
          label="Кнопки действия"
          size="xs"
          onChange={onChangeSwitch('withAdditionalControls')}
        />
      </Collapse>
      <Switch
        checked={withEvents}
        label="Мероприятия"
        size="xs"
        onChange={checked => {
          clearEvents(checked)
        }}
      />
      {!!withEvents && (
        <Collapse
          label="Настройка мероприятий"
          size="xs"
          isOpen={isOpenEvents}
          onClick={() => {
            setOpenEvents(!isOpenEvents)
          }}>
          <div>
            <TextField
              label="Количество мероприятий"
              type="number"
              size="xs"
              value={`${itemsProps.events.length}`}
              onChange={onChangeItemsCount}
            />
            {itemsProps.events.map((dat, index) => {
              return (
                <DatePicker
                  key={index}
                  size="xs"
                  labelPosition="top"
                  label={`Мероприятия ${index + 1}`}
                  className={styles.rowSettingsCollapse}
                  value={dat}
                  onChange={event => {
                    onDateLabelEdit(event as Date, index)
                  }}
                />
              )
            })}
          </div>
        </Collapse>
      )}
    </div>
  )
}
