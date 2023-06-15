import { FC } from 'react'
import { Select } from '@consta/uikit/Select'
import { TextField } from '@consta/uikit/TextField'
import { Switch } from '@consta/uikit/Switch'
import { useItemsHandlers } from './ItemsService'
import {
  DatePicker,
  DatePickerPropDateTimeView,
  DatePickerPropDropdownForm,
  DatePickerPropType,
} from '@consta/uikit/DatePicker'
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
import { TextFieldPropSize, TextFieldPropStatus, TextFieldPropView } from '@consta/uikit/TextField'
import { PropForm } from '../../../../store/formElements/selectTypes'
import styles from './styles.module.css'

export const DatePickerSettings: FC = () => {
  const {
    itemsProps,
    onChangeType,
    onChangeForm,
    onChangeStatus,
    onChangeLabelPosition,
    onChangeView,
    onChangeSize,
    onChangeMinDate,
    onChangeMaxDate,
    onChangeDateTimeView,
    onChangeDropdownForm,
    onChangeField,
    onChangeSwitch,
  } = useItemsHandlers()

  return (
    <div className={`${styles.dataPickerSettings}`}>
      {itemsProps ? (
        <>
          <Select
            getItemKey={(item: DatePickerPropType | undefined) => item || ''}
            getItemLabel={(item: DatePickerPropType | undefined) => item || ''}
            items={typeArray}
            size='xs'
            label='type'
            value={itemsProps.type}
            onChange={({ value }) => onChangeType(value)}
          />
          <Select
            getItemKey={(item: PropForm | undefined) => item || ''}
            getItemLabel={(item: PropForm | undefined) => item || ''}
            items={formArray}
            size='xs'
            label='form'
            value={itemsProps.form}
            onChange={({ value }) => onChangeForm(value)}
          />
          <Select
            getItemKey={(item: TextFieldPropStatus | undefined) => item || ''}
            getItemLabel={(item: TextFieldPropStatus | undefined) => item || ''}
            items={statusArray}
            size='xs'
            label='status'
            value={itemsProps.status}
            onChange={({ value }) => onChangeStatus(value)}
          />
          <Switch
            checked={itemsProps.withClearButton}
            size='xs'
            label='withClearButton'
            onChange={onChangeSwitch('withClearButton')}
          />
          <Switch
            checked={itemsProps.withAdditionalControls}
            size='xs'
            label='with additional controls'
            onChange={onChangeSwitch('withAdditionalControls')}
          />
          <TextField
            size='xs'
            label='label'
            value={itemsProps.label}
            onChange={onChangeField('label')}
          />
          <Select
            getItemKey={(item: 'top' | 'left' | undefined) => item || ''}
            getItemLabel={(item: 'top' | 'left' | undefined) => item || ''}
            items={labelPositionArray}
            size='xs'
            label='labelPosition'
            value={itemsProps.labelPosition}
            onChange={({ value }) => onChangeLabelPosition(value)}
          />
          <Switch
            checked={itemsProps.required}
            size='xs'
            label='required'
            onChange={onChangeSwitch('required')}
          />
          <TextField
            size='xs'
            label='caption'
            value={itemsProps.caption}
            onChange={onChangeField('caption')}
          />
          <Select
            getItemKey={(item: TextFieldPropSize | undefined) => item || ''}
            getItemLabel={(item: TextFieldPropSize | undefined) => item || ''}
            items={sizeArray}
            size='xs'
            label='size'
            value={itemsProps.size}
            onChange={({ value }) => onChangeSize(value)}
          />
          <Select
            getItemKey={(item: TextFieldPropView) => item || ''}
            getItemLabel={(item: TextFieldPropView) => item || ''}
            items={viewArray}
            size='xs'
            label='view'
            value={itemsProps.view}
            onChange={({ value }) => onChangeView(value)}
          />
          <Switch
            checked={itemsProps.disabled}
            size='xs'
            label='disabled'
            onChange={onChangeSwitch('disabled')}
          />
          <DatePicker
            size='xs'
            label='minDate'
            value={itemsProps.minDate}
            onChange={onChangeMinDate}
          />
          <DatePicker
            size='xs'
            label='maxDate'
            value={itemsProps.maxDate}
            onChange={onChangeMaxDate}
          />
          <Select
            getItemKey={(item: DatePickerPropDateTimeView) => item || ''}
            getItemLabel={(item: DatePickerPropDateTimeView) => item || ''}
            items={dateTimeViewArray}
            size='xs'
            label='view'
            value={itemsProps.dateTimeView}
            onChange={({ value }) => onChangeDateTimeView(value)}
          />
          <Select
            getItemKey={(item: DatePickerPropDropdownForm) => item || ''}
            getItemLabel={(item: DatePickerPropDropdownForm) => item || ''}
            items={dropdownFormArray}
            size='xs'
            label='view'
            value={itemsProps.dropdownForm}
            onChange={({ value }) => onChangeDropdownForm(value)}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  )
}
