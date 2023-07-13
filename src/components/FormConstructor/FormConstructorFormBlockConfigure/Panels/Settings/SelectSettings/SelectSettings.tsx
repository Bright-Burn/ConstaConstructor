import { Select } from '@consta/uikit/Select'
import React, { useState } from 'react'
import { useItemsHandlers } from './ItemsService'
import { TextField } from '@consta/uikit/TextField'
import { Button } from '@consta/uikit/Button'
import { formArray, labelPositionArray, sizeArray, statusArray, viewArray } from './types'
import { Switch } from '@consta/uikit/Switch'
import { TextFieldPropSize, TextFieldPropStatus, TextFieldPropView } from '@consta/uikit/TextField'
import { ITEM, PropForm } from '../../../../store/formElements/selectTypes'
import { DatePickerPropDropdownForm } from '@consta/uikit/DatePicker'
import { dropDownArray } from '../ComboBoxSettings/types'

export const SelectSettings = () => {
  const {
    itemsProps,
    onChangeItemsCount,
    onChangeForm,
    onChangeItems,
    onChangeStatus,
    onChangeView,
    onChangeSwitch,
    onChangeSize,
    onChangeField,
    onChangeLabelPosition,
    onChangeDropDownForm,
  } = useItemsHandlers()

  const [lines, setLines] = useState<ITEM[]>(itemsProps.items)
  const [isLabelsEditing, setIsLabelsEditing] = useState<boolean>(false)

  const labelsEditingHandler = (value: boolean) => {
    setLines(itemsProps.items)
    setIsLabelsEditing(value)
  }

  const applyNewLines = () => {
    onChangeItems(lines)
    setIsLabelsEditing(false)
  }

  const onLinesLabelEdit = (value: string | null, index: number) => {
    const newLines = [...lines]
    newLines[index] = { ...newLines[index], label: `${value}` }
    setLines([...newLines])
  }

  const onLinesDisabledEdit = (value: boolean, index: number) => {
    const newLines = [...lines]
    newLines[index] = { ...newLines[index], disabled: value }
    setLines([...newLines])
  }

  const onLinesGroupEdit = (value: string | null, index: number) => {
    const newLines = [...lines]
    newLines[index] = { ...newLines[index], group: `${value}` }
    setLines([...newLines])
  }

  return (
    <>
      {!isLabelsEditing && (
        <>
          <TextField
            label='Количество вариантов'
            type='number'
            value={`${itemsProps.items.length}`}
            onChange={onChangeItemsCount}
          />
          <Button
            view='secondary'
            className='m-b-xs m-t-xs'
            label={'Сменить названия вариантов'}
            onClick={() => labelsEditingHandler(true)}
          />
        </>
      )}
      {isLabelsEditing && (
        <>
          {lines.map((line, index) => {
            return (
              <>
                <TextField
                  key={index}
                  label={`${index + 1}`}
                  value={`${line.label}`}
                  onChange={event => onLinesLabelEdit(event.value, index)}
                />
                <Switch
                  label='disabled'
                  checked={line.disabled}
                  onChange={event => onLinesDisabledEdit(event.checked, index)}
                />
                <Select
                  label='groups'
                  getItemKey={(key: string) => key}
                  getItemLabel={(label: string) => label}
                  value={line.group}
                  items={itemsProps.groups}
                  onChange={event => onLinesGroupEdit(event.value, index)}
                />
              </>
            )
          })}
          <Button
            size='xs'
            className='m-b-xs m-t-xs'
            label='Применить'
            onClick={() => applyNewLines()}
          />
          <Button size='xs' label='Отменить' onClick={() => labelsEditingHandler(false)} />
        </>
      )}
      <Switch
        onChange={onChangeSwitch('disabled')}
        label='disabled'
        checked={itemsProps.disabled}
      />
      <Switch
        onChange={onChangeSwitch('groupsActive')}
        label='groupsActive'
        checked={itemsProps.groupsActive}
      />
      <Select
        label='size'
        getItemKey={(key: TextFieldPropSize) => key}
        getItemLabel={(label: TextFieldPropSize) => label}
        value={itemsProps.size}
        items={sizeArray}
        onChange={({ value }) => onChangeSize(value)}
      />
      <Select
        label='view'
        getItemKey={(key: TextFieldPropView) => key}
        getItemLabel={(label: TextFieldPropView) => label}
        value={itemsProps.view}
        items={viewArray}
        onChange={({ value }) => onChangeView(value)}
      />
      <Select
        label='form'
        getItemKey={(key: PropForm) => key}
        getItemLabel={(label: PropForm) => label}
        value={itemsProps.form}
        items={formArray}
        onChange={({ value }) => onChangeForm(value)}
      />
      <Switch
        style={{ marginTop: '8px' }}
        onChange={onChangeSwitch('required')}
        label='required'
        checked={itemsProps.required}
      />
      <Select
        label='status'
        getItemKey={(key: TextFieldPropStatus) => key}
        getItemLabel={(label: TextFieldPropStatus) => label}
        value={itemsProps.status}
        items={statusArray}
        onChange={({ value }) => onChangeStatus(value)}
      />
      <Select
        label='dropdownForm'
        getItemKey={(key: DatePickerPropDropdownForm) => key}
        getItemLabel={(label: DatePickerPropDropdownForm) => label}
        value={itemsProps.dropdownForm}
        items={dropDownArray}
        onChange={({ value }) => onChangeDropDownForm(value)}
      />
      <TextField
        label='caption'
        value={`${itemsProps.caption || ''}`}
        onChange={onChangeField('caption')}
      />
      <TextField
        label='label'
        value={`${itemsProps.label || ''}`}
        onChange={onChangeField('label')}
      />
      <Select
        label='labelPosition'
        getItemKey={(key: 'top' | 'left') => key}
        getItemLabel={(label: 'top' | 'left') => label}
        value={itemsProps.labelPosition}
        items={labelPositionArray}
        onChange={({ value }) => onChangeLabelPosition(value)}
      />
      <TextField
        label='placeholder'
        value={`${itemsProps.placeholder || ''}`}
        onChange={onChangeField('placeholder')}
      />
      <Switch
        style={{ marginTop: '8px' }}
        onChange={onChangeSwitch('isLoading')}
        label='isLoading'
        checked={itemsProps.isLoading}
      />
    </>
  )
}
