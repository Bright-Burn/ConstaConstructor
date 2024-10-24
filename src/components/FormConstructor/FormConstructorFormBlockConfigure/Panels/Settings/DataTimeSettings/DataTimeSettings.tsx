import type { FC } from 'react'
import { useState } from 'react'
import { Collapse } from '@consta/uikit/Collapse'
import { DatePicker } from '@consta/uikit/DatePicker'
import type { DateTimePropType, DateTimePropView } from '@consta/uikit/DateTime'
import { FieldGroup } from '@consta/uikit/FieldGroup'
import { Select } from '@consta/uikit/Select'
import { Switch } from '@consta/uikit/Switch'
import { TextField } from '@consta/uikit/TextField'

import type { DataTimeElement, DateTimeProps } from '../../../../coreTypes'

import { useItemsHandlers } from './ItemsService'
import { typeArray, viewArray } from './types'

import styles from './styles.module.css'

type DataTimeSettingsType = {
  selectedViewProps: DateTimeProps
  selectedView: DataTimeElement
}

export const DataTimeSettings: FC<DataTimeSettingsType> = ({ selectedViewProps, selectedView }) => {
  const { itemsProps, onChangeField, onChangeItemsCount } = useItemsHandlers(
    selectedViewProps,
    selectedView,
  )

  const [isOpenEvents, setOpenEvents] = useState<boolean>(false)
  const [withEvents, setWithEvents] = useState<boolean>(false)

  const onDateLabelEdit = (value: Date, index: number) => {
    const newDate = itemsProps.events
    newDate[index].setFullYear(value.getFullYear(), value.getMonth(), value.getDate())
    onChangeField(newDate, 'events')
  }

  const clearEvents = (checked: boolean) => {
    setWithEvents(checked)
    onChangeItemsCount('0')
  }

  return (
    <div className={styles.dateTimeSetting}>
      <div className={styles.rowSettings}>
        <Select
          value={itemsProps.type}
          label="type"
          size="xs"
          items={typeArray}
          getItemLabel={(label: DateTimePropType) => label}
          getItemKey={(key: DateTimePropType) => key}
          onChange={value => {
            onChangeField(value, 'type')
          }}
        />
        <Select
          value={itemsProps.view}
          label="view"
          size="xs"
          items={viewArray}
          getItemLabel={(label: DateTimePropView) => label}
          getItemKey={(key: DateTimePropView) => key}
          onChange={value => {
            onChangeField(value, 'view')
          }}
        />
      </div>
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
      <div className={styles.rowSettings}>
        <TextField
          label="multiplicityHours"
          type="number"
          size="xs"
          disabled={!(itemsProps.type === 'time' || itemsProps.type === 'date-time')}
          value={`${itemsProps.multiplicityHours}`}
          onChange={value => {
            onChangeField(Number(value), 'multiplicityHours')
          }}
        />
        <TextField
          label="multiplicityMinutes"
          type="number"
          size="xs"
          disabled={!(itemsProps.type === 'time' || itemsProps.type === 'date-time')}
          value={`${itemsProps.multiplicityMinutes}`}
          onChange={value => {
            onChangeField(Number(value), 'multiplicityMinutes')
          }}
        />
        <TextField
          label="multiplicitySeconds"
          type="number"
          size="xs"
          disabled={!(itemsProps.type === 'time' || itemsProps.type === 'date-time')}
          value={`${itemsProps.multiplicitySeconds}`}
          onChange={value => {
            onChangeField(Number(value), 'multiplicitySeconds')
          }}
        />
      </div>
      <Switch
        checked={withEvents}
        label="Мероприятия"
        size="xs"
        onChange={event => {
          clearEvents(event.target.checked)
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
                  onChange={value => {
                    value && onDateLabelEdit(value, index)
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
