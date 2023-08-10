import { Select } from '@consta/uikit/Select'
import { useItemsHandlers } from './ItemsService'
import { TextField } from '@consta/uikit/TextField'
import { typeArray, viewArray } from './types'
import { DateTimePropType, DateTimePropView } from '@consta/uikit/DateTime'
import { DatePicker } from '@consta/uikit/DatePicker'
import { DataTimeProps, DataTimeElement } from '../../../../coreTypes'
import { FC } from 'react'
import { FieldGroup } from '@consta/uikit/FieldGroup'
import styles from './styles.module.css'
import { useState } from 'react'
import { Collapse } from '@consta/uikit/Collapse'
import { Switch } from '@consta/uikit/Switch'

type DataTimeSettingsType = {
  selectedElementProps: DataTimeProps
  selectedElement: DataTimeElement
}

export const DataTimeSettings: FC<DataTimeSettingsType> = ({
  selectedElementProps,
  selectedElement,
}) => {
  const { itemsProps, onChangeField, onChangeItemsCount } = useItemsHandlers(
    selectedElementProps,
    selectedElement,
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
    onChangeItemsCount({ value: '0' })
  }

  return (
    <div className={styles.dateTimeSetting}>
      <div className={styles.rowSettings}>
        <Select
          value={itemsProps.type}
          label='type'
          size='xs'
          items={typeArray}
          getItemLabel={(label: DateTimePropType) => label}
          getItemKey={(key: DateTimePropType) => key}
          onChange={({ value }) => onChangeField(value, 'type')}
        />
        <Select
          value={itemsProps.view}
          label='view'
          size='xs'
          items={viewArray}
          getItemLabel={(label: DateTimePropView) => label}
          getItemKey={(key: DateTimePropView) => key}
          onChange={({ value }) => onChangeField(value, 'view')}
        />
      </div>
      <FieldGroup size='xs'>
        <DatePicker
          leftSide='min'
          size='xs'
          value={itemsProps.minDate}
          onChange={({ value }) => onChangeField(value, 'minDate')}
        />
        <DatePicker
          size='xs'
          leftSide='max'
          value={itemsProps.maxDate}
          onChange={({ value }) => onChangeField(value, 'maxDate')}
        />
      </FieldGroup>
      <div className={styles.rowSettings}>
        <TextField
          label='multiplicityHours'
          type='number'
          size='xs'
          disabled={!(itemsProps.type === 'time' || itemsProps.type === 'date-time')}
          value={`${itemsProps.multiplicityHours}`}
          onChange={({ value }) => onChangeField(Number(value), 'multiplicityHours')}
        />
        <TextField
          label='multiplicityMinutes'
          type='number'
          size='xs'
          disabled={!(itemsProps.type === 'time' || itemsProps.type === 'date-time')}
          value={`${itemsProps.multiplicityMinutes}`}
          onChange={({ value }) => onChangeField(Number(value), 'multiplicityMinutes')}
        />
        <TextField
          label='multiplicitySeconds'
          type='number'
          size='xs'
          disabled={!(itemsProps.type === 'time' || itemsProps.type === 'date-time')}
          value={`${itemsProps.multiplicitySeconds}`}
          onChange={({ value }) => onChangeField(Number(value), 'multiplicitySeconds')}
        />
      </div>
      <Switch
        checked={withEvents}
        label='Мероприятия'
        size='xs'
        onChange={({ checked }) => clearEvents(checked)}
      />
      {withEvents && (
        <Collapse
          label='Настройка мероприятий'
          size='xs'
          isOpen={isOpenEvents}
          onClick={() => setOpenEvents(!isOpenEvents)}>
          <div className={styles.collapseSettings}>
            <TextField
              label='Количество мероприятий'
              type='number'
              size='xs'
              width='full'
              value={`${itemsProps.events.length}`}
              onChange={onChangeItemsCount}
            />
            {itemsProps.events.map((dat, index) => {
              return (
                <DatePicker
                  size='xs'
                  labelPosition='top'
                  label={`Мероприятия ${index + 1}`}
                  className={styles.rowSettingsCollapse}
                  key={index}
                  value={dat}
                  onChange={event => onDateLabelEdit(event.value as Date, index)}
                />
              )
            })}
          </div>
        </Collapse>
      )}
    </div>
  )
}
