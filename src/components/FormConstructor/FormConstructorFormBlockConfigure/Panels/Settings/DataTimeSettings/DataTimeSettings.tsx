import { Select } from '@consta/uikit/Select'
import { useItemsHandlers } from './ItemsService'
import { TextField } from '@consta/uikit/TextField'
import { typeArray, viewArray } from './types'
import { DateTimePropType, DateTimePropView, DateTimeProps } from '@consta/uikit/DateTime'
import { DatePicker } from '@consta/uikit/DatePicker'

export const DataTimeSettings = () => {
  const {
    itemsProps,
    onChangeType,
    onChangeMultiplicityHours,
    onChangeMultiplicityMinutes,
    onChangeMultiplicitySeconds,
    onChangeView,
    onChangeMinDate,
    onChangeMaxDate,
  } = useItemsHandlers()

  return (
    <>
      <Select
        value={itemsProps.type}
        label='type'
        items={typeArray}
        getItemLabel={(label: DateTimePropType) => label}
        getItemKey={(key: DateTimePropType) => key}
        onChange={onChangeType}
      />
      <Select
        value={itemsProps.view}
        label='view'
        items={viewArray}
        getItemLabel={(label: DateTimePropView) => label}
        getItemKey={(key: DateTimePropView) => key}
        onChange={onChangeView}
      />
      <DatePicker label='minDate' value={itemsProps.minDate} onChange={onChangeMinDate} />
      <DatePicker label='maxDate' value={itemsProps.maxDate} onChange={onChangeMaxDate} />
      <TextField
        onChange={onChangeMultiplicityHours}
        label='multiplicityHours'
        type='number'
        value={itemsProps.multiplicityHours}
      />
      <TextField
        onChange={onChangeMultiplicityMinutes}
        label='multiplicityMinutes'
        type='number'
        value={itemsProps.multiplicityMinutes}
      />
      <TextField
        onChange={onChangeMultiplicitySeconds}
        label='multiplicitySeconds'
        type='number'
        value={itemsProps.multiplicitySeconds}
      />
    </>
  )
}
