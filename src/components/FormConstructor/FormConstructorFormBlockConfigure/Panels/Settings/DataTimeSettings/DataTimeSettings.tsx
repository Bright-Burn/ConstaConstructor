import { Select } from '@consta/uikit/Select'
import { useItemsHandlers } from './ItemsService'
import { TextField } from '@consta/uikit/TextField'
import { typeArray, viewArray } from './types'
import { DateTimePropType, DateTimePropView } from '@consta/uikit/DateTime'
import { DatePicker } from '@consta/uikit/DatePicker'
import styles from './styles.module.css'

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
    <div className={`${styles.dataTimeSettings}`}>
      <Select
        value={itemsProps.type}
        size='xs'
        label='type'
        items={typeArray}
        getItemLabel={(label: DateTimePropType) => label}
        getItemKey={(key: DateTimePropType) => key}
        onChange={onChangeType}
      />
      <Select
        value={itemsProps.view}
        size='xs'
        label='view'
        items={viewArray}
        getItemLabel={(label: DateTimePropView) => label}
        getItemKey={(key: DateTimePropView) => key}
        onChange={onChangeView}
      />
      <DatePicker size='xs' label='minDate' value={itemsProps.minDate} onChange={onChangeMinDate} />
      <DatePicker size='xs' label='maxDate' value={itemsProps.maxDate} onChange={onChangeMaxDate} />
      <TextField
        onChange={onChangeMultiplicityHours}
        size='xs'
        label='multiplicityHours'
        type='number'
        value={`${itemsProps.multiplicityHours}`}
      />
      <TextField
        onChange={onChangeMultiplicityMinutes}
        size='xs'
        label='multiplicityMinutes'
        type='number'
        value={`${itemsProps.multiplicityMinutes}`}
      />
      <TextField
        onChange={onChangeMultiplicitySeconds}
        size='xs'
        label='multiplicitySeconds'
        type='number'
        value={`${itemsProps.multiplicitySeconds}`}
      />
    </div>
  )
}
