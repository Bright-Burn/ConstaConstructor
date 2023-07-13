import { Select } from '@consta/uikit/Select'
import React, { useState } from 'react'
import { useItemsHandlers } from './ItemsService'
import { TextField } from '@consta/uikit/TextField'
import {
  dropDownArray,
  formArray,
  labelPositionArray,
  sizeArray,
  statusArray,
  viewArray,
} from './types'
import { Item } from '../../../../store/formElements/comboBoxTypes'
import { Switch } from '@consta/uikit/Switch'
import { TextFieldPropSize, TextFieldPropStatus, TextFieldPropView } from '@consta/uikit/TextField'
import { PropForm } from '../../../../store/formElements/selectTypes'
import { Button } from '@consta/uikit/Button'
import { DatePickerPropDropdownForm } from '@consta/uikit/DatePicker'

export const ComboBoxSettings = () => {
  const {
    itemsProps,
    onChangeItemsCount,
    onChangeLabelPosition,
    onChangeStatus,
    onChangeItems,
    onChangeField,
    onChangeView,
    onChangeSize,
    onChangeForm,
    onChangeSwitch,
    onChangeDropDownForm,
  } = useItemsHandlers()
  const [lines, setLines] = useState<Item[]>(itemsProps.items)
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
            label={'Сменить названия в списке'}
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
        label='from'
        getItemKey={(key: PropForm) => key}
        getItemLabel={(label: PropForm) => label}
        value={itemsProps.form}
        items={formArray}
        onChange={({ value }) => onChangeForm(value)}
      />
      <Switch
        onChange={onChangeSwitch('required')}
        label='required'
        checked={itemsProps.required}
      />
      <TextField value={itemsProps.caption} onChange={onChangeField('caption')} label={'caption'} />
      <TextField value={itemsProps.label} onChange={onChangeField('label')} label={'label'} />
      <Select
        label='status'
        getItemKey={(key: TextFieldPropStatus) => key}
        getItemLabel={(label: TextFieldPropStatus) => label}
        value={itemsProps.status}
        items={statusArray}
        onChange={({ value }) => onChangeStatus(value)}
      />
      <Select
        label='labelPosition'
        getItemKey={(key: 'top' | 'left') => key}
        getItemLabel={(label: 'top' | 'left') => label}
        value={itemsProps.labelPosition}
        items={labelPositionArray}
        onChange={({ value }) => onChangeLabelPosition(value)}
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
        value={itemsProps.placeholder}
        onChange={onChangeField('placeholder')}
        label={'placeholder'}
      />
      <Switch
        onChange={onChangeSwitch('isLoading')}
        label='isLoading'
        checked={itemsProps.isLoading}
      />
      <Switch
        onChange={onChangeSwitch('multiple')}
        label='multiple'
        checked={itemsProps.multiple}
      />
    </>
  )
}
